import { ProductManagment, MarketingAndPromotion, AnalyticsAndData, Reports } from "./wb/api";
export declare class Wildberries {
    productManagment: ProductManagment;
    marketingAndPromotion: MarketingAndPromotion;
    analyticsAndData: AnalyticsAndData;
    reports: Reports;
    constructor(access: string);
}
