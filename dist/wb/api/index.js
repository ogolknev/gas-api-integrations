"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Advert = exports.SellerAnalytics = exports.Statistics = void 0;
const utils_1 = require("../../utils");
class API_Section {
    constructor(access, baseUrl) {
        this.fetch = (0, utils_1.configuredFetch)(baseUrl, {
            headers: {
                Authorization: "Bearer " + access,
                'Content-Type': "application/json"
            },
            muteHttpExceptions: true
        });
    }
}
class Statistics extends API_Section {
    constructor(access) {
        super(access, "https://statistics-api.wildberries.ru");
        const self = this;
        this.api = {
            v1: {
                supplier: {
                    stocks: {
                        get(query) {
                            return self.fetch((0, utils_1.setQuery)("/api/v1/supplier/stocks", query), { method: 'get' });
                        },
                    },
                    orders: {
                        get(query) {
                            return self.fetch((0, utils_1.setQuery)("/api/v1/supplier/orders", query), { method: 'get' });
                        }
                    },
                    sales: {
                        get(query) {
                            return self.fetch((0, utils_1.setQuery)("/api/v1/supplier/sales", query), { method: 'get' });
                        }
                    }
                }
            }
        };
    }
}
exports.Statistics = Statistics;
class SellerAnalytics extends API_Section {
    constructor(access) {
        super(access, "https://seller-analytics-api.wildberries.ru");
        const self = this;
        this.api = {
            v2: {
                nmReport: {
                    detail: {
                        post(payload) {
                            return self.fetch("/api/v2/nm-report/detail", { method: 'post', payload });
                        }
                    }
                }
            }
        };
    }
}
exports.SellerAnalytics = SellerAnalytics;
class Advert extends API_Section {
    constructor(access) {
        super(access, "https://advert-api.wildberries.ru");
        const self = this;
        this.adv = {
            v1: {
                promotion: {
                    count: {
                        get() {
                            return self.fetch("/adv/v1/promotion/count", { method: 'get' });
                        }
                    }
                }
            },
            v2: {
                fullstats: {
                    post(payload) {
                        return self.fetch("/adv/v2/fullstats", { method: 'post', payload });
                    }
                }
            }
        };
    }
}
exports.Advert = Advert;
