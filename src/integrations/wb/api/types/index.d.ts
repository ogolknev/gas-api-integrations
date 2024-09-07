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
                interface RequestBody {
                    id: number;
                    dates: string[];
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