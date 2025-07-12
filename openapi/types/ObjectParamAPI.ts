import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Address } from '../models/Address';
import { AggregationMethod } from '../models/AggregationMethod';
import { AggregationOperator } from '../models/AggregationOperator';
import { BillingCycleStatus } from '../models/BillingCycleStatus';
import { Condition } from '../models/Condition';
import { Contact } from '../models/Contact';
import { CreateContractRequest } from '../models/CreateContractRequest';
import { CreateContractResponse } from '../models/CreateContractResponse';
import { CreateCustomerRequest } from '../models/CreateCustomerRequest';
import { CreateCustomerResponse } from '../models/CreateCustomerResponse';
import { CreateCustomerResponseCustomer } from '../models/CreateCustomerResponseCustomer';
import { CreateMeasurementRequest } from '../models/CreateMeasurementRequest';
import { CreateMeasurementRequestUsageDate } from '../models/CreateMeasurementRequestUsageDate';
import { CreateMeasurementResponse } from '../models/CreateMeasurementResponse';
import { CreateMeasurementResponseMeasurement } from '../models/CreateMeasurementResponseMeasurement';
import { CreditLedgerEntry } from '../models/CreditLedgerEntry';
import { Criterion } from '../models/Criterion';
import { CriterionOperator } from '../models/CriterionOperator';
import { DeductCreditsRequest } from '../models/DeductCreditsRequest';
import { DeleteContractResponse } from '../models/DeleteContractResponse';
import { DeleteContractResponseContract } from '../models/DeleteContractResponseContract';
import { DeleteCustomerResponse } from '../models/DeleteCustomerResponse';
import { DeleteCustomerResponseCustomer } from '../models/DeleteCustomerResponseCustomer';
import { DeleteEventResponse } from '../models/DeleteEventResponse';
import { DeleteEventResponseEvent } from '../models/DeleteEventResponseEvent';
import { DeleteMeasurementResponse } from '../models/DeleteMeasurementResponse';
import { DeleteMeasurementResponseMeasurement } from '../models/DeleteMeasurementResponseMeasurement';
import { DeleteMeterResponse } from '../models/DeleteMeterResponse';
import { DeleteMeterResponseMeter } from '../models/DeleteMeterResponseMeter';
import { Event } from '../models/Event';
import { EventsDryRunRequest } from '../models/EventsDryRunRequest';
import { EventsDryRunResponse } from '../models/EventsDryRunResponse';
import { EventsDryRunResponseObject } from '../models/EventsDryRunResponseObject';
import { EventsDryRunResponseObjectEvent } from '../models/EventsDryRunResponseObjectEvent';
import { EventsDryRunResponseObjectMeterWithValuesInner } from '../models/EventsDryRunResponseObjectMeterWithValuesInner';
import { Filter } from '../models/Filter';
import { FullDayPeriod } from '../models/FullDayPeriod';
import { GetContractResponse } from '../models/GetContractResponse';
import { GetContractResponseContract } from '../models/GetContractResponseContract';
import { GetCustomerProductsConsumptionsByAliasResponse } from '../models/GetCustomerProductsConsumptionsByAliasResponse';
import { GetCustomerProductsConsumptionsResponse } from '../models/GetCustomerProductsConsumptionsResponse';
import { GetCustomerResponse } from '../models/GetCustomerResponse';
import { GetEventResponse } from '../models/GetEventResponse';
import { GetEventResponseEvent } from '../models/GetEventResponseEvent';
import { GetInvoiceResponse } from '../models/GetInvoiceResponse';
import { GetInvoiceResponseInvoice } from '../models/GetInvoiceResponseInvoice';
import { GetMeasurementResponse } from '../models/GetMeasurementResponse';
import { GetMeterResponse } from '../models/GetMeterResponse';
import { GetMeterResponseMeter } from '../models/GetMeterResponseMeter';
import { GetProductConsumptionResponse } from '../models/GetProductConsumptionResponse';
import { GetProductConsumptionResponseProductConsumption } from '../models/GetProductConsumptionResponseProductConsumption';
import { GrantCreditsRequest } from '../models/GrantCreditsRequest';
import { InvalidEvent } from '../models/InvalidEvent';
import { LineItem } from '../models/LineItem';
import { LineItemRevenueBreakdown } from '../models/LineItemRevenueBreakdown';
import { ListContractsResponse } from '../models/ListContractsResponse';
import { ListCreditLedgerEntriesResponse } from '../models/ListCreditLedgerEntriesResponse';
import { ListCustomersResponse } from '../models/ListCustomersResponse';
import { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import { ListMeasurementsResponse } from '../models/ListMeasurementsResponse';
import { ListMetersResponse } from '../models/ListMetersResponse';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Meter } from '../models/Meter';
import { NotificationEventType } from '../models/NotificationEventType';
import { ProductConsumption } from '../models/ProductConsumption';
import { QueryEventsResponse } from '../models/QueryEventsResponse';
import { QueryEventsResponseEventsInner } from '../models/QueryEventsResponseEventsInner';
import { SendEventsRequest } from '../models/SendEventsRequest';
import { SendEventsResponse } from '../models/SendEventsResponse';
import { UpdateCustomerRequest } from '../models/UpdateCustomerRequest';
import { UpdateCustomerResponse } from '../models/UpdateCustomerResponse';
import { UpdateMeterRequest } from '../models/UpdateMeterRequest';
import { UpdateMeterResponse } from '../models/UpdateMeterResponse';
import { WebhookSubscribeRequest } from '../models/WebhookSubscribeRequest';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiLoginRequest {
    /**
     * 
     * @type LoginRequest
     * @memberof AuthApilogin
     */
    loginRequest: LoginRequest
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is designed to acquire a temporary access token.     Submit the auth token in the request body to obtain a new access token.     Use this new token for subsequent API calls. Token is set to expire every hour.
     * Login by obtaining a new access token
     * @param param the request object
     */
    public loginWithHttpInfo(param: AuthApiLoginRequest, options?: Configuration): Promise<HttpInfo<LoginResponse>> {
        return this.api.loginWithHttpInfo(param.loginRequest,  options).toPromise();
    }

    /**
     * This endpoint is designed to acquire a temporary access token.     Submit the auth token in the request body to obtain a new access token.     Use this new token for subsequent API calls. Token is set to expire every hour.
     * Login by obtaining a new access token
     * @param param the request object
     */
    public login(param: AuthApiLoginRequest, options?: Configuration): Promise<LoginResponse> {
        return this.api.login(param.loginRequest,  options).toPromise();
    }

}

