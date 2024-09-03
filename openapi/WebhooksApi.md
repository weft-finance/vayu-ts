# .WebhooksApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhookSubscribe**](WebhooksApi.md#webhookSubscribe) | **POST** /webhook | Subscribe to webhooks


# **webhookSubscribe**
> void webhookSubscribe(webhookSubscribeRequest)

Use this endpoint to subscribe to webhooks and receive event notifications.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .WebhooksApi(configuration);

let body:.WebhooksApiWebhookSubscribeRequest = {
  // WebhookSubscribeRequest | Subscribe to webhooks and receive event notifications.
  webhookSubscribeRequest: {
    callbackUrl: "callbackUrl_example",
    eventType: "AnonymousCustomer",
  },
};

apiInstance.webhookSubscribe(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookSubscribeRequest** | **WebhookSubscribeRequest**| Subscribe to webhooks and receive event notifications. |


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
**413** | Request Entity Too Large |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


