import { configuredFetch } from "../../utils";
import { Sections, Common, WB_API } from "./types";
declare class API_Section {
    fetch: (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => {
        status: number;
        headers: object;
        content: any;
    };
    constructor(access: string, baseUrl?: string);
}
export declare class ProductManagment extends API_Section {
    constructor(access: string);
    nomenclatures: Nomenclatures;
    pricesAndDiscounts: PricesAndDiscounts;
}
declare class Nomenclatures {
    constructor(fetch: ReturnType<typeof configuredFetch>);
    fetch: (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => {
        status: number;
        headers: object;
        content: any;
    };
    nomenclaturesList(payload: WB_API.ProductManagment.Nomenclatures.NomenclaturesList.RequestBody, query?: WB_API.ProductManagment.Nomenclatures.NomenclaturesList.Query): Common.HTTPResponse<WB_API.ProductManagment.Nomenclatures.NomenclaturesList.Response>;
}
declare class PricesAndDiscounts {
    constructor(fetch: ReturnType<typeof configuredFetch>);
    fetch: (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => {
        status: number;
        headers: object;
        content: any;
    };
    getProducts(query: WB_API.ProductManagment.PricesAndDiscounts.GetProducts.Query): Common.HTTPResponse<WB_API.ProductManagment.PricesAndDiscounts.GetProducts.Response>;
}
export declare class MarketingAndPromotion extends API_Section {
    constructor(access: string);
    campaignManagement: CampaignManagement;
}
declare class CampaignManagement {
    constructor(fetch: ReturnType<typeof configuredFetch>);
    fetch: (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => {
        status: number;
        headers: object;
        content: any;
    };
    campaignsLists(): Common.HTTPResponse<WB_API.MarketingAndPromotion.CampaignManagement.CampaignsLists.Response>;
    campaignsInformation(payload: WB_API.MarketingAndPromotion.CampaignManagement.CampaignsInformation.RequestBody, query?: WB_API.MarketingAndPromotion.CampaignManagement.CampaignsInformation.Query): Common.HTTPResponse<WB_API.MarketingAndPromotion.CampaignManagement.CampaignsInformation.Response>;
}
export declare class AnalyticsAndData extends API_Section {
    constructor(access: string);
    promotionStatistics: PromotionStatistics;
    salesFunnel: SalesFunnel;
}
declare class PromotionStatistics {
    constructor(fetch: ReturnType<typeof configuredFetch>);
    fetch: (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => {
        status: number;
        headers: object;
        content: any;
    };
    campaignsStatistics(payload: WB_API.AnalyticsAndData.PromotionStatistics.CampaignsStatistics.RequestBody.WithDate): Common.HTTPResponse<WB_API.AnalyticsAndData.PromotionStatistics.CampaignsStatistics.Response.WithDate>;
    campaignsStatistics(payload: WB_API.AnalyticsAndData.PromotionStatistics.CampaignsStatistics.RequestBody.WithInterval): Common.HTTPResponse<WB_API.AnalyticsAndData.PromotionStatistics.CampaignsStatistics.Response.WithInterval>;
}
declare class SalesFunnel {
    constructor(fetch: ReturnType<typeof configuredFetch>);
    fetch: (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => {
        status: number;
        headers: object;
        content: any;
    };
    productCardStatisticsHistory(payload: WB_API.AnalyticsAndData.SalesFunnel.ProductCardStatisticsHistory.RequestBody): Common.HTTPResponse<WB_API.AnalyticsAndData.SalesFunnel.ProductCardStatisticsHistory.Response>;
}
export declare class Reports extends API_Section {
    constructor(access: string);
    productReports: ProductReports;
}
declare class ProductReports {
    constructor(fetch: ReturnType<typeof configuredFetch>);
    fetch: (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => {
        status: number;
        headers: object;
        content: any;
    };
    warehouse(query: WB_API.Reports.ProductReports.Warehouse.Query): Common.HTTPResponse<WB_API.Reports.ProductReports.Warehouse.Response>;
    orders(query: WB_API.Reports.ProductReports.Orders.Query): Common.HTTPResponse<WB_API.Reports.ProductReports.Orders.Response>;
    sales(query: WB_API.Reports.ProductReports.Sales.Query): Common.HTTPResponse<WB_API.Reports.ProductReports.Sales.Response>;
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
    cardList(payload: Sections.Content.CardList.RequestBody, query?: Sections.Content.CardList.Query): Common.HTTPResponse<Sections.Content.CardList.Response>;
    constructor(access: string);
}
export {};
