export namespace Sections {
  namespace Content {
    namespace CardsList {
      interface Query {
        locale: 'ru' | 'en' | 'zh'
      }
      type RequestBody = {
        settings: {
          sort?: {
            ascending: boolean;
          };
          filter: {
            textSearch?: string;
            allowedCategoriesOnly?: boolean;
            tagIDs?: Array<any>;
            objectIDs?: Array<any>;
            brands?: Array<any>;
            imtID?: number;
            withPhoto: -1 | 0 | 1;
          };
          cursor: {
            updatedAt?: string;
            nmID?: number;
            limit: number;
          };
        };
      };
      type Response = {
        cards: Array<{
          nmID: number;
          imtID: number;
          nmUUID: string;
          subjectID: number;
          subjectName: string;
          vendorCode: string;
          brand: string;
          title: string;
          photos: Array<{
            big: string;
            c246x328: string;
            c516x688: string;
            square: string;
            tm: string;
          }>;
          video: string;
          dimensions: {
            length: number;
            width: number;
            height: number;
            isValid: boolean;
          };
          characteristics: Array<{
            id: number;
            name: string;
            value: Array<string>;
          }>;
          sizes: Array<{
            chrtID: number;
            techSize: string;
            skus: Array<string>;
          }>;
          tags: Array<{
            id: number;
            name: string;
            color: string;
          }>;
          createdAt: string;
          updatedAt: string;
        }>;
        cursor: {
          updatedAt: string;
          nmID: number;
          total: number;
        };
      };
    }
  }
  namespace DiscountsPrices {
    namespace GetProducts {
      interface Query {
        limit: number;
        offset?: number;
        filterNmID?: number;
      }
      type Response = {
        data: {
          listGoods: Array<{
            nmID: number;
            vendorCode: string;
            sizes: Array<{
              sizeID: number;
              price: number;
              discountedPrice: number;
              techSizeName: number;
            }>;
            currencyIsoCode4217: string;
            discount: number;
            editableSizePrice: boolean;
          }>;
        };
      };
    }
  }
  namespace Supplies {}
  namespace Marketplace {
    namespace Orders {}
    namespace Supplies {}
    namespace Stocks {}
    namespace Warehouses {}
    namespace Passes {}
    namespace DBS {}
  }
  namespace Statistics {
    namespace Supplies {}
    namespace Warehouse {
      interface Query {
        dateFrom: string;
      }
      type Response = Array<{
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
      }>;
    }
    namespace Orders {
      interface Query {
        dateFrom: string;
        flag?: 1 | 0;
      }
      type Response = Array<{
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
      }>;
    }
    namespace Sales {
      interface Query {
        dateFrom: string;
        flag?: 1 | 0;
      }
      type Response = Array<{
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
        paymentSaleAmount: number;
        forPay: number;
        finishedPrice: number;
        priceWithDisc: number;
        saleID: string;
        orderType: string;
        sticker: string;
        gNumber: string;
        srid: string;
      }>;
    }
    namespace RealizationSalesReport {}
  }
  namespace Analytics {
    namespace PCStatistics {
      type RequestBody = {
        brandNames?: Array<string>;
        objectIDs?: Array<number>;
        tagIDs?: Array<number>;
        nmIDs?: Array<number>;
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
      };
      type Response = {
        data: {
          page: number;
          isNextPage: boolean;
          cards: Array<{
            nmID: number;
            vendorCode: string;
            brandName: string;
            tags: Array<{
              id: number;
              name: string;
            }>;
            object: {
              id: number;
              name: string;
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
          }>;
        };
        error: boolean;
        errorText: string;
        additionalErrors: Array<{
          field: string;
          description: string;
        }>;
      };
    }
    namespace PCStatisticsGrouped {}
    namespace PCStatisticsHistory {
      type RequestBody = {
        nmIDs: Array<number>;
        period: {
          begin: string;
          end: string;
        };
        timezone?: string;
        aggregationLevel?: string;
      };
      type Response = {
        data: Array<{
          nmID: number;
          imtName: string;
          vendorCode: string;
          history: Array<{
            dt: string;
            openCardCount: number;
            addToCartCount: number;
            ordersCount: number;
            ordersSumRub: number;
            buyoutsCount: number;
            buyoutsSumRub: number;
            buyoutPercent: number;
            addToCartConversion: number;
            cartToOrderConversion: number;
          }>;
        }>;
        error: boolean;
        errorText: string;
        additionalErrors: Array<{
          field: string;
          description: string;
        }>;
      };
    }
    namespace PCStatisticsGroupedHistory {
      type RequestBody = {
        objectIDs?: Array<number>;
        brandNames?: Array<string>;
        tagIDs?: Array<number>;
        period: {
          begin: string;
          end: string;
        };
        timezone?: string;
        aggregationLevel?: string;
      };
      type Response = {
        data: Array<{
          object: {
            id: number;
            name: string;
          };
          brandName: string;
          tag: {
            id: number;
            name: string;
          };
          history: Array<{
            dt: string;
            openCardCount: number;
            addToCartCount: number;
            ordersCount: number;
            ordersSumRub: number;
            buyoutsCount: number;
            buyoutsSumRub: number;
            buyoutPercent: number;
            addToCartConversion: number;
            cartToOrderConversion: number;
          }>;
        }>;
        error: boolean;
        errorText: string;
        additionalErrors: Array<{
          field: string;
          description: string;
        }>;
      };
    }
  }
  namespace Advert {
    namespace CampaignsLists {
      type Response = {
        adverts: Array<{
          type: number;
          status: number;
          count: number;
          advert_list: Array<{
            advertId: number;
            changeTime: string;
          }>;
        }>;
        all: number;
      };
    }
    namespace CampaignsInformation {
      interface Query {
        status?: -1 | 4 | 7 | 8 | 9 | 11;
        type?: 4 | 5 | 6 | 7 | 8 | 9;
        order?: "create" | "change" | "id";
        direction?: "desc" | "asc";
      }
      type RequestBody = Array<number>
      type Response = (ResponseCommon | ResponseType8 | ResponseType9)[]
      type ResponseCommon = {
        endTime: string;
        createTime: string;
        changeTime: string;
        startTime: string;
        name: string;
        params: Array<{
          intervals: Array<{
            begin: number;
            end: number;
          }>;
          price: number;
          subjectId: number;
          subjectName: string;
          nms: Array<{
            nm: number;
            active: boolean;
          }>;
          active: boolean;
        }>;
        dailyBudget: number;
        advertId: number;
        status: number;
        type: number;
        paymentType: string;
        searchPluseState: boolean;
      };
      type ResponseType8 = {
        endTime: string;
        createTime: string;
        changeTime: string;
        startTime: string;
        autoParams: {
          subject: {
            name: string;
            id: number;
          };
          sets: Array<{
            name: string;
            id: number;
          }>;
          nms: Array<number>;
          active: {
            carousel: boolean;
            recom: boolean;
            booster: boolean;
          };
          nmCPM: Array<{
            nm: number;
            cpm: number;
          }>;
        };
        name: string;
        dailyBudget: number;
        advertId: number;
        status: number;
        type: number;
        paymentType: string;
      };
      type ResponseType9 = {
        endTime: string;
        createTime: string;
        changeTime: string;
        startTime: string;
        searchPluseState: boolean;
        name: string;
        unitedParams: Array<{
          subject: {
            id: number;
            name: string;
          };
          menus: Array<{
            id: number;
            name: string;
          }>;
          nms: Array<number>;
          searchCPM: number;
          catalogCPM: number;
        }>;
        dailyBudget: number;
        advertId: number;
        status: number;
        type: number;
        paymentType: string;
      };
    }
    namespace CampaignsStatistics {
      namespace RequestBody {
        type WithDate = Array<{
          id: number;
          dates?: Array<string>;
        }>;
        type WithInterval = Array<{
          id: number;
          interval: {
            begin: string;
            end: string;
          };
        }>;
      }
      namespace Response {
        type WithDate = Array<{
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
          dates: Array<string>;
          days: Array<{
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
            apps: Array<{
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
              nm: Array<{
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
              }>;
              appType: number;
            }>;
          }>;
          boosterStats: Array<{
            date: string;
            nm: number;
            avg_position: number;
          }>;
          advertId: number;
        }>;
        type WithInterval = Array<{
          interval: {
            begin: string;
            end: string;
          };
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
          days: Array<{
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
            apps: Array<{
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
              nm: Array<{
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
              }>;
              appType: number;
            }>;
          }>;
          boosterStats: Array<{
            date: string;
            nm: number;
            avg_position: number;
          }>;
          advertId: number;
        }>;
      }
    }
  }
  namespace Recommend {}
  namespace Feedback {}
  namespace Common {}
  namespace BuyerChat {}
  namespace Returns {}
  namespace Documents {}
}
export namespace Common {
  interface HTTPResponse<T> {
    status: number;
    headers: object;
    content: T;
  }
}
