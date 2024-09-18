import { Sections } from "./types";
declare class API_Section {
    fetch: (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => {
        content: any;
        response: GoogleAppsScript.URL_Fetch.HTTPResponse;
    };
    constructor(access: string, baseUrl: string);
}
export declare class DiscountsPrices extends API_Section implements Sections.DiscountsPrices.Methods {
    getProducts(query: Sections.DiscountsPrices.GetProducts.Query): {
        content: any;
        response: GoogleAppsScript.URL_Fetch.HTTPResponse;
    };
    constructor(access: string);
}
export declare class Statistics extends API_Section implements Sections.Statistics.Methods {
    warehouse(query: Sections.Statistics.Warehouse.Query): {
        content: any;
        response: GoogleAppsScript.URL_Fetch.HTTPResponse;
    };
    orders(query: Sections.Statistics.Orders.Query): {
        content: any;
        response: GoogleAppsScript.URL_Fetch.HTTPResponse;
    };
    sales(query: Sections.Statistics.Sales.Query): {
        content: any;
        response: GoogleAppsScript.URL_Fetch.HTTPResponse;
    };
    constructor(access: string);
}
export declare class Analytics extends API_Section implements Sections.Analytics.Methods {
    pcStatistics(payload: Sections.Analytics.PCStatistics.RequestBody): {
        content: any;
        response: GoogleAppsScript.URL_Fetch.HTTPResponse;
    };
    pcStatisticsHistory(payload: Sections.Analytics.PCStatisticsHistory.RequestBody): {
        content: any;
        response: GoogleAppsScript.URL_Fetch.HTTPResponse;
    };
    pcStatisticsGroupedHistory(payload: Sections.Analytics.PCStatisticsGroupedHistory.RequestBody): {
        content: any;
        response: GoogleAppsScript.URL_Fetch.HTTPResponse;
    };
    constructor(access: string);
}
export declare class Advert extends API_Section implements Sections.Advert.Methods {
    campaignsLists(): {
        content: Sections.Advert.CampaignsLists.Response;
        response: GoogleAppsScript.URL_Fetch.HTTPResponse;
    };
    campaignsStatistics(payload: Sections.Advert.CampaignsStatistics.RequestBody.WithDate): {
        content: Sections.Advert.CampaignsStatistics.Response.WithDate;
        response: GoogleAppsScript.URL_Fetch.HTTPResponse;
    };
    campaignsStatistics(payload: Sections.Advert.CampaignsStatistics.RequestBody.WithInterval): {
        content: Sections.Advert.CampaignsStatistics.Response.WithInterval;
        response: GoogleAppsScript.URL_Fetch.HTTPResponse;
    };
    constructor(access: string);
}
export {};
