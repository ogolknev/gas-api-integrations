import { configuredFetch, setQuery } from "../../utils";

class API_Section {

    fetch

    constructor(access: string, baseUrl: string) {
        this.fetch = configuredFetch(baseUrl, {
            headers: {
                Authorization: "Bearer " + access,
                'Content-Type': "application/json"
            },
            muteHttpExceptions: true
        })
    }
}

export class Statistics extends API_Section implements Wildberries.Statistics.Instance {

    api: { v1: { supplier: { stocks: typeof Wildberries.Statistics.Api.V1.Supplier.Stocks.method; orders: typeof Wildberries.Statistics.Api.V1.Supplier.Orders.method; sales: typeof Wildberries.Statistics.Api.V1.Supplier.Sales.method; }; }; };

    constructor(access: string) {
        super(access, "https://statistics-api.wildberries.ru")
        const self = this
        this.api = {
            v1: {
                supplier: {
                    stocks(query) {
                        return self.fetch(setQuery("/api/v1/supplier/stocks", query), { method: 'get' })
                    },
                    orders(query) {
                        return self.fetch(setQuery("/api/v1/supplier/orders", query), { method: 'get' })
                    },
                    sales(query) {
                        return self.fetch(setQuery("/api/v1/supplier/sales", query), { method: 'get' })
                    }
                }
            }
        }
    }
}
class SellerAnalytics extends API_Section implements Wildberries.SellerAnalytics.Instance {

    api: { v2: { nmReport: { detail: typeof Wildberries.SellerAnalytics.Api.V2.NmReport.Detail.method; }; }; };

    constructor(access: string) {
        super(access, "https://seller-analytics-api.wildberries.ru")
        const self = this
        this.api = {
            v2: {
                nmReport: {
                    detail(payload) {
                        return self.fetch("/api/v2/nm-report/detail", { method: 'post', payload})
                    }
                }
            }
        }
    }
}
class Advert extends API_Section implements Wildberries.Advert.Instance {

    adv: { v1: { promotion: { count: typeof Wildberries.Advert.Adv.V1.Promotion.Count.method; }; }; v2: { fullstats: typeof Wildberries.Advert.Adv.V2.Fullstats.method; }; };

    constructor(access: string) {
        super(access, "https://advert-api.wildberries.ru")
        
        const self = this
        this.adv = {
            v1: {
                promotion: {
                    count() {
                        return self.fetch("/adv/v1/promotion/count", { method: 'get' })
                    }
                }
            },
            v2: {
                fullstats(payload) {
                    return self.fetch("/adv/v2/fullstats", { method: 'post', payload })
                }
            }
        }
    }

}