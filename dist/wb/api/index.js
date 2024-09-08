"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wildberries = exports.Advert = exports.Analytics = exports.Statistics = void 0;
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
    warehouse(query) {
        return this.fetch((0, utils_1.setQuery)("/api/v1/supplier/stocks", query), { method: 'get' });
    }
    orders(query) {
        return this.fetch((0, utils_1.setQuery)("/api/v1/supplier/orders", query), { method: 'get' });
    }
    sales(query) {
        return this.fetch((0, utils_1.setQuery)("/api/v1/supplier/sales", query), { method: 'get' });
    }
    constructor(access) {
        super(access, "https://statistics-api.wildberries.ru");
    }
}
exports.Statistics = Statistics;
class Analytics extends API_Section {
    pcStatistics(payload) {
        return this.fetch("/api/v2/nm-report/detail", { method: 'post', payload });
    }
    constructor(access) {
        super(access, "https://seller-analytics-api.wildberries.ru");
    }
}
exports.Analytics = Analytics;
class Advert extends API_Section {
    campaignsLists() {
        return this.fetch("/adv/v1/promotion/count");
    }
    campaignsStatistics(payload) {
        return this.fetch("/adv/v2/fullstats", { method: 'post', payload });
    }
    constructor(access) {
        super(access, "https://advert-api.wildberries.ru");
    }
}
exports.Advert = Advert;
class Wildberries {
    constructor(access) {
        this.statistics = new Statistics(access);
        this.analytics = new Analytics(access);
        this.advert = new Advert(access);
    }
}
exports.Wildberries = Wildberries;
