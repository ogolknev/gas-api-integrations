"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuredFetch = configuredFetch;
exports.setQuery = setQuery;
function configuredFetch(baseUrl, baseOptions) {
    return (url, options) => {
        return JSON.parse(UrlFetchApp.fetch(baseUrl + url, Object.assign(Object.assign({}, baseOptions), options)).getContentText());
    };
}
function setQuery(url, query) {
    return url + '?' + Object.keys(query).map(key => `${key}=${query[key]}`).join('&');
}
