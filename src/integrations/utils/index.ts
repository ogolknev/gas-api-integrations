export function configuredFetch(baseUrl: string, baseOptions: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) {
    return (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => {
        return JSON.parse(UrlFetchApp.fetch(baseUrl + url, { ...baseOptions, ...options }).getContentText())
    }
}

export function setQuery(url: string, query: any) {
    return url + '?' + Object.keys(query).map(key => `${key}=${query[key]}`).join('&')
}