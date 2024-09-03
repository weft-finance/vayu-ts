import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AggregationMethod } from '../models/AggregationMethod';
import { AggregationOperator } from '../models/AggregationOperator';
import { BillingCycleStatus } from '../models/BillingCycleStatus';
import { BillingInterval } from '../models/BillingInterval';
import { Condition } from '../models/Condition';
import { ContractStatus } from '../models/ContractStatus';
import { CreateContractRequest } from '../models/CreateContractRequest';
import { CreateContractResponse } from '../models/CreateContractResponse';
import { CreateCustomerRequest } from '../models/CreateCustomerRequest';
import { CreateCustomerResponse } from '../models/CreateCustomerResponse';
import { CreateCustomerResponseCustomer } from '../models/CreateCustomerResponseCustomer';
import { CreditLedgerEntry } from '../models/CreditLedgerEntry';
import { Criterion } from '../models/Criterion';
import { CriterionOperator } from '../models/CriterionOperator';
import { Currency } from '../models/Currency';
import { DeductCreditsRequest } from '../models/DeductCreditsRequest';
import { DeleteContractResponse } from '../models/DeleteContractResponse';
import { DeleteCustomerResponse } from '../models/DeleteCustomerResponse';
import { DeleteEventResponse } from '../models/DeleteEventResponse';
import { DeleteEventResponseEvent } from '../models/DeleteEventResponseEvent';
import { DeleteMeterResponse } from '../models/DeleteMeterResponse';
import { DeletePlanResponse } from '../models/DeletePlanResponse';
import { Event } from '../models/Event';
import { EventsDryRunRequest } from '../models/EventsDryRunRequest';
import { EventsDryRunResponse } from '../models/EventsDryRunResponse';
import { EventsDryRunResponseObject } from '../models/EventsDryRunResponseObject';
import { EventsDryRunResponseObjectEvent } from '../models/EventsDryRunResponseObjectEvent';
import { EventsDryRunResponseObjectMeterWithValuesInner } from '../models/EventsDryRunResponseObjectMeterWithValuesInner';
import { Filter } from '../models/Filter';
import { GetCommitmentReportResponse } from '../models/GetCommitmentReportResponse';
import { GetContractResponse } from '../models/GetContractResponse';
import { GetContractResponseContract } from '../models/GetContractResponseContract';
import { GetCustomerResponse } from '../models/GetCustomerResponse';
import { GetEventResponse } from '../models/GetEventResponse';
import { GetEventResponseEvent } from '../models/GetEventResponseEvent';
import { GetInvoiceResponse } from '../models/GetInvoiceResponse';
import { GetInvoiceResponseInvoice } from '../models/GetInvoiceResponseInvoice';
import { GetMeterResponse } from '../models/GetMeterResponse';
import { GetMeterResponseMeter } from '../models/GetMeterResponseMeter';
import { GetPlanResponse } from '../models/GetPlanResponse';
import { GetPlanResponsePlan } from '../models/GetPlanResponsePlan';
import { GetProductsUsageReportResponse } from '../models/GetProductsUsageReportResponse';
import { GrantCreditsRequest } from '../models/GrantCreditsRequest';
import { InvalidEvent } from '../models/InvalidEvent';
import { LineItem } from '../models/LineItem';
import { ListContractsResponse } from '../models/ListContractsResponse';
import { ListContractsResponseContractsInner } from '../models/ListContractsResponseContractsInner';
import { ListCreditLedgerEntriesResponse } from '../models/ListCreditLedgerEntriesResponse';
import { ListCustomersResponse } from '../models/ListCustomersResponse';
import { ListCustomersResponseCustomersInner } from '../models/ListCustomersResponseCustomersInner';
import { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import { ListInvoicesResponseInvoicesInner } from '../models/ListInvoicesResponseInvoicesInner';
import { ListMetersResponse } from '../models/ListMetersResponse';
import { ListMetersResponseMetersInner } from '../models/ListMetersResponseMetersInner';
import { ListPlansResponse } from '../models/ListPlansResponse';
import { ListPlansResponsePlansInner } from '../models/ListPlansResponsePlansInner';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from '../models/LoginResponse';
import { Meter } from '../models/Meter';
import { NetSuiteExportSalesOrderRequest } from '../models/NetSuiteExportSalesOrderRequest';
import { NetSuiteSyncInvoicesRequest } from '../models/NetSuiteSyncInvoicesRequest';
import { NetSuiteSyncInvoicesRequestData } from '../models/NetSuiteSyncInvoicesRequestData';
import { NetSuiteSyncInvoicesRequestDataEntity } from '../models/NetSuiteSyncInvoicesRequestDataEntity';
import { NetSuiteSyncInvoicesRequestDataItem } from '../models/NetSuiteSyncInvoicesRequestDataItem';
import { NetSuiteSyncInvoicesRequestDataItemItemsInner } from '../models/NetSuiteSyncInvoicesRequestDataItemItemsInner';
import { NetSuiteSyncInvoicesResponse } from '../models/NetSuiteSyncInvoicesResponse';
import { NotificationEventType } from '../models/NotificationEventType';
import { PaymentTerm } from '../models/PaymentTerm';
import { Period } from '../models/Period';
import { PlanBillingData } from '../models/PlanBillingData';
import { PlanStatus } from '../models/PlanStatus';
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
     * @type string
     * @memberof ContractsApideleteContract
     */
    contractId: string
}

