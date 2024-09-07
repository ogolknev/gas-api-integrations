declare namespace Wildberries {
    namespace Content {
        class Instance {

        }

        namespace V2 {
            namespace Cards {
                namespace Upload {
                    interface RequestBody {
                        subjectID: number;
                        variants: {
                            vendorCode: string;
                            title: string;
                            description: string;
                            brand: string;
                            dimensions: {
                                length: number;
                                width: number;
                                height: number;
                            };
                            characteristics: {
                                id: number;
                                value: string[] | number;
                            }[];
                            sizes: {
                                techSize: string;
                                wbSize: string;
                                price: number;
                                skus: string[];
                            }[];
                        }[];
                    }
                    interface Response {
                        data: null;
                        error: boolean;
                        errorText: string;
                        additionalErrors: {};
                    }
                }
                namespace Update {
                    interface RequestBody {
                        nmID: number;
                        vendorCode: string;
                        brand: string;
                        title: string;
                        description: string;
                        dimensions: {
                            length: number;
                            width: number;
                            height: number;
                        };
                        characteristics: {
                            id: number;
                            value: string[];
                        }[];
                        sizes: {
                            chrtID: number;
                            techSize: string;
                            wbSize: string;
                            skus: string[];
                        }[];
                    }
                    interface Response {
                        data: null;
                        error: boolean;
                        errorText: string;
                        additionalErrors: {};
                    }
                }
            }
        }
    }
    namespace DiscountsPrices { }
    namespace Supplies { }
    namespace Marketplace { }
    namespace Statistics { }
    namespace SellerAnalytics { }
    namespace Advert {
        class Instance {}
        namespace V1 {
            namespace Promotion {
                namespace Count {
                    interface Response {
                        adverts: {
                            type: number;
                            status: number;
                            count: number;
                            advert_list: {
                                advertId: number;
                                changeTime: string;
                            }[];
                        }[];
                        all: number;
                    }
                }
            }
        }
        namespace V2 {
            namespace Fullstats {
                namespace RequestBody {
                    interface WithDate {
                        id: number;
                        dates?: string[];
                    }
                    interface WithInterval {
                        id: number;
                        interval: {
                            begin: string;
                            end: string;
                        };
                    }
                }
                namespace Response {
                    interface WithDate extends Common {
                        dates: string[];
                    }
                    interface WithInterval extends Common {
                        interval: {
                            begin: string,
                            end: string
                        }
                    }
                    interface Common {
                        views: number;
                        clicks: number;
                        ctr: number;
                        cpc: number;
                        sum: number;
                        atbs: number;
                        orders: number;
                        cr: number;
                        shks: number;
                        sum_price: number;
                        days: {
                            date: string;
                            views: number;
                            clicks: number;
                            ctr: number;
                            cpc: number;
                            sum: number;
                            atbs: number;
                            orders: number;
                            cr: number;
                            shks: number;
                            sum_price: number;
                            apps: {
                                views: number;
                                clicks: number;
                                ctr: number;
                                cpc: number;
                                sum: number;
                                atbs: number;
                                orders: number;
                                cr: number;
                                shks: number;
                                sum_price: number;
                                nm: {
                                    views: number;
                                    clicks: number;
                                    ctr: number;
                                    cpc: number;
                                    sum: number;
                                    atbs: number;
                                    orders: number;
                                    cr: number;
                                    shks: number;
                                    sum_price: number;
                                    name: string;
                                    nmId: number;
                                }[];
                                appType: number;
                            }[];
                        }[];
                        boosterStats: {
                            date: string;
                            nm: number;
                            avg_position: number;
                        }[];
                        advertId: number;
                    }
                }
            }
        }
    }
    namespace Recommend { }
    namespace Feedback { }
    namespace Common { }
    namespace BuyerChat { }
    namespace Returns { }
    namespace Documents { }
}