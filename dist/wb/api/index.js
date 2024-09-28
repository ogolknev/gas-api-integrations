"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = exports.Advert = exports.Analytics = exports.Statistics = exports.DiscountsPrices = exports.Reports = exports.AnalyticsAndData = exports.MarketingAndPromotion = exports.ProductManagment = void 0;
const utils_1 = require("../../utils");
class API_Section {
    constructor(access, baseUrl) {
        this.fetch = (0, utils_1.configuredFetch)({
            headers: {
                Authorization: "Bearer " + access,
                "Content-Type": "application/json",
            },
            muteHttpExceptions: true,
        }, baseUrl);
    }
}
class ProductManagment extends API_Section {
    constructor(access) {
        super(access);
        this.nomenclatures = new Nomenclatures(this.fetch);
        this.pricesAndDiscounts = new PricesAndDiscounts(this.fetch);
    }
}
exports.ProductManagment = ProductManagment;
class Nomenclatures {
    constructor(fetch) {
        this.fetch = fetch;
    }
    nomenclaturesList(payload, query) {
        return this.fetch((0, utils_1.setQuery)("https://content-api.wildberries.ru/content/v2/get/cards/list", query), { method: "post", payload });
    }
}
class PricesAndDiscounts {
    constructor(fetch) {
        this.fetch = fetch;
    }
    getProducts(query) {
        return this.fetch((0, utils_1.setQuery)("https://discounts-prices-api.wildberries.ru/api/v2/list/goods/filter", query), { method: "get" });
    }
}
class MarketingAndPromotion extends API_Section {
    constructor(access) {
        super(access);
        this.campaignManagement = new CampaignManagement(this.fetch);
    }
}
exports.MarketingAndPromotion = MarketingAndPromotion;
class CampaignManagement {
    constructor(fetch) {
        this.fetch = fetch;
    }
    campaignsLists() {
        return this.fetch("https://advert-api.wildberries.ru/adv/v1/promotion/count", {
            method: "get",
        });
    }
    campaignsInformation(payload, query) {
        return this.fetch((0, utils_1.setQuery)("https://advert-api.wildberries.ru/adv/v1/promotion/adverts", query), {
            method: "post",
            payload,
        });
    }
}
class AnalyticsAndData extends API_Section {
    constructor(access) {
        super(access);
        this.promotionStatistics = new PromotionStatistics(this.fetch);
        this.salesFunnel = new SalesFunnel(this.fetch);
    }
}
exports.AnalyticsAndData = AnalyticsAndData;
class PromotionStatistics {
    constructor(fetch) {
        this.fetch = fetch;
    }
    campaignsStatistics(payload) {
        return this.fetch("https://advert-api.wildberries.ru/adv/v2/fullstats", {
            method: "post",
            payload,
        });
    }
}
class SalesFunnel {
    constructor(fetch) {
        this.fetch = fetch;
    }
    productCardStatisticsHistory(payload) {
        return this.fetch("https://seller-analytics-api.wildberries.ru/api/v2/nm-report/detail/history", { method: "post", payload });
    }
}
class Reports extends API_Section {
    constructor(access) {
        super(access);
        this.productReports = new ProductReports(this.fetch);
    }
}
exports.Reports = Reports;
class ProductReports {
    constructor(fetch) {
        this.fetch = fetch;
    }
    warehouse(query) {
        return this.fetch((0, utils_1.setQuery)("https://statistics-api.wildberries.ru/api/v1/supplier/stocks", query), { method: "get" });
    }
    orders(query) {
        return this.fetch((0, utils_1.setQuery)("https://statistics-api.wildberries.ru/api/v1/supplier/orders", query), { method: "get" });
    }
    sales(query) {
        return this.fetch((0, utils_1.setQuery)("https://statistics-api.wildberries.ru/api/v1/supplier/sales", query), { method: "get" });
    }
}
// deprecated
class DiscountsPrices extends API_Section {
    getProducts(query) {
        return this.fetch((0, utils_1.setQuery)("/api/v2/list/goods/filter", query), {
            method: "get",
        });
    }
    constructor(access) {
        super(access, "https://discounts-prices-api.wildberries.ru");
    }
}
exports.DiscountsPrices = DiscountsPrices;
class Statistics extends API_Section {
    warehouse(query) {
        return this.fetch((0, utils_1.setQuery)("/api/v1/supplier/stocks", query), {
            method: "get",
        });
    }
    orders(query) {
        return this.fetch((0, utils_1.setQuery)("/api/v1/supplier/orders", query), {
            method: "get",
        });
    }
    sales(query) {
        return this.fetch((0, utils_1.setQuery)("/api/v1/supplier/sales", query), {
            method: "get",
        });
    }
    constructor(access) {
        super(access, "https://statistics-api.wildberries.ru");
    }
}
exports.Statistics = Statistics;
class Analytics extends API_Section {
    pcStatistics(payload) {
        return this.fetch("/api/v2/nm-report/detail", { method: "post", payload });
    }
    pcStatisticsHistory(payload) {
        return this.fetch("/api/v2/nm-report/detail/history", {
            method: "post",
            payload,
        });
    }
    pcStatisticsGroupedHistory(payload) {
        return this.fetch("/api/v2/nm-report/grouped/history", {
            method: "post",
            payload,
        });
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
    campaignsInformation(queryOrPayload) {
        if (Array.isArray(queryOrPayload)) {
            return this.fetch("/adv/v1/promotion/adverts", {
                payload: queryOrPayload,
                method: "post",
            });
        }
        return this.fetch((0, utils_1.setQuery)("/adv/v1/promotion/adverts", queryOrPayload), {
            method: "post",
        });
    }
    campaignsStatistics(payload) {
        return this.fetch("/adv/v2/fullstats", { method: "post", payload });
    }
    constructor(access) {
        super(access, "https://advert-api.wildberries.ru");
    }
}
exports.Advert = Advert;
class Content extends API_Section {
    cardList(payload, query) {
        let url = "/content/v2/get/cards/list";
        if (query)
            url = (0, utils_1.setQuery)(url, query);
        return this.fetch(url, {
            method: "post",
            payload,
        });
    }
    constructor(access) {
        super(access, "https://content-api.wildberries.ru");
    }
}
exports.Content = Content;
