"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuredFetch = configuredFetch;
exports.setQuery = setQuery;
exports.formatHTTPResponse = formatHTTPResponse;
function configuredFetch(baseOptions, baseUrl = "") {
    return (url, options) => {
        if (options === null || options === void 0 ? void 0 : options.payload) {
            options.payload = JSON.stringify(options.payload);
        }
        let response = formatHTTPResponse(UrlFetchApp.fetch(baseUrl + url, Object.assign(Object.assign({}, baseOptions), options)));
        // class HTTPResponseError extends Error {
        //   constructor(message: string, code: number) {
        //     super(message);
        //     this.code = code;
        //   }
        //   code: number;
        // }
        // while (response.status !== Common.HTTPResponseStatus.success) {
        //   switch (response.status) {
        //     case Common.HTTPResponseStatus.badRequest:
        //       throw new HTTPResponseError(
        //         "Bad request." + JSON.stringify(response.content),
        //         Common.HTTPResponseStatus.badRequest
        //       );
        //     case Common.HTTPResponseStatus.unauthorized:
        //       throw new HTTPResponseError(
        //         "Unauthorized.",
        //         Common.HTTPResponseStatus.unauthorized
        //       );
        //     case Common.HTTPResponseStatus.accessDenied:
        //       throw new HTTPResponseError(
        //         "Access denied.",
        //         Common.HTTPResponseStatus.accessDenied
        //       );
        //     case Common.HTTPResponseStatus.notFound:
        //       throw new HTTPResponseError(
        //         "Not found",
        //         Common.HTTPResponseStatus.notFound
        //       );
        //     case Common.HTTPResponseStatus.tooManyRequests:
        //       throw new HTTPResponseError(
        //         "Too many request.",
        //         Common.HTTPResponseStatus.tooManyRequests
        //       );
        //     default:
        //       console.error(JSON.stringify(response.content));
        //       break;
        //   }
        //   response = formatHTTPResponse(
        //     UrlFetchApp.fetch(baseUrl + url, { ...baseOptions, ...options })
        //   );
        // }
        return response;
    };
}
function setQuery(url, query) {
    if (!query)
        return url;
    return (url +
        "?" +
        Object.keys(query)
            .map((key) => `${key}=${query[key]}`)
            .join("&"));
}
function formatHTTPResponse(response) {
    if (!response) {
        throw new Error("No response.");
    }
    return {
        status: response.getResponseCode(),
        headers: response.getHeaders(),
        content: JSON.parse(response.getContentText()),
    };
}
