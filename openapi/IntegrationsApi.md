# .IntegrationsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportNetSuiteSalesOrder**](IntegrationsApi.md#exportNetSuiteSalesOrder) | **POST** /integrations/netsuite/export-sales-order | Export sales order to NetSuite
[**netSuiteSyncInvoices**](IntegrationsApi.md#netSuiteSyncInvoices) | **POST** /integrations/netsuite/sync-invoices | Sync invoices to NetSuite


# **exportNetSuiteSalesOrder**
> void exportNetSuiteSalesOrder(netSuiteExportSalesOrderRequest)

This endpoint is used to export sales order to NetSuite.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IntegrationsApi(configuration);

let body:.IntegrationsApiExportNetSuiteSalesOrderRequest = {
  // NetSuiteExportSalesOrderRequest
  netSuiteExportSalesOrderRequest: {
    contractId: "62ECB020842930cc01FFCCfe",
    productsIds: [
      "62ECB020842930cc01FFCCfe",
    ],
    subsidiaryId: "subsidiaryId_example",
  },
};

apiInstance.exportNetSuiteSalesOrder(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netSuiteExportSalesOrderRequest** | **NetSuiteExportSalesOrderRequest**|  |


### Return type

**void**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **netSuiteSyncInvoices**
> NetSuiteSyncInvoicesResponse netSuiteSyncInvoices(netSuiteSyncInvoicesRequest)

This endpoint is used to sync invoices to NetSuite.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IntegrationsApi(configuration);

let body:.IntegrationsApiNetSuiteSyncInvoicesRequest = {
  // NetSuiteSyncInvoicesRequest
  netSuiteSyncInvoicesRequest: {
    integrationType: "upsertInvoice",
    uid: "uid_example",
    data: {
      startDate: new Date('1970-01-01T00:00:00.00Z'),
      endDate: new Date('1970-01-01T00:00:00.00Z'),
      tranDate: new Date('1970-01-01T00:00:00.00Z'),
      memo: "memo_example",
      externalId: "62ECB020842930cc01FFCCfe",
      entity: {
        id: "id_example",
      },
      account: {
        id: "id_example",
      },
      item: {
        items: [
          {
            item: {
              id: "id_example",
            },
            quantity: 3.14,
            amount: 3.14,
            description: "description_example",
            memo: "memo_example",
          },
        ],
      },
      discountItem: {
        id: "id_example",
      },
      discountRate: 3.14,
    },
  },
};

apiInstance.netSuiteSyncInvoices(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **netSuiteSyncInvoicesRequest** | **NetSuiteSyncInvoicesRequest**|  |


### Return type

**NetSuiteSyncInvoicesResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | RequestSuccess |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


