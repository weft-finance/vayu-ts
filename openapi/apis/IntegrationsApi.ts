// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import * as FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { NetSuiteExportSalesOrderRequest } from '../models/NetSuiteExportSalesOrderRequest';
import { NetSuiteSyncInvoicesRequest } from '../models/NetSuiteSyncInvoicesRequest';
import { NetSuiteSyncInvoicesResponse } from '../models/NetSuiteSyncInvoicesResponse';

/**
 * no description
 */
export class IntegrationsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This endpoint is used to export sales order to NetSuite.
     * Export sales order to NetSuite
     * @param netSuiteExportSalesOrderRequest 
     */
    public async exportNetSuiteSalesOrder(netSuiteExportSalesOrderRequest: NetSuiteExportSalesOrderRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'netSuiteExportSalesOrderRequest' is not null or undefined
        if (netSuiteExportSalesOrderRequest === null || netSuiteExportSalesOrderRequest === undefined) {
            throw new RequiredError("IntegrationsApi", "exportNetSuiteSalesOrder", "netSuiteExportSalesOrderRequest");
        }


        // Path Params
        const localVarPath = '/integrations/netsuite/export-sales-order';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(netSuiteExportSalesOrderRequest, "NetSuiteExportSalesOrderRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * This endpoint is used to sync invoices to NetSuite.
     * Sync invoices to NetSuite
     * @param netSuiteSyncInvoicesRequest 
     */
    public async netSuiteSyncInvoices(netSuiteSyncInvoicesRequest: NetSuiteSyncInvoicesRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'netSuiteSyncInvoicesRequest' is not null or undefined
        if (netSuiteSyncInvoicesRequest === null || netSuiteSyncInvoicesRequest === undefined) {
            throw new RequiredError("IntegrationsApi", "netSuiteSyncInvoices", "netSuiteSyncInvoicesRequest");
        }


        // Path Params
        const localVarPath = '/integrations/netsuite/sync-invoices';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(netSuiteSyncInvoicesRequest, "NetSuiteSyncInvoicesRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["BearerAuthorizer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class IntegrationsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportNetSuiteSalesOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportNetSuiteSalesOrderWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to netSuiteSyncInvoices
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async netSuiteSyncInvoicesWithHttpInfo(response: ResponseContext): Promise<HttpInfo<NetSuiteSyncInvoicesResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NetSuiteSyncInvoicesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NetSuiteSyncInvoicesResponse", ""
            ) as NetSuiteSyncInvoicesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NetSuiteSyncInvoicesResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NetSuiteSyncInvoicesResponse", ""
            ) as NetSuiteSyncInvoicesResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
