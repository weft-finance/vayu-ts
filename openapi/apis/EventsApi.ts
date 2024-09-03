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


import { DeleteEventResponse } from '../models/DeleteEventResponse';
import { EventsDryRunRequest } from '../models/EventsDryRunRequest';
import { EventsDryRunResponse } from '../models/EventsDryRunResponse';
import { GetEventResponse } from '../models/GetEventResponse';
import { QueryEventsResponse } from '../models/QueryEventsResponse';
import { SendEventsRequest } from '../models/SendEventsRequest';
import { SendEventsResponse } from '../models/SendEventsResponse';

/**
 * no description
 */
export class EventsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Use this endpoint to remove a specific event using its reference ID.
     * Delete an event by refId
     * @param refId 
     */
    public async deleteEventByRefId(refId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'refId' is not null or undefined
        if (refId === null || refId === undefined) {
            throw new RequiredError("EventsApi", "deleteEventByRefId", "refId");
        }


        // Path Params
        const localVarPath = '/events/{refId}'
            .replace('{' + 'refId' + '}', encodeURIComponent(String(refId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Use this endpoint to get a specific event using its reference ID.
     * Get event by refId
     * @param refId 
     */
    public async getEventByRefId(refId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'refId' is not null or undefined
        if (refId === null || refId === undefined) {
            throw new RequiredError("EventsApi", "getEventByRefId", "refId");
        }


        // Path Params
        const localVarPath = '/events/{refId}'
            .replace('{' + 'refId' + '}', encodeURIComponent(String(refId)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


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
     * Fetch events occurring within a specified timestamp range. An optional event name can be provided to further filter the events.
     * Query events by timestamp period and optional event name
     * @param startTime 
     * @param endTime 
     * @param eventName 
     * @param limit 
     * @param cursor 
     */
    public async queryEvents(startTime: Date, endTime: Date, eventName?: string, limit?: number, cursor?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'startTime' is not null or undefined
        if (startTime === null || startTime === undefined) {
            throw new RequiredError("EventsApi", "queryEvents", "startTime");
        }


        // verify required parameter 'endTime' is not null or undefined
        if (endTime === null || endTime === undefined) {
            throw new RequiredError("EventsApi", "queryEvents", "endTime");
        }





        // Path Params
        const localVarPath = '/events';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (startTime !== undefined) {
            requestContext.setQueryParam("startTime", ObjectSerializer.serialize(startTime, "Date", "date-time"));
        }

        // Query Params
        if (endTime !== undefined) {
            requestContext.setQueryParam("endTime", ObjectSerializer.serialize(endTime, "Date", "date-time"));
        }

        // Query Params
        if (eventName !== undefined) {
            requestContext.setQueryParam("eventName", ObjectSerializer.serialize(eventName, "string", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Query Params
        if (cursor !== undefined) {
            requestContext.setQueryParam("cursor", ObjectSerializer.serialize(cursor, "string", ""));
        }


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
     * Use this endpoint to send an array of events for processing and storage. Make sure to comply with the request schema for each event.
     * Submit a batch of events for ingestion
     * @param sendEventsRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public async sendEvents(sendEventsRequest: SendEventsRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'sendEventsRequest' is not null or undefined
        if (sendEventsRequest === null || sendEventsRequest === undefined) {
            throw new RequiredError("EventsApi", "sendEvents", "sendEventsRequest");
        }


        // Path Params
        const localVarPath = '/events';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(sendEventsRequest, "SendEventsRequest", ""),
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
     * Use this endpoint to send an array of events for processing. Make sure to comply with the request schema for each event. NOTE: this is a dry run and will not result in actual storage of the events.
     * Submit a batch of events for testing
     * @param eventsDryRunRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public async sendEventsDryRun(eventsDryRunRequest: EventsDryRunRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'eventsDryRunRequest' is not null or undefined
        if (eventsDryRunRequest === null || eventsDryRunRequest === undefined) {
            throw new RequiredError("EventsApi", "sendEventsDryRun", "eventsDryRunRequest");
        }


        // Path Params
        const localVarPath = '/events/dry-run';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(eventsDryRunRequest, "EventsDryRunRequest", ""),
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

export class EventsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteEventByRefId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteEventByRefIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<DeleteEventResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeleteEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteEventResponse", ""
            ) as DeleteEventResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not Found", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeleteEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeleteEventResponse", ""
            ) as DeleteEventResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEventByRefId
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEventByRefIdWithHttpInfo(response: ResponseContext): Promise<HttpInfo<GetEventResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: GetEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetEventResponse", ""
            ) as GetEventResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not Found", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: GetEventResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "GetEventResponse", ""
            ) as GetEventResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to queryEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async queryEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<QueryEventsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: QueryEventsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QueryEventsResponse", ""
            ) as QueryEventsResponse;
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
            const body: QueryEventsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "QueryEventsResponse", ""
            ) as QueryEventsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendEvents
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendEventsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<SendEventsResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SendEventsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendEventsResponse", ""
            ) as SendEventsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("413", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Request Entity Too Large", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SendEventsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SendEventsResponse", ""
            ) as SendEventsResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendEventsDryRun
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendEventsDryRunWithHttpInfo(response: ResponseContext): Promise<HttpInfo<EventsDryRunResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EventsDryRunResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EventsDryRunResponse", ""
            ) as EventsDryRunResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unauthorized", undefined, response.headers);
        }
        if (isCodeInRange("413", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Request Entity Too Large", undefined, response.headers);
        }
        if (isCodeInRange("429", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Too Many Requests", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Internal Server Error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EventsDryRunResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EventsDryRunResponse", ""
            ) as EventsDryRunResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
