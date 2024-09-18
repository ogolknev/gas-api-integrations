"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuredFetch = configuredFetch;
exports.setQuery = setQuery;
function configuredFetch(baseUrl, baseOptions) {
    return (url, options) => {
        if (options === null || options === void 0 ? void 0 : options.payload) {
            options.payload = JSON.stringify(options.payload);
        }
        const response = UrlFetchApp.fetch(baseUrl + url, Object.assign(Object.assign({}, baseOptions), options));
        return {
            content: JSON.parse(response.getContentText()),
            response
        };
    };
}
function setQuery(url, query) {
    return url + '?' + Object.keys(query).map(key => `${key}=${query[key]}`).join('&');
}
