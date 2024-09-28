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
        return formatHTTPResponse(UrlFetchApp.fetch(baseUrl + url, Object.assign(Object.assign({}, baseOptions), options)));
    };
}
function setQuery(url, query) {
    if (!query)
        return query;
    return (url +
        "?" +
        Object.keys(query)
            .map((key) => `${key}=${query[key]}`)
            .join("&"));
}
function formatHTTPResponse(response) {
    return {
        status: response.getResponseCode(),
        headers: response.getHeaders(),
        content: JSON.parse(response.getContentText()),
    };
}
