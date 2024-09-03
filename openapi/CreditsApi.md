# .CreditsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deductCredits**](CreditsApi.md#deductCredits) | **POST** /credits/deduct | Deduct credits from customer credit ledger
[**grantCredits**](CreditsApi.md#grantCredits) | **POST** /credits/grant | Grant credits to a customer credit ledger
[**listCreditLedgerEntries**](CreditsApi.md#listCreditLedgerEntries) | **GET** /credits | Retrieve credit ledger entries for customer.


# **deductCredits**
> void deductCredits(deductCreditsRequest)

This endpoint is used to deduct credits from the specified customer account.      Submit the credit amount and customer ID in the request body to deduct the credits.      The deducted credits will be subtracted from the customer\'s account.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditsApi(configuration);

let body:.CreditsApiDeductCreditsRequest = {
  // DeductCreditsRequest
  deductCreditsRequest: {
    creditAmount: 3.14,
    customerId: "62ECB020842930cc01FFCCfe",
  },
};

apiInstance.deductCredits(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deductCreditsRequest** | **DeductCreditsRequest**|  |


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

# **grantCredits**
> void grantCredits(grantCreditsRequest)

This endpoint is used to grant credits to a customer.     Submit the credit amount and customer ID in the request body to grant the credits.     The granted credits will be added to the customer\'s account.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditsApi(configuration);

let body:.CreditsApiGrantCreditsRequest = {
  // GrantCreditsRequest
  grantCreditsRequest: {
    creditAmount: 3.14,
    customerId: "62ECB020842930cc01FFCCfe",
  },
};

apiInstance.grantCredits(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantCreditsRequest** | **GrantCreditsRequest**|  |


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

# **listCreditLedgerEntries**
> ListCreditLedgerEntriesResponse listCreditLedgerEntries()

This endpoint is used to retrieve the credit ledger entries for a specific customer.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CreditsApi(configuration);

let body:.CreditsApiListCreditLedgerEntriesRequest = {
  // string
  customerId: "62ECB020842930cc01FFCCfe",
  // number (optional)
  limit: 10,
  // string (optional)
  cursor: "cursor_example",
};

apiInstance.listCreditLedgerEntries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] |  | defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**ListCreditLedgerEntriesResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
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