export interface ContractsApiGetContractRequest {
    /**
     * 
     * @type string
     * @memberof ContractsApigetContract
     */
    contractId: string
}

export interface ContractsApiListContractsRequest {
    /**
     * 
     * @type number
     * @memberof ContractsApilistContracts
     */
    limit?: number
    /**
     * 
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
     * @type string
     * @memberof CreditsApilistCreditLedgerEntries
     */
    customerId: string
    /**
     * 
     * @type number
     * @memberof CreditsApilistCreditLedgerEntries
     */
    limit?: number
    /**
     * 
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
     * @type string
     * @memberof CustomersApideleteCustomer
     */
    customerId: string
}

export interface CustomersApiGetCustomerRequest {
    /**
     * 
     * @type string
     * @memberof CustomersApigetCustomer
     */
    customerId: string
}

export interface CustomersApiListCustomersRequest {
    /**
     * 
     * @type number
     * @memberof CustomersApilistCustomers
     */
    limit?: number
    /**
     * 
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
     * @type string
     * @memberof EventsApideleteEventByRefId
     */
    refId: string
}

export interface EventsApiGetEventByRefIdRequest {
    /**
     * 
     * @type string
     * @memberof EventsApigetEventByRefId
     */
    refId: string
}

export interface EventsApiQueryEventsRequest {
    /**
     * 
     * @type Date
     * @memberof EventsApiqueryEvents
     */
    startTime: Date
    /**
     * 
     * @type Date
     * @memberof EventsApiqueryEvents
     */
    endTime: Date
    /**
     * 
     * @type string
     * @memberof EventsApiqueryEvents
     */
    eventName?: string
    /**
     * 
     * @type number
     * @memberof EventsApiqueryEvents
     */
    limit?: number
    /**
     * 
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

import { ObservableIntegrationsApi } from "./ObservableAPI";
import { IntegrationsApiRequestFactory, IntegrationsApiResponseProcessor} from "../apis/IntegrationsApi";

export interface IntegrationsApiExportNetSuiteSalesOrderRequest {
    /**
     * 
     * @type NetSuiteExportSalesOrderRequest
     * @memberof IntegrationsApiexportNetSuiteSalesOrder
     */
    netSuiteExportSalesOrderRequest: NetSuiteExportSalesOrderRequest
}

export interface IntegrationsApiNetSuiteSyncInvoicesRequest {
    /**
     * 
     * @type NetSuiteSyncInvoicesRequest
     * @memberof IntegrationsApinetSuiteSyncInvoices
     */
    netSuiteSyncInvoicesRequest: NetSuiteSyncInvoicesRequest
}

export class ObjectIntegrationsApi {
    private api: ObservableIntegrationsApi

