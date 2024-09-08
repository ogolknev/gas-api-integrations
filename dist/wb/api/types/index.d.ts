export namespace Wildberries {
    namespace Content {
        class Instance {
            content: {
                v2: {
                    cards: {
                        upload: {
                            post: typeof Content.V2.Cards.Upload.post,
                            utils?
                        } 
                        update: {
                            post: typeof Content.V2.Cards.Update.post,
                            utils?
                        } 
                    }
                }
            }
        }
        namespace Content {
            namespace V2 {
                namespace Cards {
                    namespace Upload {

                        function post(payload: RequestBody): Post.Response

                        namespace Post {
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
                    }
                    namespace Update {

                        function post(payload: RequestBody): Post.Response

                        namespace Post {
                            interface RequestBody {
                                nmID: number;
                                vendorCode: string;
                                brand?: string;
                                title?: string;
                                description?: string;
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
    }
    namespace DiscountsPrices { }
    namespace Supplies { }
    namespace Marketplace { }
    namespace Statistics {
        interface Instance {
            api: {
                v1: {
                    supplier: {
                        stocks: {
                            get: typeof Api.V1.Supplier.Stocks.get,
                            utils?
                        }
                        orders: {
                            get: typeof Api.V1.Supplier.Orders.get,
                            utils?
                        }
                        sales: {
                            get: typeof Api.V1.Supplier.Sales.get,
                            utils?
                        }
                    }
                }
            }
        }
        namespace Api {
            namespace V1 {
                namespace Supplier {
                    namespace Stocks {

                        function get(query: Query): Get.Response

                        namespace Get {
                            interface Query {
                                dateFrom: string
                            }
                            type Response = Array<{
                                lastChangeDate: string
                                warehouseName: string
                                supplierArticle: string
                                nmId: number
                                barcode: string
                                quantity: number
                                inWayToClient: number
                                inWayFromClient: number
                                quantityFull: number
                                category: string
                                subject: string
                                brand: string
                                techSize: string
                                Price: number
                                Discount: number
                                isSupply: boolean
                                isRealization: boolean
                                SCCode: string
                            }>
                        }
                    }
                    namespace Orders {

                        function get(query: Query): Get.Response

                        namespace Get {
                            interface Query {
                                dateFrom: string,
                                flag?: 0 | 1
                            }
                            type Response = Array<{
                                date: string
                                lastChangeDate: string
                                warehouseName: string
                                countryName: string
                                oblastOkrugName: string
                                regionName: string
                                supplierArticle: string
                                nmId: number
                                barcode: string
                                category: string
                                subject: string
                                brand: string
                                techSize: string
                                incomeID: number
                                isSupply: boolean
                                isRealization: boolean
                                totalPrice: number
                                discountPercent: number
                                spp: number
                                finishedPrice: number
                                priceWithDisc: number
                                isCancel: boolean
                                cancelDate: string
                                orderType: string
                                sticker: string
                                gNumber: string
                                srid: string
                            }>
                        }
                    }
                    namespace Sales {

                        function get(query: Query): Get.Response

                        namespace Get {
                            interface Query {
                                dateFrom: string,
                                flag?: 0 | 1
                            }
                            type Response = Array<{
                                date: string
                                lastChangeDate: string
                                warehouseName: string
                                countryName: string
                                oblastOkrugName: string
                                regionName: string
                                supplierArticle: string
                                nmId: number
                                barcode: string
                                category: string
                                subject: string
                                brand: string
                                techSize: string
                                incomeID: number
                                isSupply: boolean
                                isRealization: boolean
                                totalPrice: number
                                discountPercent: number
                                spp: number
                                paymentSaleAmount: number
                                forPay: number
                                finishedPrice: number
                                priceWithDisc: number
                                saleID: string
                                orderType: string
                                sticker: string
                                gNumber: string
                                srid: string
                            }>
                        }
                    }
                }
            }
        }
    }
    namespace SellerAnalytics {
        interface Instance {
            api: {
                v2: {
                    nmReport: {
                        detail: {
                            post: typeof Api.V2.NmReport.Detail.post,
                            utils?
                        }
                    }
                }
            }
        }
        namespace Api {
            namespace V2 {
                namespace NmReport {
                    namespace Detail {

                        function post(payload: Post.RequestBody): Post.Response

                        namespace Post {
                            interface RequestBody {
                                brandNames?: string[];
                                objectIDs?: number[];
                                tagIDs?: number[];
                                nmIDs?: number[];
                                timezone?: string;
                                period: {
                                    begin: string;
                                    end: string;
                                };
                                orderBy?: {
                                    field: string;
                                    mode: string;
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
    }
    namespace Advert {
        interface Instance {
            adv: {
                v1: {
                    promotion: {
                        count: {
                            get: typeof Adv.V1.Promotion.Count.get,
                            utils?
                        }
                    }
                },
                v2: {
                    fullstats: {
                        post: typeof Adv.V2.Fullstats.post
                        utils?
                    }
                }
            }
        }
        namespace Adv {
            namespace V1 {
                namespace Promotion {
                    namespace Count {

                        function get(): Adv.V1.Promotion.Count.Get.Response

                        namespace Get {
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
            }
            namespace V2 {
                namespace Fullstats {

                    function isWithDate(
                        payload: Adv.V2.Fullstats.Post.RequestBody.WithDate | Adv.V2.Fullstats.Post.RequestBody.WithInterval
                    ): payload is Adv.V2.Fullstats.Post.RequestBody.WithDate {
                        return (payload as Adv.V2.Fullstats.Post.RequestBody.WithInterval)[0].interval === undefined
                    }

                    function post(payload: Adv.V2.Fullstats.Post.RequestBody.WithDate): Adv.V2.Fullstats.Post.Response.WithDate
                    function post(payload: Adv.V2.Fullstats.Post.RequestBody.WithInterval): Adv.V2.Fullstats.Post.Response.WithInterval

                    namespace Post {
                        namespace RequestBody {
                            type WithDate = WithDateElement[]
                            type WithInterval = WithIntervalElement[]
                            interface WithDateElement {
                                id: number;
                                dates?: string[];
                            }
                            interface WithIntervalElement {
                                id: number;
                                interval: {
                                    begin: string;
                                    end: string;
                                };
                            }
                        }
                        namespace Response {
                            type WithDate = WithDateElement[]
                            type WithInterval = WithIntervalElement[]
                            interface WithDateElement extends CommonElement {
                                dates: string[];
                            }
                            interface WithIntervalElement extends CommonElement {
                                interval: {
                                    begin: string,
                                    end: string
                                }
                            }
                            interface CommonElement {
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
    }
    namespace Recommend { }
    namespace Feedback { }
    namespace Common { }
    namespace BuyerChat { }
    namespace Returns { }
    namespace Documents { }
}