import { ObservableContractsApi } from "./ObservableAPI";
import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi";

export interface ContractsApiCreateContractRequest {
    /**
     * 
     * @type CreateContractRequest
     * @memberof ContractsApicreateContract
     */
    createContractRequest: CreateContractRequest
}

export interface ContractsApiDeleteContractRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ContractsApideleteContract
     */
    contractId: string
}

export interface ContractsApiGetContractRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ContractsApigetContract
     */
    contractId: string
}

export interface ContractsApiListContractsRequest {
    /**
     * 
     * Maximum: 1000
     * Defaults to: 10
     * @type number
     * @memberof ContractsApilistContracts
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ContractsApilistContracts
     */
    cursor?: string
}

export class ObjectContractsApi {
    private api: ObservableContractsApi

    public constructor(configuration: Configuration, requestFactory?: ContractsApiRequestFactory, responseProcessor?: ContractsApiResponseProcessor) {
        this.api = new ObservableContractsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Contract.
     * Create Contract
     * @param param the request object
     */
    public createContractWithHttpInfo(param: ContractsApiCreateContractRequest, options?: Configuration): Promise<HttpInfo<CreateContractResponse>> {
        return this.api.createContractWithHttpInfo(param.createContractRequest,  options).toPromise();
    }

    /**
     * Create a new Contract.
     * Create Contract
     * @param param the request object
     */
    public createContract(param: ContractsApiCreateContractRequest, options?: Configuration): Promise<CreateContractResponse> {
        return this.api.createContract(param.createContractRequest,  options).toPromise();
    }

    /**
     * Delete a Contract by id.
     * Delete Contract
     * @param param the request object
     */
    public deleteContractWithHttpInfo(param: ContractsApiDeleteContractRequest, options?: Configuration): Promise<HttpInfo<DeleteContractResponse>> {
        return this.api.deleteContractWithHttpInfo(param.contractId,  options).toPromise();
    }

    /**
     * Delete a Contract by id.
     * Delete Contract
     * @param param the request object
     */
    public deleteContract(param: ContractsApiDeleteContractRequest, options?: Configuration): Promise<DeleteContractResponse> {
        return this.api.deleteContract(param.contractId,  options).toPromise();
    }

    /**
     * Get a Contract by id.
     * Get Contract
     * @param param the request object
     */
    public getContractWithHttpInfo(param: ContractsApiGetContractRequest, options?: Configuration): Promise<HttpInfo<GetContractResponse>> {
        return this.api.getContractWithHttpInfo(param.contractId,  options).toPromise();
    }

    /**
     * Get a Contract by id.
     * Get Contract
     * @param param the request object
     */
    public getContract(param: ContractsApiGetContractRequest, options?: Configuration): Promise<GetContractResponse> {
        return this.api.getContract(param.contractId,  options).toPromise();
    }

    /**
     * Get a list of Contracts.
     * List Contracts
     * @param param the request object
     */
    public listContractsWithHttpInfo(param: ContractsApiListContractsRequest = {}, options?: Configuration): Promise<HttpInfo<ListContractsResponse>> {
        return this.api.listContractsWithHttpInfo(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Get a list of Contracts.
     * List Contracts
     * @param param the request object
     */
    public listContracts(param: ContractsApiListContractsRequest = {}, options?: Configuration): Promise<ListContractsResponse> {
        return this.api.listContracts(param.limit, param.cursor,  options).toPromise();
    }

}

import { ObservableCreditsApi } from "./ObservableAPI";
import { CreditsApiRequestFactory, CreditsApiResponseProcessor} from "../apis/CreditsApi";

export interface CreditsApiDeductCreditsRequest {
    /**
     * 
     * @type DeductCreditsRequest
     * @memberof CreditsApideductCredits
     */
    deductCreditsRequest: DeductCreditsRequest
}

export interface CreditsApiGrantCreditsRequest {
    /**
     * 
     * @type GrantCreditsRequest
     * @memberof CreditsApigrantCredits
     */
    grantCreditsRequest: GrantCreditsRequest
}

export interface CreditsApiListCreditLedgerEntriesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CreditsApilistCreditLedgerEntries
     */
    customerId: string
    /**
     * 
     * Maximum: 1000
     * Defaults to: 10
     * @type number
     * @memberof CreditsApilistCreditLedgerEntries
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CreditsApilistCreditLedgerEntries
     */
    cursor?: string
}

export class ObjectCreditsApi {
    private api: ObservableCreditsApi

    public constructor(configuration: Configuration, requestFactory?: CreditsApiRequestFactory, responseProcessor?: CreditsApiResponseProcessor) {
        this.api = new ObservableCreditsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is used to deduct credits from the specified customer account.      Submit the credit amount and customer ID in the request body to deduct the credits.      The deducted credits will be subtracted from the customer\'s account.
     * Deduct credits from customer credit ledger
     * @param param the request object
     */
    public deductCreditsWithHttpInfo(param: CreditsApiDeductCreditsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deductCreditsWithHttpInfo(param.deductCreditsRequest,  options).toPromise();
    }

    /**
     * This endpoint is used to deduct credits from the specified customer account.      Submit the credit amount and customer ID in the request body to deduct the credits.      The deducted credits will be subtracted from the customer\'s account.
     * Deduct credits from customer credit ledger
     * @param param the request object
     */
    public deductCredits(param: CreditsApiDeductCreditsRequest, options?: Configuration): Promise<void> {
        return this.api.deductCredits(param.deductCreditsRequest,  options).toPromise();
    }

    /**
     * This endpoint is used to grant credits to a customer.     Submit the credit amount and customer ID in the request body to grant the credits.     The granted credits will be added to the customer\'s account.
     * Grant credits to a customer credit ledger
     * @param param the request object
     */
    public grantCreditsWithHttpInfo(param: CreditsApiGrantCreditsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.grantCreditsWithHttpInfo(param.grantCreditsRequest,  options).toPromise();
    }

    /**
     * This endpoint is used to grant credits to a customer.     Submit the credit amount and customer ID in the request body to grant the credits.     The granted credits will be added to the customer\'s account.
     * Grant credits to a customer credit ledger
     * @param param the request object
     */
    public grantCredits(param: CreditsApiGrantCreditsRequest, options?: Configuration): Promise<void> {
        return this.api.grantCredits(param.grantCreditsRequest,  options).toPromise();
    }

    /**
     * This endpoint is used to retrieve the credit ledger entries for a specific customer.
     * Retrieve credit ledger entries for customer.
     * @param param the request object
     */
    public listCreditLedgerEntriesWithHttpInfo(param: CreditsApiListCreditLedgerEntriesRequest, options?: Configuration): Promise<HttpInfo<ListCreditLedgerEntriesResponse>> {
        return this.api.listCreditLedgerEntriesWithHttpInfo(param.customerId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * This endpoint is used to retrieve the credit ledger entries for a specific customer.
     * Retrieve credit ledger entries for customer.
     * @param param the request object
     */
    public listCreditLedgerEntries(param: CreditsApiListCreditLedgerEntriesRequest, options?: Configuration): Promise<ListCreditLedgerEntriesResponse> {
        return this.api.listCreditLedgerEntries(param.customerId, param.limit, param.cursor,  options).toPromise();
    }

}

import { ObservableCustomersApi } from "./ObservableAPI";
import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";

export interface CustomersApiCreateCustomerRequest {
    /**
     * 
     * @type CreateCustomerRequest
     * @memberof CustomersApicreateCustomer
     */
    createCustomerRequest: CreateCustomerRequest
}

export interface CustomersApiDeleteCustomerRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApideleteCustomer
     */
    customerId: string
}

export interface CustomersApiGetCustomerRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApigetCustomer
     */
    customerId: string
}

export interface CustomersApiGetCustomerByExternalIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApigetCustomerByExternalId
     */
    externalId: string
}

export interface CustomersApiGetCustomerProductsConsumptionsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApigetCustomerProductsConsumptions
     */
    customerId: string
}

export interface CustomersApiGetCustomerProductsConsumptionsByAliasRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApigetCustomerProductsConsumptionsByAlias
     */
    alias: string
}