    public constructor(configuration: Configuration, requestFactory?: IntegrationsApiRequestFactory, responseProcessor?: IntegrationsApiResponseProcessor) {
        this.api = new ObservableIntegrationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is used to export sales order to NetSuite.
     * Export sales order to NetSuite
     * @param param the request object
     */
    public exportNetSuiteSalesOrderWithHttpInfo(param: IntegrationsApiExportNetSuiteSalesOrderRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.exportNetSuiteSalesOrderWithHttpInfo(param.netSuiteExportSalesOrderRequest,  options).toPromise();
    }

    /**
     * This endpoint is used to export sales order to NetSuite.
     * Export sales order to NetSuite
     * @param param the request object
     */
    public exportNetSuiteSalesOrder(param: IntegrationsApiExportNetSuiteSalesOrderRequest, options?: Configuration): Promise<void> {
        return this.api.exportNetSuiteSalesOrder(param.netSuiteExportSalesOrderRequest,  options).toPromise();
    }

    /**
     * This endpoint is used to sync invoices to NetSuite.
     * Sync invoices to NetSuite
     * @param param the request object
     */
    public netSuiteSyncInvoicesWithHttpInfo(param: IntegrationsApiNetSuiteSyncInvoicesRequest, options?: Configuration): Promise<HttpInfo<NetSuiteSyncInvoicesResponse>> {
        return this.api.netSuiteSyncInvoicesWithHttpInfo(param.netSuiteSyncInvoicesRequest,  options).toPromise();
    }

    /**
     * This endpoint is used to sync invoices to NetSuite.
     * Sync invoices to NetSuite
     * @param param the request object
     */
    public netSuiteSyncInvoices(param: IntegrationsApiNetSuiteSyncInvoicesRequest, options?: Configuration): Promise<NetSuiteSyncInvoicesResponse> {
        return this.api.netSuiteSyncInvoices(param.netSuiteSyncInvoicesRequest,  options).toPromise();
    }

}

import { ObservableInvoicesApi } from "./ObservableAPI";
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";

export interface InvoicesApiGetInvoiceRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApigetInvoice
     */
    invoiceId: string
}

export interface InvoicesApiListInvoicesRequest {
    /**
     * 
     * @type number
     * @memberof InvoicesApilistInvoices
     */
    limit?: number
    /**
     * 
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

import { ObservableMetersApi } from "./ObservableAPI";
import { MetersApiRequestFactory, MetersApiResponseProcessor} from "../apis/MetersApi";

export interface MetersApiDeleteMeterRequest {
    /**
     * 
     * @type string
     * @memberof MetersApideleteMeter
     */
    meterId: string
}

export interface MetersApiGetMeterRequest {
    /**
     * 
     * @type string
     * @memberof MetersApigetMeter
     */
    meterId: string
}

export interface MetersApiListMetersRequest {
    /**
     * 
     * @type number
     * @memberof MetersApilistMeters
     */
    limit?: number
    /**
     * 
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

import { ObservablePlansApi } from "./ObservableAPI";
import { PlansApiRequestFactory, PlansApiResponseProcessor} from "../apis/PlansApi";

export interface PlansApiDeletePlanRequest {
    /**
     * 
     * @type string
     * @memberof PlansApideletePlan
     */
    planId: string
}

export interface PlansApiGetPlanRequest {
    /**
     * 
     * @type string
     * @memberof PlansApigetPlan
     */
    planId: string
}

export interface PlansApiListPlansRequest {
    /**
     * 
     * @type number
     * @memberof PlansApilistPlans
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof PlansApilistPlans
     */
    cursor?: string
}

export class ObjectPlansApi {
    private api: ObservablePlansApi

