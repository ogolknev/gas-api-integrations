"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Advert = exports.Analytics = exports.Statistics = exports.DiscountsPrices = void 0;
const utils_1 = require("../../utils");
class API_Section {
    constructor(access, baseUrl) {
        this.fetch = (0, utils_1.configuredFetch)(baseUrl, {
            headers: {
                Authorization: "Bearer " + access,
                "Content-Type": "application/json",
            },
            muteHttpExceptions: true,
        });
    }
}
class DiscountsPrices extends API_Section {
    getProducts(query) {
        return (0, utils_1.formatHTTPResponse)(this.fetch((0, utils_1.setQuery)("/api/v2/list/goods/filter", query), {
            method: "get",
        }));
    }
    constructor(access) {
        super(access, "https://discounts-prices-api.wildberries.ru");
    }
}
exports.DiscountsPrices = DiscountsPrices;
class Statistics extends API_Section {
    warehouse(query) {
        return (0, utils_1.formatHTTPResponse)(this.fetch((0, utils_1.setQuery)("/api/v1/supplier/stocks", query), { method: "get" }));
    }
    orders(query) {
        return (0, utils_1.formatHTTPResponse)(this.fetch((0, utils_1.setQuery)("/api/v1/supplier/orders", query), { method: "get" }));
    }
    sales(query) {
        return (0, utils_1.formatHTTPResponse)(this.fetch((0, utils_1.setQuery)("/api/v1/supplier/sales", query), { method: "get" }));
    }
    constructor(access) {
        super(access, "https://statistics-api.wildberries.ru");
    }
}
exports.Statistics = Statistics;
class Analytics extends API_Section {
    pcStatistics(payload) {
        return (0, utils_1.formatHTTPResponse)(this.fetch("/api/v2/nm-report/detail", { method: "post", payload }));
    }
    pcStatisticsHistory(payload) {
        return (0, utils_1.formatHTTPResponse)(this.fetch("/api/v2/nm-report/detail/history", {
            method: "post",
            payload,
        }));
    }
    pcStatisticsGroupedHistory(payload) {
        return (0, utils_1.formatHTTPResponse)(this.fetch("/api/v2/nm-report/grouped/history", {
            method: "post",
            payload,
        }));
    }
    constructor(access) {
        super(access, "https://seller-analytics-api.wildberries.ru");
    }
}
exports.Analytics = Analytics;
class Advert extends API_Section {
    campaignsLists() {
        return (0, utils_1.formatHTTPResponse)(this.fetch("/adv/v1/promotion/count"));
    }
    campaignsInformation() {
        return (0, utils_1.formatHTTPResponse)(this.fetch("/adv/v1/promotion/adverts"));
    }
    campaignsStatistics(payload) {
        return (0, utils_1.formatHTTPResponse)(this.fetch("/adv/v2/fullstats", { method: "post", payload }));
    }
    constructor(access) {
        super(access, "https://advert-api.wildberries.ru");
    }
}
exports.Advert = Advert;
