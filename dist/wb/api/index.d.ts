import { Wildberries } from "./types";
declare class API_Section {
    fetch: (url: string, options?: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions) => any;
    constructor(access: string, baseUrl: string);
}
export declare class Statistics extends API_Section implements Wildberries.Statistics.Instance {
    api: {
        v1: {
            supplier: {
                stocks: {
                    get: typeof Wildberries.Statistics.Api.V1.Supplier.Stocks.get;
                    utils?: any;
                };
                orders: {
                    get: typeof Wildberries.Statistics.Api.V1.Supplier.Orders.get;
                    utils?: any;
                };
                sales: {
                    get: typeof Wildberries.Statistics.Api.V1.Supplier.Sales.get;
                    utils?: any;
                };
            };
        };
    };
    constructor(access: string);
}
export declare class SellerAnalytics extends API_Section implements Wildberries.SellerAnalytics.Instance {
    api: {
        v2: {
            nmReport: {
                detail: {
                    post: typeof Wildberries.SellerAnalytics.Api.V2.NmReport.Detail.post;
                    utils?: any;
                };
            };
        };
    };
    constructor(access: string);
}
export declare class Advert extends API_Section implements Wildberries.Advert.Instance {
    adv: {
        v1: {
            promotion: {
                count: {
                    get: typeof Wildberries.Advert.Adv.V1.Promotion.Count.get;
                    utils?: any;
                };
            };
        };
        v2: {
            fullstats: {
                post: typeof Wildberries.Advert.Adv.V2.Fullstats.post;
                utils?: any;
            };
        };
    };
    constructor(access: string);
}
export {};
