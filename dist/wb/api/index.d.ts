import { Sections } from "./types";
declare class API_Section {
    fetch: (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => any;
    constructor(access: string, baseUrl: string);
}
export declare class Statistics extends API_Section implements Sections.Statistics.Methods {
    warehouse(query: Sections.Statistics.Warehouse.Query): Sections.Statistics.Warehouse.Response;
    orders(query: Sections.Statistics.Orders.Query): Sections.Statistics.Orders.Response;
    sales(query: Sections.Statistics.Sales.Query): Sections.Statistics.Sales.Response;
    constructor(access: string);
}
export declare class Analytics extends API_Section implements Sections.Analytics.Methods {
    pcStatistics(payload: Sections.Analytics.PCStatistics.RequestBody): Sections.Analytics.PCStatistics.Response;
    pcStatisticsGroupedHistory(payload: Sections.Analytics.PCStatisticsGroupedHistory.RequestBody): Sections.Analytics.PCStatisticsGroupedHistory.Response;
    constructor(access: string);
}
export declare class Advert extends API_Section implements Sections.Advert.Methods {
    campaignsLists(): Sections.Advert.CampaignsLists.Response;
    campaignsStatistics(payload: Sections.Advert.CampaignsStatistics.RequestBody.WithDate): Sections.Advert.CampaignsStatistics.Response.WithDate;
    campaignsStatistics(payload: Sections.Advert.CampaignsStatistics.RequestBody.WithInterval): Sections.Advert.CampaignsStatistics.Response.WithInterval;
    constructor(access: string);
}
export {};
