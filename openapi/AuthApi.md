# .AuthApi

All URIs are relative to *https://connect.withvayu.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthApi.md#login) | **POST** /login | Login by obtaining a new access token


# **login**
> LoginResponse login(loginRequest)

This endpoint is designed to acquire a temporary access token.     Submit the auth token in the request body to obtain a new access token.     Use this new token for subsequent API calls. Token is set to expire every hour.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiLoginRequest = {
  // LoginRequest
  loginRequest: {
    refreshToken: "refreshToken_example",
  },
};

apiInstance.login(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequest** | **LoginRequest**|  |


### Return type

**LoginResponse**

### Authorization

No authorization required

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


