# .EventsApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEventByRefId**](EventsApi.md#deleteEventByRefId) | **DELETE** /events/{refId} | Delete an event by refId
[**getEventByRefId**](EventsApi.md#getEventByRefId) | **GET** /events/{refId} | Get event by refId
[**queryEvents**](EventsApi.md#queryEvents) | **GET** /events | Query events by timestamp period and optional event name
[**sendEvents**](EventsApi.md#sendEvents) | **POST** /events | Submit a batch of events for ingestion
[**sendEventsDryRun**](EventsApi.md#sendEventsDryRun) | **POST** /events/dry-run | Submit a batch of events for testing


# **deleteEventByRefId**
> DeleteEventResponse deleteEventByRefId()

Use this endpoint to remove a specific event using its reference ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiDeleteEventByRefIdRequest = {
  // string
  refId: "refId_example",
};

apiInstance.deleteEventByRefId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | [**string**] |  | defaults to undefined


### Return type

**DeleteEventResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains the event that was deleted |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getEventByRefId**
> GetEventResponse getEventByRefId()

Use this endpoint to get a specific event using its reference ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiGetEventByRefIdRequest = {
  // string
  refId: "refId_example",
};

apiInstance.getEventByRefId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refId** | [**string**] |  | defaults to undefined


### Return type

**GetEventResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the event matching the provided refId |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **queryEvents**
> QueryEventsResponse queryEvents()

Fetch events occurring within a specified timestamp range. An optional event name can be provided to further filter the events.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiQueryEventsRequest = {
  // Date
  startTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date
  endTime: new Date('1970-01-01T00:00:00.00Z'),
  // string (optional)
  eventName: "eventName_example",
  // number (optional)
  limit: 10,
  // string (optional)
  cursor: "cursor_example",
};

apiInstance.queryEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | [**Date**] |  | defaults to undefined
 **endTime** | [**Date**] |  | defaults to undefined
 **eventName** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 10
 **cursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**QueryEventsResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains an array of events |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendEvents**
> SendEventsResponse sendEvents(sendEventsRequest)

Use this endpoint to send an array of events for processing and storage. Make sure to comply with the request schema for each event.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiSendEventsRequest = {
  // SendEventsRequest | An array of events following the EventInput schema. This request body should be included in the PUT request to \'/events\'       Up to 1000 events or a total payload max size of 256KB
  sendEventsRequest: {
    events: [
      {
        name: "api_call",
        timestamp: new Date('2023-09-13T18:25:43.511Z'),
        customerAlias: "customer_12345",
        ref: "4f6cf35x-2c4y-483z-a0a9-158621f77a21",
        data: {
          "key": "key_example",
        },
      },
    ],
  },
};

apiInstance.sendEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sendEventsRequest** | **SendEventsRequest**| An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB |


### Return type

**SendEventsResponse**

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
**413** | Request Entity Too Large |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **sendEventsDryRun**
> EventsDryRunResponse sendEventsDryRun(eventsDryRunRequest)

Use this endpoint to send an array of events for processing. Make sure to comply with the request schema for each event. NOTE: this is a dry run and will not result in actual storage of the events.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiSendEventsDryRunRequest = {
  // EventsDryRunRequest | An array of events following the EventInput schema. This request body should be included in the PUT request to \'/events\'       Up to 1000 events or a total payload max size of 256KB
  eventsDryRunRequest: {
    events: [
      {
        name: "api_call",
        timestamp: new Date('2023-09-13T18:25:43.511Z'),
        customerAlias: "customer_12345",
        ref: "4f6cf35x-2c4y-483z-a0a9-158621f77a21",
        data: {
          "key": "key_example",
        },
      },
    ],
  },
};

apiInstance.sendEventsDryRun(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventsDryRunRequest** | **EventsDryRunRequest**| An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB |


### Return type

**EventsDryRunResponse**

### Authorization

[BearerAuthorizer](README.md#BearerAuthorizer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Events with their corresponding meter and customer data. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**413** | Request Entity Too Large |  -  |
**429** | Too Many Requests |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


