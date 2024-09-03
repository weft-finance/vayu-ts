# .ReportsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCommitmentReportResponse**](ReportsApi.md#getCommitmentReportResponse) | **GET** /report/commitment | Get commitment report 
[**getProductsUsageReport**](ReportsApi.md#getProductsUsageReport) | **GET** /report/products-usage | Get products usage report


# **getCommitmentReportResponse**
> GetCommitmentReportResponse getCommitmentReportResponse()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiGetCommitmentReportResponseRequest = {
  // string (optional)
  reportId: "reportId_example",
};

apiInstance.getCommitmentReportResponse(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | [**string**] |  | (optional) defaults to undefined


### Return type

**GetCommitmentReportResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the commitment report |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getProductsUsageReport**
> GetProductsUsageReportResponse getProductsUsageReport()

Use this endpoint to get the products usage report.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ReportsApi(configuration);

let body:.ReportsApiGetProductsUsageReportRequest = {
  // string (optional)
  reportId: "reportId_example",
  // number (optional)
  limit: 10,
  // string (optional)
  cursor: "cursor_example",
};

apiInstance.getProductsUsageReport(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**GetProductsUsageReportResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the products usage report |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


