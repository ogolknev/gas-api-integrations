declare class API_Section {
    fetch: (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => any;
    constructor(access: string, baseUrl: string);
}
export declare class Statistics extends API_Section implements Wildberries.Statistics.Instance {
    api: {
        v1: {
            supplier: {
                stocks: typeof Wildberries.Statistics.Api.V1.Supplier.Stocks.method;
                orders: typeof Wildberries.Statistics.Api.V1.Supplier.Orders.method;
                sales: typeof Wildberries.Statistics.Api.V1.Supplier.Sales.method;
            };
        };
    };
    constructor(access: string);
}
export declare class SellerAnalytics extends API_Section implements Wildberries.SellerAnalytics.Instance {
    api: {
        v2: {
            nmReport: {
                detail: typeof Wildberries.SellerAnalytics.Api.V2.NmReport.Detail.method;
            };
        };
    };
    constructor(access: string);
}
export declare class Advert extends API_Section implements Wildberries.Advert.Instance {
    adv: {
        v1: {
            promotion: {
                count: typeof Wildberries.Advert.Adv.V1.Promotion.Count.method;
            };
        };
        v2: {
            fullstats: typeof Wildberries.Advert.Adv.V2.Fullstats.method;
        };
    };
    constructor(access: string);
}
export {};
