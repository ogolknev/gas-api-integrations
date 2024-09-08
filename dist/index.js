"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wildberries = void 0;
const api_1 = require("./wb/api");
class Wildberries {
    constructor(access) {
        this.statistics = new api_1.Statistics(access);
        this.analytics = new api_1.SellerAnalytics(access);
        this.advert = new api_1.Advert(access);
    }
}
exports.Wildberries = Wildberries;
