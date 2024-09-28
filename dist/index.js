"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wildberries = void 0;
const api_1 = require("./wb/api");
class Wildberries {
    constructor(access) {
        this.productManagment = new api_1.ProductManagment(access);
        this.marketingAndPromotion = new api_1.MarketingAndPromotion(access);
        this.analyticsAndData = new api_1.AnalyticsAndData(access);
        this.reports = new api_1.Reports(access);
    }
}
exports.Wildberries = Wildberries;
