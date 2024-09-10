export namespace Sections {
    namespace Content { }
    namespace DiscountsPrices { 

        interface Methods {
            getProducts(query: GetProducts.Query): GetProducts.Response
        }

        namespace GetProducts {
            interface Query {
                limit: number
                offset?: number
                filterNmID?: number
            }
            type Response = {
                data: {
                    listGoods: Array<{
                        nmID: number
                        vendorCode: string
                        sizes: Array<{
                            sizeID: number
                            price: number
                            discountedPrice: number
                            techSizeName: number
                        }>
                        currencyIsoCode4217: string
                        discount: number
                        editableSizePrice: boolean
                    }>
                }
            }
        }
    }
    namespace Supplies { }
    namespace Marketplace {
        namespace Orders { }
        namespace Supplies { }
        namespace Stocks { }
        namespace Warehouses { }
        namespace Passes { }
        namespace DBS { }
    }
    namespace Statistics {

        interface Methods {
            warehouse(query: Warehouse.Query): Warehouse.Response
            orders(query: Orders.Query): Orders.Response
            sales(query: Sales.Query): Sales.Response
        }

        namespace Supplies { }
        namespace Warehouse {
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
        namespace Orders {
            interface Query {
                dateFrom: string,
                flag?: 1 | 0
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
        namespace Sales {
            interface Query {
                dateFrom: string,
                flag?: 1 | 0
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
        namespace RealizationSalesReport { }
    }
    namespace Analytics {

        interface Methods {
            pcStatistics(payload: PCStatistics.RequestBody): PCStatistics.Response
            pcStatisticsHistory(payload: PCStatisticsHistory.RequestBody): PCStatisticsHistory.Response
            pcStatisticsGroupedHistory(payload: PCStatisticsGroupedHistory.RequestBody): PCStatisticsGroupedHistory.Response
        }

        namespace PCStatistics {
            type RequestBody = {
                brandNames?: Array<string>
                objectIDs?: Array<number>
                tagIDs?: Array<number>
                nmIDs?: Array<number>
                timezone?: string
                period: {
                    begin: string
                    end: string
                }
                orderBy?: {
                    field: string
                    mode: string
                }
                page: number
            }
            type Response = {
                data: {
                    page: number
                    isNextPage: boolean
                    cards: Array<{
                        nmID: number
                        vendorCode: string
                        brandName: string
                        tags: Array<{
                            id: number
                            name: string
                        }>
                        object: {
                            id: number
                            name: string
                            statistics: {
                                selectedPeriod: {
                                    begin: string
                                    end: string
                                    openCardCount: number
                                    addToCartCount: number
                                    ordersCount: number
                                    ordersSumRub: number
                                    buyoutsCount: number
                                    buyoutsSumRub: number
                                    cancelCount: number
                                    cancelSumRub: number
                                    avgPriceRub: number
                                    avgOrdersCountPerDay: number
                                    conversions: {
                                        addToCartPercent: number
                                        cartToOrderPercent: number
                                        buyoutsPercent: number
                                    }
                                }
                            }
                            previousPeriod: {
                                begin: string
                                end: string
                                openCardCount: number
                                addToCartCount: number
                                ordersCount: number
                                ordersSumRub: number
                                buyoutsCount: number
                                buyoutsSumRub: number
                                cancelCount: number
                                cancelSumRub: number
                                avgPriceRub: number
                                avgOrdersCountPerDay: number
                                conversions: {
                                    addToCartPercent: number
                                    cartToOrderPercent: number
                                    buyoutsPercent: number
                                }
                            }
                            periodComparison: {
                                openCardDynamics: number
                                addToCartDynamics: number
                                ordersCountDynamics: number
                                ordersSumRubDynamics: number
                                buyoutsCountDynamics: number
                                buyoutsSumRubDynamics: number
                                cancelCountDynamics: number
                                cancelSumRubDynamics: number
                                avgOrdersCountPerDayDynamics: number
                                avgPriceRubDynamics: number
                                conversions: {
                                    addToCartPercent: number
                                    cartToOrderPercent: number
                                    buyoutsPercent: number
                                }
                            }
                        }
                        stocks: {
                            stocksMp: number
                            stocksWb: number
                        }
                    }>
                }
                error: boolean
                errorText: string
                additionalErrors: Array<{
                    field: string
                    description: string
                }>
            }
        }
        namespace PCStatisticsGrouped {

        }
        namespace PCStatisticsHistory {
            type RequestBody = {
                nmIDs: Array<number>
                period: {
                    begin: string
                    end: string
                }
                timezone?: string
                aggregationLevel?: string
            }
            type Response = {
                data: Array<{
                    nmID: number
                    imtName: string
                    vendorCode: string
                    history: Array<{
                        dt: string
                        openCardCount: number
                        addToCartCount: number
                        ordersCount: number
                        ordersSumRub: number
                        buyoutsCount: number
                        buyoutsSumRub: number
                        buyoutPercent: number
                        addToCartConversion: number
                        cartToOrderConversion: number
                    }>
                }>
                error: boolean
                errorText: string
                additionalErrors: Array<{
                    field: string
                    description: string
                }>
            }
        }
        namespace PCStatisticsGroupedHistory {
            type RequestBody = {
                objectIDs?: Array<number>
                brandNames?: Array<string>
                tagIDs?: Array<number>
                period: {
                    begin: string
                    end: string
                }
                timezone?: string
                aggregationLevel?: string
            }
            type Response = {
                data: Array<{
                    object: {
                        id: number
                        name: string
                    }
                    brandName: string
                    tag: {
                        id: number
                        name: string
                    }
                    history: Array<{
                        dt: string
                        openCardCount: number
                        addToCartCount: number
                        ordersCount: number
                        ordersSumRub: number
                        buyoutsCount: number
                        buyoutsSumRub: number
                        buyoutPercent: number
                        addToCartConversion: number
                        cartToOrderConversion: number
                    }>
                }>
                error: boolean
                errorText: string
                additionalErrors: Array<{
                    field: string
                    description: string
                }>
            }
        }
    }
    namespace Advert {

        interface Methods {
            campaignsLists(): CampaignsLists.Response
            campaignsStatistics(payload: CampaignsStatistics.RequestBody.WithDate): CampaignsStatistics.Response.WithDate
            campaignsStatistics(payload: CampaignsStatistics.RequestBody.WithInterval): CampaignsStatistics.Response.WithInterval
        }

        namespace CampaignsLists {
            type Response = {
                adverts: Array<{
                    type: number
                    status: number
                    count: number
                    advert_list: Array<{
                        advertId: number
                        changeTime: string
                    }>
                }>
                all: number
            }
        }
        namespace CampaignsStatistics {
            namespace RequestBody {
                type WithDate = Array<{
                    id: number
                    dates?: Array<string>
                }>
                type WithInterval = Array<{
                    id: number
                    interval: {
                        begin: string
                        end: string
                    }
                }>
            }
            namespace Response {
                type WithDate = Array<{
                    views: number
                    clicks: number
                    ctr: number
                    cpc: number
                    sum: number
                    atbs: number
                    orders: number
                    cr: number
                    shks: number
                    sum_price: number
                    dates: Array<string>
                    days: Array<{
                        date: string
                        views: number
                        clicks: number
                        ctr: number
                        cpc: number
                        sum: number
                        atbs: number
                        orders: number
                        cr: number
                        shks: number
                        sum_price: number
                        apps: Array<{
                            views: number
                            clicks: number
                            ctr: number
                            cpc: number
                            sum: number
                            atbs: number
                            orders: number
                            cr: number
                            shks: number
                            sum_price: number
                            nm: Array<{
                                views: number
                                clicks: number
                                ctr: number
                                cpc: number
                                sum: number
                                atbs: number
                                orders: number
                                cr: number
                                shks: number
                                sum_price: number
                                name: string
                                nmId: number
                            }>
                            appType: number
                        }>
                    }>
                    boosterStats: Array<{
                        date: string
                        nm: number
                        avg_position: number
                    }>
                    advertId: number
                }>
                type WithInterval = Array<{
                    interval: {
                        begin: string
                        end: string
                    }
                    views: number
                    clicks: number
                    ctr: number
                    cpc: number
                    sum: number
                    atbs: number
                    orders: number
                    cr: number
                    shks: number
                    sum_price: number
                    days: Array<{
                        date: string
                        views: number
                        clicks: number
                        ctr: number
                        cpc: number
                        sum: number
                        atbs: number
                        orders: number
                        cr: number
                        shks: number
                        sum_price: number
                        apps: Array<{
                            views: number
                            clicks: number
                            ctr: number
                            cpc: number
                            sum: number
                            atbs: number
                            orders: number
                            cr: number
                            shks: number
                            sum_price: number
                            nm: Array<{
                                views: number
                                clicks: number
                                ctr: number
                                cpc: number
                                sum: number
                                atbs: number
                                orders: number
                                cr: number
                                shks: number
                                sum_price: number
                                name: string
                                nmId: number
                            }>
                            appType: number
                        }>
                    }>
                    boosterStats: Array<{
                        date: string
                        nm: number
                        avg_position: number
                    }>
                    advertId: number
                }>
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