declare namespace Wildberries {
    namespace Content {
        class Instance {
            content: {
                v2: {
                    cards: {
                        upload: typeof Content.V2.Cards.Upload.method,
                        update: typeof Content.V2.Cards.Update.method
                    }
                }
            }
        }
        namespace Content {
            namespace V2 {
                namespace Cards {
                    namespace Upload {

                        function method(payload: RequestBody): Response

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

                        function method(payload: RequestBody): Response

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
    }
    namespace DiscountsPrices { }
    namespace Supplies { }
    namespace Marketplace { }
    namespace Statistics {
        class Instance {
            api: {
                v1: {
                    supplier: {
                        stocks: typeof Api.V1.Supplier.Stocks.method,
                        orders: typeof Api.V1.Supplier.Orders.method,

                    }
                }
            }
        }
        namespace Api {
            namespace V1 {
                namespace Supplier {
                    namespace Stocks {

                        function method(query: Query): Response

                        interface Query {
                            dateFrom: string
                        }
                        interface Response {
                            lastChangeDate: string;
                            warehouseName: string;
                            supplierArticle: string;
                            nmId: number;
                            barcode: string;
                            quantity: number;
                            inWayToClient: number;
                            inWayFromClient: number;
                            quantityFull: number;
                            category: string;
                            subject: string;
                            brand: string;
                            techSize: string;
                            Price: number;
                            Discount: number;
                            isSupply: boolean;
                            isRealization: boolean;
                            SCCode: string;
                        }
                    }
                    namespace Orders {

                        function method(query: Query): Response

                        interface Query {
                            dateFrom: string,
                            flag: 0 | 1
                        }
                        interface Response {
                            date: string;
                            lastChangeDate: string;
                            warehouseName: string;
                            countryName: string;
                            oblastOkrugName: string;
                            regionName: string;
                            supplierArticle: string;
                            nmId: number;
                            barcode: string;
                            category: string;
                            subject: string;
                            brand: string;
                            techSize: string;
                            incomeID: number;
                            isSupply: boolean;
                            isRealization: boolean;
                            totalPrice: number;
                            discountPercent: number;
                            spp: number;
                            finishedPrice: number;
                            priceWithDisc: number;
                            isCancel: boolean;
                            cancelDate: string;
                            orderType: string;
                            sticker: string;
                            gNumber: string;
                            srid: string;
                        }
                    }
                    // namespace 
                }
            }
        }
    }
    namespace SellerAnalytics {
        class Instance {
            api: {
                v2: {
                    nmReport: {
                        detail: typeof Api.V2.NmReport.Detail.method
                    }
                }
            }
        }
        namespace Api {
            namespace V2 {
                namespace NmReport {
                    namespace Detail {

                        function method(payload: RequestBody): Response

                        interface RequestBody {
                            brandNames: string[];
                            objectIDs: number[];
                            tagIDs: number[];
                            nmIDs: number[];
                            timezone: string;
                            period: {
                                field: string;
                                mode: string;
                            };
                            orderBy: {
                                begin: string;
                                end: string;
                            };
                            page: number;
                        }
                        interface Response {
                            data: {
                                page: number;
                                isNextPage: boolean;
                                cards: {
                                    nmID: number;
                                    vendorCode: string;
                                    brandName: string;
                                    tags: {
                                        id: number;
                                        name: string;
                                    }[];
                                    object: {
                                        id: number;
                                        name: string;
                                    };
                                    statistics: {
                                        selectedPeriod: {
                                            begin: string;
                                            end: string;
                                            openCardCount: number;
                                            addToCartCount: number;
                                            ordersCount: number;
                                            ordersSumRub: number;
                                            buyoutsCount: number;
                                            buyoutsSumRub: number;
                                            cancelCount: number;
                                            cancelSumRub: number;
                                            avgPriceRub: number;
                                            avgOrdersCountPerDay: number;
                                            conversions: {
                                                addToCartPercent: number;
                                                cartToOrderPercent: number;
                                                buyoutsPercent: number;
                                            };
                                        };
                                        previousPeriod: {
                                            begin: string;
                                            end: string;
                                            openCardCount: number;
                                            addToCartCount: number;
                                            ordersCount: number;
                                            ordersSumRub: number;
                                            buyoutsCount: number;
                                            buyoutsSumRub: number;
                                            cancelCount: number;
                                            cancelSumRub: number;
                                            avgPriceRub: number;
                                            avgOrdersCountPerDay: number;
                                            conversions: {
                                                addToCartPercent: number;
                                                cartToOrderPercent: number;
                                                buyoutsPercent: number;
                                            };
                                        };
                                        periodComparison: {
                                            openCardDynamics: number;
                                            addToCartDynamics: number;
                                            ordersCountDynamics: number;
                                            ordersSumRubDynamics: number;
                                            buyoutsCountDynamics: number;
                                            buyoutsSumRubDynamics: number;
                                            cancelCountDynamics: number;
                                            cancelSumRubDynamics: number;
                                            avgOrdersCountPerDayDynamics: number;
                                            avgPriceRubDynamics: number;
                                            conversions: {
                                                addToCartPercent: number;
                                                cartToOrderPercent: number;
                                                buyoutsPercent: number;
                                            };
                                        };
                                    };
                                    stocks: {
                                        stocksMp: number;
                                        stocksWb: number;
                                    };
                                }[];
                            };
                            error: boolean;
                            errorText: string;
                            additionalErrors: {
                                field: string;
                                description: string;
                            }[];
                        }
                    }
                }
            }
        }
    }
    namespace Advert {
        class Instance {
            adv: {
                v1: {
                    promotion: {
                        count: typeof Adv.V1.Promotion.Count.method
                    }
                },
                v2: {
                    fullstats: typeof Adv.V2.Fullstats.method
                }
            }
        }
        namespace Adv {
            namespace V1 {
                namespace Promotion {
                    namespace Count {

                        function method(): Adv.V1.Promotion.Count.Response

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

                    function method(payload: Adv.V2.Fullstats.RequestBody.WithDate): Adv.V2.Fullstats.Response.WithDate
                    function method(payload: Adv.V2.Fullstats.RequestBody.WithInterval): Adv.V2.Fullstats.Response.WithInterval

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
    }
    namespace Recommend { }
    namespace Feedback { }
    namespace Common { }
    namespace BuyerChat { }
    namespace Returns { }
    namespace Documents { }
}