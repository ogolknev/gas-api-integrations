export declare function configuredFetch(baseOptions: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions, baseUrl?: string): (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => {
    status: number;
    headers: object;
    content: any;
};
export declare function setQuery(url: string, query: any): any;
export declare function formatHTTPResponse(response: GoogleAppsScript.URL_Fetch.HTTPResponse): {
    status: number;
    headers: object;
    content: any;
};
