export declare function configuredFetch(baseUrl: string, baseOptions: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions): (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => GoogleAppsScript.URL_Fetch.HTTPResponse;
export declare function setQuery(url: string, query: any): string;
export declare function formatHTTPResponse(response: GoogleAppsScript.URL_Fetch.HTTPResponse): {
    status: number;
    headers: object;
    content: any;
};