export interface CustomersApiListCustomersRequest {
    /**
     * 
     * Maximum: 1000
     * Defaults to: 10
     * @type number
     * @memberof CustomersApilistCustomers
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApilistCustomers
     */
    cursor?: string
}

export interface CustomersApiUpdateCustomerRequest {
    /**
     * 
     * @type UpdateCustomerRequest
     * @memberof CustomersApiupdateCustomer
     */
    updateCustomerRequest: UpdateCustomerRequest
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApiupdateCustomer
     */
    customerId: string
}

export class ObjectCustomersApi {
    private api: ObservableCustomersApi

    public constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor) {
        this.api = new ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Customer.
     * Create Customer
     * @param param the request object
     */
    public createCustomerWithHttpInfo(param: CustomersApiCreateCustomerRequest, options?: Configuration): Promise<HttpInfo<CreateCustomerResponse>> {
        return this.api.createCustomerWithHttpInfo(param.createCustomerRequest,  options).toPromise();
    }

    /**
     * Create a new Customer.
     * Create Customer
     * @param param the request object
     */
    public createCustomer(param: CustomersApiCreateCustomerRequest, options?: Configuration): Promise<CreateCustomerResponse> {
        return this.api.createCustomer(param.createCustomerRequest,  options).toPromise();
    }

    /**
     * Delete a Customer by id.
     * Delete Customer
     * @param param the request object
     */
    public deleteCustomerWithHttpInfo(param: CustomersApiDeleteCustomerRequest, options?: Configuration): Promise<HttpInfo<DeleteCustomerResponse>> {
        return this.api.deleteCustomerWithHttpInfo(param.customerId,  options).toPromise();
    }

    /**
     * Delete a Customer by id.
     * Delete Customer
     * @param param the request object
     */
    public deleteCustomer(param: CustomersApiDeleteCustomerRequest, options?: Configuration): Promise<DeleteCustomerResponse> {
        return this.api.deleteCustomer(param.customerId,  options).toPromise();
    }

    /**
     * Get a Customer by id.
     * Get Customer
     * @param param the request object
     */
    public getCustomerWithHttpInfo(param: CustomersApiGetCustomerRequest, options?: Configuration): Promise<HttpInfo<GetCustomerResponse>> {
        return this.api.getCustomerWithHttpInfo(param.customerId,  options).toPromise();
    }

    /**
     * Get a Customer by id.
     * Get Customer
     * @param param the request object
     */
    public getCustomer(param: CustomersApiGetCustomerRequest, options?: Configuration): Promise<GetCustomerResponse> {
        return this.api.getCustomer(param.customerId,  options).toPromise();
    }

    /**
     * Use this endpoint to get a specific customer using its external Id.
     * Get customer by externalId
     * @param param the request object
     */
    public getCustomerByExternalIdWithHttpInfo(param: CustomersApiGetCustomerByExternalIdRequest, options?: Configuration): Promise<HttpInfo<GetCustomerResponse>> {
        return this.api.getCustomerByExternalIdWithHttpInfo(param.externalId,  options).toPromise();
    }

    /**
     * Use this endpoint to get a specific customer using its external Id.
     * Get customer by externalId
     * @param param the request object
     */
    public getCustomerByExternalId(param: CustomersApiGetCustomerByExternalIdRequest, options?: Configuration): Promise<GetCustomerResponse> {
        return this.api.getCustomerByExternalId(param.externalId,  options).toPromise();
    }

    /**
     * Use this endpoint to get the products consumptions by the customer id.
     * Get products consumptions by customer id
     * @param param the request object
     */
    public getCustomerProductsConsumptionsWithHttpInfo(param: CustomersApiGetCustomerProductsConsumptionsRequest, options?: Configuration): Promise<HttpInfo<GetCustomerProductsConsumptionsResponse>> {
        return this.api.getCustomerProductsConsumptionsWithHttpInfo(param.customerId,  options).toPromise();
    }

    /**
     * Use this endpoint to get the products consumptions by the customer id.
     * Get products consumptions by customer id
     * @param param the request object
     */
    public getCustomerProductsConsumptions(param: CustomersApiGetCustomerProductsConsumptionsRequest, options?: Configuration): Promise<GetCustomerProductsConsumptionsResponse> {
        return this.api.getCustomerProductsConsumptions(param.customerId,  options).toPromise();
    }

    /**
     * Use this endpoint to get the products consumptions by the customer alias.
     * Get products consumptions by customer alias
     * @param param the request object
     */
    public getCustomerProductsConsumptionsByAliasWithHttpInfo(param: CustomersApiGetCustomerProductsConsumptionsByAliasRequest, options?: Configuration): Promise<HttpInfo<GetCustomerProductsConsumptionsByAliasResponse>> {
        return this.api.getCustomerProductsConsumptionsByAliasWithHttpInfo(param.alias,  options).toPromise();
    }

    /**
     * Use this endpoint to get the products consumptions by the customer alias.
     * Get products consumptions by customer alias
     * @param param the request object
     */
    public getCustomerProductsConsumptionsByAlias(param: CustomersApiGetCustomerProductsConsumptionsByAliasRequest, options?: Configuration): Promise<GetCustomerProductsConsumptionsByAliasResponse> {
        return this.api.getCustomerProductsConsumptionsByAlias(param.alias,  options).toPromise();
    }

    /**
     * Get a list of Customers.
     * List Customers
     * @param param the request object
     */
    public listCustomersWithHttpInfo(param: CustomersApiListCustomersRequest = {}, options?: Configuration): Promise<HttpInfo<ListCustomersResponse>> {
        return this.api.listCustomersWithHttpInfo(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Get a list of Customers.
     * List Customers
     * @param param the request object
     */
    public listCustomers(param: CustomersApiListCustomersRequest = {}, options?: Configuration): Promise<ListCustomersResponse> {
        return this.api.listCustomers(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Update a Customer by id.
     * Update Customer
     * @param param the request object
     */
    public updateCustomerWithHttpInfo(param: CustomersApiUpdateCustomerRequest, options?: Configuration): Promise<HttpInfo<UpdateCustomerResponse>> {
        return this.api.updateCustomerWithHttpInfo(param.updateCustomerRequest, param.customerId,  options).toPromise();
    }

    /**
     * Update a Customer by id.
     * Update Customer
     * @param param the request object
     */
    public updateCustomer(param: CustomersApiUpdateCustomerRequest, options?: Configuration): Promise<UpdateCustomerResponse> {
        return this.api.updateCustomer(param.updateCustomerRequest, param.customerId,  options).toPromise();
    }

}

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiDeleteEventByRefIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApideleteEventByRefId
     */
    refId: string
}

export interface EventsApiGetEventByRefIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApigetEventByRefId
     */
    refId: string
}

export interface EventsApiQueryEventsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof EventsApiqueryEvents
     */
    startTime: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof EventsApiqueryEvents
     */
    endTime: Date
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApiqueryEvents
     */
    eventName?: string
    /**
     * 
     * Maximum: 1000
     * Defaults to: 10
     * @type number
     * @memberof EventsApiqueryEvents
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApiqueryEvents
     */
    cursor?: string
}

export interface EventsApiSendEventsRequest {
    /**
     * An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     * @type SendEventsRequest
     * @memberof EventsApisendEvents
     */
    sendEventsRequest: SendEventsRequest
}

export interface EventsApiSendEventsDryRunRequest {
    /**
     * An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     * @type EventsDryRunRequest
     * @memberof EventsApisendEventsDryRun
     */
    eventsDryRunRequest: EventsDryRunRequest
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this endpoint to remove a specific event using its reference ID.
     * Delete an event by refId
     * @param param the request object
     */
    public deleteEventByRefIdWithHttpInfo(param: EventsApiDeleteEventByRefIdRequest, options?: Configuration): Promise<HttpInfo<DeleteEventResponse>> {
        return this.api.deleteEventByRefIdWithHttpInfo(param.refId,  options).toPromise();
    }

    /**
     * Use this endpoint to remove a specific event using its reference ID.
     * Delete an event by refId
     * @param param the request object
     */
    public deleteEventByRefId(param: EventsApiDeleteEventByRefIdRequest, options?: Configuration): Promise<DeleteEventResponse> {
        return this.api.deleteEventByRefId(param.refId,  options).toPromise();
    }

    /**
     * Use this endpoint to get a specific event using its reference ID.
     * Get event by refId
     * @param param the request object
     */
    public getEventByRefIdWithHttpInfo(param: EventsApiGetEventByRefIdRequest, options?: Configuration): Promise<HttpInfo<GetEventResponse>> {
        return this.api.getEventByRefIdWithHttpInfo(param.refId,  options).toPromise();
    }

    /**
     * Use this endpoint to get a specific event using its reference ID.
     * Get event by refId
     * @param param the request object
     */
    public getEventByRefId(param: EventsApiGetEventByRefIdRequest, options?: Configuration): Promise<GetEventResponse> {
        return this.api.getEventByRefId(param.refId,  options).toPromise();
    }

    /**
     * Fetch events occurring within a specified timestamp range. An optional event name can be provided to further filter the events.
     * Query events by timestamp period and optional event name
     * @param param the request object
     */
    public queryEventsWithHttpInfo(param: EventsApiQueryEventsRequest, options?: Configuration): Promise<HttpInfo<QueryEventsResponse>> {
        return this.api.queryEventsWithHttpInfo(param.startTime, param.endTime, param.eventName, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Fetch events occurring within a specified timestamp range. An optional event name can be provided to further filter the events.
     * Query events by timestamp period and optional event name
     * @param param the request object
     */
    public queryEvents(param: EventsApiQueryEventsRequest, options?: Configuration): Promise<QueryEventsResponse> {
        return this.api.queryEvents(param.startTime, param.endTime, param.eventName, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Use this endpoint to send an array of events for processing and storage. Make sure to comply with the request schema for each event.
     * Submit a batch of events for ingestion
     * @param param the request object
     */
    public sendEventsWithHttpInfo(param: EventsApiSendEventsRequest, options?: Configuration): Promise<HttpInfo<SendEventsResponse>> {
        return this.api.sendEventsWithHttpInfo(param.sendEventsRequest,  options).toPromise();
    }

    /**
     * Use this endpoint to send an array of events for processing and storage. Make sure to comply with the request schema for each event.
     * Submit a batch of events for ingestion
     * @param param the request object
     */
    public sendEvents(param: EventsApiSendEventsRequest, options?: Configuration): Promise<SendEventsResponse> {
        return this.api.sendEvents(param.sendEventsRequest,  options).toPromise();
    }

    /**
     * Use this endpoint to send an array of events for processing. Make sure to comply with the request schema for each event. NOTE: this is a dry run and will not result in actual storage of the events.
     * Submit a batch of events for testing
     * @param param the request object
     */
    public sendEventsDryRunWithHttpInfo(param: EventsApiSendEventsDryRunRequest, options?: Configuration): Promise<HttpInfo<EventsDryRunResponse>> {
        return this.api.sendEventsDryRunWithHttpInfo(param.eventsDryRunRequest,  options).toPromise();
    }

    /**
     * Use this endpoint to send an array of events for processing. Make sure to comply with the request schema for each event. NOTE: this is a dry run and will not result in actual storage of the events.
     * Submit a batch of events for testing
     * @param param the request object
     */
    public sendEventsDryRun(param: EventsApiSendEventsDryRunRequest, options?: Configuration): Promise<EventsDryRunResponse> {
        return this.api.sendEventsDryRun(param.eventsDryRunRequest,  options).toPromise();
    }

}

import { ObservableInvoicesApi } from "./ObservableAPI";
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";

export interface InvoicesApiGetInvoiceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof InvoicesApigetInvoice
     */
    invoiceId: string
}

export interface InvoicesApiListInvoicesRequest {
    /**
     * 
     * Maximum: 1000
     * Defaults to: 10
     * @type number
     * @memberof InvoicesApilistInvoices
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof InvoicesApilistInvoices
     */
    cursor?: string
}

export class ObjectInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a Invoice by id.
     * Get Invoice
     * @param param the request object
     */
    public getInvoiceWithHttpInfo(param: InvoicesApiGetInvoiceRequest, options?: Configuration): Promise<HttpInfo<GetInvoiceResponse>> {
        return this.api.getInvoiceWithHttpInfo(param.invoiceId,  options).toPromise();
    }

    /**
     * Get a Invoice by id.
     * Get Invoice
     * @param param the request object
     */
    public getInvoice(param: InvoicesApiGetInvoiceRequest, options?: Configuration): Promise<GetInvoiceResponse> {
        return this.api.getInvoice(param.invoiceId,  options).toPromise();
    }

    /**
     * Get a list of Invoices.
     * List Invoices
     * @param param the request object
     */
    public listInvoicesWithHttpInfo(param: InvoicesApiListInvoicesRequest = {}, options?: Configuration): Promise<HttpInfo<ListInvoicesResponse>> {
        return this.api.listInvoicesWithHttpInfo(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Get a list of Invoices.
     * List Invoices
     * @param param the request object
     */
    public listInvoices(param: InvoicesApiListInvoicesRequest = {}, options?: Configuration): Promise<ListInvoicesResponse> {
        return this.api.listInvoices(param.limit, param.cursor,  options).toPromise();
    }

}

import { ObservableMeasurementsApi } from "./ObservableAPI";
import { MeasurementsApiRequestFactory, MeasurementsApiResponseProcessor} from "../apis/MeasurementsApi";

export interface MeasurementsApiCreateMeasurementRequest {
    /**
     * 
     * @type CreateMeasurementRequest
     * @memberof MeasurementsApicreateMeasurement
     */
    createMeasurementRequest: CreateMeasurementRequest
}

export interface MeasurementsApiDeleteMeasurementRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MeasurementsApideleteMeasurement
     */
    measurementId: string
}

export interface MeasurementsApiGetMeasurementRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MeasurementsApigetMeasurement
     */
    measurementId: string
}

export interface MeasurementsApiListMeasurementsRequest {
    /**
     * 
     * Maximum: 1000
     * Defaults to: 10
     * @type number
     * @memberof MeasurementsApilistMeasurements
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MeasurementsApilistMeasurements
     */
    cursor?: string
}

export class ObjectMeasurementsApi {
    private api: ObservableMeasurementsApi

    public constructor(configuration: Configuration, requestFactory?: MeasurementsApiRequestFactory, responseProcessor?: MeasurementsApiResponseProcessor) {
        this.api = new ObservableMeasurementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Measurement.
     * Create Measurement
     * @param param the request object
     */
    public createMeasurementWithHttpInfo(param: MeasurementsApiCreateMeasurementRequest, options?: Configuration): Promise<HttpInfo<CreateMeasurementResponse>> {
        return this.api.createMeasurementWithHttpInfo(param.createMeasurementRequest,  options).toPromise();
    }

    /**
     * Create a new Measurement.
     * Create Measurement
     * @param param the request object
     */
    public createMeasurement(param: MeasurementsApiCreateMeasurementRequest, options?: Configuration): Promise<CreateMeasurementResponse> {
        return this.api.createMeasurement(param.createMeasurementRequest,  options).toPromise();
    }

    /**
     * Delete a Measurement by id.
     * Delete Measurement
     * @param param the request object
     */
    public deleteMeasurementWithHttpInfo(param: MeasurementsApiDeleteMeasurementRequest, options?: Configuration): Promise<HttpInfo<DeleteMeasurementResponse>> {
        return this.api.deleteMeasurementWithHttpInfo(param.measurementId,  options).toPromise();
    }

    /**
     * Delete a Measurement by id.
     * Delete Measurement
     * @param param the request object
     */
    public deleteMeasurement(param: MeasurementsApiDeleteMeasurementRequest, options?: Configuration): Promise<DeleteMeasurementResponse> {
        return this.api.deleteMeasurement(param.measurementId,  options).toPromise();
    }

    /**
     * Get a Measurement by id.
     * Get Measurement
     * @param param the request object
     */
    public getMeasurementWithHttpInfo(param: MeasurementsApiGetMeasurementRequest, options?: Configuration): Promise<HttpInfo<GetMeasurementResponse>> {
        return this.api.getMeasurementWithHttpInfo(param.measurementId,  options).toPromise();
    }

    /**
     * Get a Measurement by id.
     * Get Measurement
     * @param param the request object
     */
    public getMeasurement(param: MeasurementsApiGetMeasurementRequest, options?: Configuration): Promise<GetMeasurementResponse> {
        return this.api.getMeasurement(param.measurementId,  options).toPromise();
    }

    /**
     * Get a list of Measurements.
     * List Measurements
     * @param param the request object
     */
    public listMeasurementsWithHttpInfo(param: MeasurementsApiListMeasurementsRequest = {}, options?: Configuration): Promise<HttpInfo<ListMeasurementsResponse>> {
        return this.api.listMeasurementsWithHttpInfo(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Get a list of Measurements.
     * List Measurements
     * @param param the request object
     */
    public listMeasurements(param: MeasurementsApiListMeasurementsRequest = {}, options?: Configuration): Promise<ListMeasurementsResponse> {
        return this.api.listMeasurements(param.limit, param.cursor,  options).toPromise();
    }

}

import { ObservableMetersApi } from "./ObservableAPI";
import { MetersApiRequestFactory, MetersApiResponseProcessor} from "../apis/MetersApi";

export interface MetersApiDeleteMeterRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MetersApideleteMeter
     */
    meterId: string
}

export interface MetersApiGetMeterRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MetersApigetMeter
     */
    meterId: string
}

export interface MetersApiListMetersRequest {
    /**
     * 
     * Maximum: 1000
     * Defaults to: 10
     * @type number
     * @memberof MetersApilistMeters
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MetersApilistMeters
     */
    cursor?: string
}

export interface MetersApiUpdateMeterRequest {
    /**
     * 
     * @type UpdateMeterRequest
     * @memberof MetersApiupdateMeter
     */
    updateMeterRequest: UpdateMeterRequest
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof MetersApiupdateMeter
     */
    meterId: string
}

export class ObjectMetersApi {
    private api: ObservableMetersApi

    public constructor(configuration: Configuration, requestFactory?: MetersApiRequestFactory, responseProcessor?: MetersApiResponseProcessor) {
        this.api = new ObservableMetersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a Meter by id.
     * Delete Meter
     * @param param the request object
     */
    public deleteMeterWithHttpInfo(param: MetersApiDeleteMeterRequest, options?: Configuration): Promise<HttpInfo<DeleteMeterResponse>> {
        return this.api.deleteMeterWithHttpInfo(param.meterId,  options).toPromise();
    }

    /**
     * Delete a Meter by id.
     * Delete Meter
     * @param param the request object
     */
    public deleteMeter(param: MetersApiDeleteMeterRequest, options?: Configuration): Promise<DeleteMeterResponse> {
        return this.api.deleteMeter(param.meterId,  options).toPromise();
    }

    /**
     * Get a Meter by id.
     * Get Meter
     * @param param the request object
     */
    public getMeterWithHttpInfo(param: MetersApiGetMeterRequest, options?: Configuration): Promise<HttpInfo<GetMeterResponse>> {
        return this.api.getMeterWithHttpInfo(param.meterId,  options).toPromise();
    }

    /**
     * Get a Meter by id.
     * Get Meter
     * @param param the request object
     */
    public getMeter(param: MetersApiGetMeterRequest, options?: Configuration): Promise<GetMeterResponse> {
        return this.api.getMeter(param.meterId,  options).toPromise();
    }

    /**
     * Get a list of Meters.
     * List Meters
     * @param param the request object
     */
    public listMetersWithHttpInfo(param: MetersApiListMetersRequest = {}, options?: Configuration): Promise<HttpInfo<ListMetersResponse>> {
        return this.api.listMetersWithHttpInfo(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Get a list of Meters.
     * List Meters
     * @param param the request object
     */
    public listMeters(param: MetersApiListMetersRequest = {}, options?: Configuration): Promise<ListMetersResponse> {
        return this.api.listMeters(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Update a Meter by id.
     * Update Meter
     * @param param the request object
     */
    public updateMeterWithHttpInfo(param: MetersApiUpdateMeterRequest, options?: Configuration): Promise<HttpInfo<UpdateMeterResponse>> {
        return this.api.updateMeterWithHttpInfo(param.updateMeterRequest, param.meterId,  options).toPromise();
    }

    /**
     * Update a Meter by id.
     * Update Meter
     * @param param the request object
     */
    public updateMeter(param: MetersApiUpdateMeterRequest, options?: Configuration): Promise<UpdateMeterResponse> {
        return this.api.updateMeter(param.updateMeterRequest, param.meterId,  options).toPromise();
    }

}

import { ObservableProductConsumptionsApi } from "./ObservableAPI";
import { ProductConsumptionsApiRequestFactory, ProductConsumptionsApiResponseProcessor} from "../apis/ProductConsumptionsApi";

export interface ProductConsumptionsApiGetProductConsumptionRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof ProductConsumptionsApigetProductConsumption
     */
    productId: string
}

export class ObjectProductConsumptionsApi {
    private api: ObservableProductConsumptionsApi

    public constructor(configuration: Configuration, requestFactory?: ProductConsumptionsApiRequestFactory, responseProcessor?: ProductConsumptionsApiResponseProcessor) {
        this.api = new ObservableProductConsumptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this action to get the consumption data for a product
     * Get product consumption
     * @param param the request object
     */
    public getProductConsumptionWithHttpInfo(param: ProductConsumptionsApiGetProductConsumptionRequest, options?: Configuration): Promise<HttpInfo<GetProductConsumptionResponse>> {
        return this.api.getProductConsumptionWithHttpInfo(param.productId,  options).toPromise();
    }

    /**
     * Use this action to get the consumption data for a product
     * Get product consumption
     * @param param the request object
     */
    public getProductConsumption(param: ProductConsumptionsApiGetProductConsumptionRequest, options?: Configuration): Promise<GetProductConsumptionResponse> {
        return this.api.getProductConsumption(param.productId,  options).toPromise();
    }

}

import { ObservableWebhooksApi } from "./ObservableAPI";
import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi";

export interface WebhooksApiWebhookSubscribeRequest {
    /**
     * Subscribe to webhooks and receive event notifications.
     * @type WebhookSubscribeRequest
     * @memberof WebhooksApiwebhookSubscribe
     */
    webhookSubscribeRequest: WebhookSubscribeRequest
}

export class ObjectWebhooksApi {
    private api: ObservableWebhooksApi

    public constructor(configuration: Configuration, requestFactory?: WebhooksApiRequestFactory, responseProcessor?: WebhooksApiResponseProcessor) {
        this.api = new ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this endpoint to subscribe to webhooks and receive event notifications.
     * Subscribe to webhooks
     * @param param the request object
     */
    public webhookSubscribeWithHttpInfo(param: WebhooksApiWebhookSubscribeRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.webhookSubscribeWithHttpInfo(param.webhookSubscribeRequest,  options).toPromise();
    }

    /**
     * Use this endpoint to subscribe to webhooks and receive event notifications.
     * Subscribe to webhooks
     * @param param the request object
     */
    public webhookSubscribe(param: WebhooksApiWebhookSubscribeRequest, options?: Configuration): Promise<void> {
        return this.api.webhookSubscribe(param.webhookSubscribeRequest,  options).toPromise();
    }

}