    public constructor(configuration: Configuration, requestFactory?: PlansApiRequestFactory, responseProcessor?: PlansApiResponseProcessor) {
        this.api = new ObservablePlansApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a Plan by id.
     * Delete Plan
     * @param param the request object
     */
    public deletePlanWithHttpInfo(param: PlansApiDeletePlanRequest, options?: Configuration): Promise<HttpInfo<DeletePlanResponse>> {
        return this.api.deletePlanWithHttpInfo(param.planId,  options).toPromise();
    }

    /**
     * Delete a Plan by id.
     * Delete Plan
     * @param param the request object
     */
    public deletePlan(param: PlansApiDeletePlanRequest, options?: Configuration): Promise<DeletePlanResponse> {
        return this.api.deletePlan(param.planId,  options).toPromise();
    }

    /**
     * Get a Plan by id.
     * Get Plan
     * @param param the request object
     */
    public getPlanWithHttpInfo(param: PlansApiGetPlanRequest, options?: Configuration): Promise<HttpInfo<GetPlanResponse>> {
        return this.api.getPlanWithHttpInfo(param.planId,  options).toPromise();
    }

    /**
     * Get a Plan by id.
     * Get Plan
     * @param param the request object
     */
    public getPlan(param: PlansApiGetPlanRequest, options?: Configuration): Promise<GetPlanResponse> {
        return this.api.getPlan(param.planId,  options).toPromise();
    }

    /**
     * Get a list of Plans.
     * List Plans
     * @param param the request object
     */
    public listPlansWithHttpInfo(param: PlansApiListPlansRequest = {}, options?: Configuration): Promise<HttpInfo<ListPlansResponse>> {
        return this.api.listPlansWithHttpInfo(param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Get a list of Plans.
     * List Plans
     * @param param the request object
     */
    public listPlans(param: PlansApiListPlansRequest = {}, options?: Configuration): Promise<ListPlansResponse> {
        return this.api.listPlans(param.limit, param.cursor,  options).toPromise();
    }

}

import { ObservableReportsApi } from "./ObservableAPI";
import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi";

export interface ReportsApiGetCommitmentReportResponseRequest {
    /**
     * 
     * @type string
     * @memberof ReportsApigetCommitmentReportResponse
     */
    reportId?: string
}

export interface ReportsApiGetProductsUsageReportRequest {
    /**
     * 
     * @type string
     * @memberof ReportsApigetProductsUsageReport
     */
    reportId?: string
    /**
     * 
     * @type number
     * @memberof ReportsApigetProductsUsageReport
     */
    limit?: number
    /**
     * 
     * @type string
     * @memberof ReportsApigetProductsUsageReport
     */
    cursor?: string
}

export class ObjectReportsApi {
    private api: ObservableReportsApi

    public constructor(configuration: Configuration, requestFactory?: ReportsApiRequestFactory, responseProcessor?: ReportsApiResponseProcessor) {
        this.api = new ObservableReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get commitment report 
     * @param param the request object
     */
    public getCommitmentReportResponseWithHttpInfo(param: ReportsApiGetCommitmentReportResponseRequest = {}, options?: Configuration): Promise<HttpInfo<GetCommitmentReportResponse>> {
        return this.api.getCommitmentReportResponseWithHttpInfo(param.reportId,  options).toPromise();
    }

    /**
     * Get commitment report 
     * @param param the request object
     */
    public getCommitmentReportResponse(param: ReportsApiGetCommitmentReportResponseRequest = {}, options?: Configuration): Promise<GetCommitmentReportResponse> {
        return this.api.getCommitmentReportResponse(param.reportId,  options).toPromise();
    }

    /**
     * Use this endpoint to get the products usage report.
     * Get products usage report
     * @param param the request object
     */
    public getProductsUsageReportWithHttpInfo(param: ReportsApiGetProductsUsageReportRequest = {}, options?: Configuration): Promise<HttpInfo<GetProductsUsageReportResponse>> {
        return this.api.getProductsUsageReportWithHttpInfo(param.reportId, param.limit, param.cursor,  options).toPromise();
    }

    /**
     * Use this endpoint to get the products usage report.
     * Get products usage report
     * @param param the request object
     */
    public getProductsUsageReport(param: ReportsApiGetProductsUsageReportRequest = {}, options?: Configuration): Promise<GetProductsUsageReportResponse> {
        return this.api.getProductsUsageReport(param.reportId, param.limit, param.cursor,  options).toPromise();
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
