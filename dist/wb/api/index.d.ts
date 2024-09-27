import { Sections, Common } from "./types";
declare class API_Section {
    fetch: (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => GoogleAppsScript.URL_Fetch.HTTPResponse;
    constructor(access: string, baseUrl: string);
}
export declare class DiscountsPrices extends API_Section {
    getProducts(query: Sections.DiscountsPrices.GetProducts.Query): Common.HTTPResponse<Sections.DiscountsPrices.GetProducts.Response>;
    constructor(access: string);
}
export declare class Statistics extends API_Section {
    warehouse(query: Sections.Statistics.Warehouse.Query): Common.HTTPResponse<Sections.Statistics.Warehouse.Response>;
    orders(query: Sections.Statistics.Orders.Query): Common.HTTPResponse<Sections.Statistics.Orders.Response>;
    sales(query: Sections.Statistics.Sales.Query): Common.HTTPResponse<Sections.Statistics.Sales.Response>;
    constructor(access: string);
}
export declare class Analytics extends API_Section {
    pcStatistics(payload: Sections.Analytics.PCStatistics.RequestBody): Common.HTTPResponse<Sections.Analytics.PCStatistics.Response>;
    pcStatisticsHistory(payload: Sections.Analytics.PCStatisticsHistory.RequestBody): Common.HTTPResponse<Sections.Analytics.PCStatisticsHistory.Response>;
    pcStatisticsGroupedHistory(payload: Sections.Analytics.PCStatisticsGroupedHistory.RequestBody): Common.HTTPResponse<Sections.Analytics.PCStatisticsGroupedHistory.Response>;
    constructor(access: string);
}
export declare class Advert extends API_Section {
    campaignsLists(): Common.HTTPResponse<Sections.Advert.CampaignsLists.Response>;
    campaignsInformation(query: Sections.Advert.CampaignsInformation.Query): Common.HTTPResponse<Sections.Advert.CampaignsInformation.Response>;
    campaignsInformation(payload: Sections.Advert.CampaignsInformation.RequestBody): Common.HTTPResponse<Sections.Advert.CampaignsInformation.Response>;
    campaignsStatistics(payload: Sections.Advert.CampaignsStatistics.RequestBody.WithDate): Common.HTTPResponse<Sections.Advert.CampaignsStatistics.Response.WithDate>;
    campaignsStatistics(payload: Sections.Advert.CampaignsStatistics.RequestBody.WithInterval): Common.HTTPResponse<Sections.Advert.CampaignsStatistics.Response.WithInterval>;
    constructor(access: string);
}
export declare class Content extends API_Section {
    cardsList(payload: Sections.Content.CardsList.RequestBody, query?: Sections.Content.CardsList.Query): Common.HTTPResponse<Sections.Content.CardsList.Response>;
    constructor(access: string);
}
export {};
