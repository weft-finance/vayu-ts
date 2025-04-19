import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { Address } from '../models/Address';
import { AggregationMethod } from '../models/AggregationMethod';
import { AggregationOperator } from '../models/AggregationOperator';
import { BillingCycleStatus } from '../models/BillingCycleStatus';
import { BillingInterval } from '../models/BillingInterval';
import { Condition } from '../models/Condition';
import { Contact } from '../models/Contact';
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
import { DeleteContractResponseContract } from '../models/DeleteContractResponseContract';
import { DeleteCustomerResponse } from '../models/DeleteCustomerResponse';
import { DeleteCustomerResponseCustomer } from '../models/DeleteCustomerResponseCustomer';
import { DeleteEventResponse } from '../models/DeleteEventResponse';
import { DeleteEventResponseEvent } from '../models/DeleteEventResponseEvent';
import { DeleteMeterResponse } from '../models/DeleteMeterResponse';
import { DeleteMeterResponseMeter } from '../models/DeleteMeterResponseMeter';
import { DeletePlanResponse } from '../models/DeletePlanResponse';
import { DeletePlanResponsePlan } from '../models/DeletePlanResponsePlan';
import { Event } from '../models/Event';
import { EventsDryRunRequest } from '../models/EventsDryRunRequest';
import { EventsDryRunResponse } from '../models/EventsDryRunResponse';
import { EventsDryRunResponseObject } from '../models/EventsDryRunResponseObject';
import { EventsDryRunResponseObjectEvent } from '../models/EventsDryRunResponseObjectEvent';
import { EventsDryRunResponseObjectMeterWithValuesInner } from '../models/EventsDryRunResponseObjectMeterWithValuesInner';
import { Filter } from '../models/Filter';
import { FullDayPeriod } from '../models/FullDayPeriod';
import { GetCommitmentReportResponse } from '../models/GetCommitmentReportResponse';
import { GetContractResponse } from '../models/GetContractResponse';
import { GetContractResponseContract } from '../models/GetContractResponseContract';
import { GetCustomerProductsConsumptionsResponse } from '../models/GetCustomerProductsConsumptionsResponse';
import { GetCustomerResponse } from '../models/GetCustomerResponse';
import { GetEventResponse } from '../models/GetEventResponse';
import { GetEventResponseEvent } from '../models/GetEventResponseEvent';
import { GetInvoiceResponse } from '../models/GetInvoiceResponse';
import { GetInvoiceResponseInvoice } from '../models/GetInvoiceResponseInvoice';
import { GetMeterResponse } from '../models/GetMeterResponse';
import { GetMeterResponseMeter } from '../models/GetMeterResponseMeter';
import { GetPlanResponse } from '../models/GetPlanResponse';
import { GetPlanResponsePlan } from '../models/GetPlanResponsePlan';
import { GetProductConsumptionResponse } from '../models/GetProductConsumptionResponse';
import { GetProductConsumptionResponseProductConsumption } from '../models/GetProductConsumptionResponseProductConsumption';
import { GetProductsUsageReportResponse } from '../models/GetProductsUsageReportResponse';
import { GrantCreditsRequest } from '../models/GrantCreditsRequest';
import { InvalidEvent } from '../models/InvalidEvent';
import { LineItem } from '../models/LineItem';
import { LineItemRevenueBreakdown } from '../models/LineItemRevenueBreakdown';
import { ListContractsResponse } from '../models/ListContractsResponse';
import { ListCreditLedgerEntriesResponse } from '../models/ListCreditLedgerEntriesResponse';
import { ListCustomersResponse } from '../models/ListCustomersResponse';
import { ListInvoicesResponse } from '../models/ListInvoicesResponse';
import { ListMetersResponse } from '../models/ListMetersResponse';
import { ListPlansResponse } from '../models/ListPlansResponse';
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
import { PlanBillingData } from '../models/PlanBillingData';
import { PlanDuration } from '../models/PlanDuration';
import { PlanStatus } from '../models/PlanStatus';
import { ProductConsumption } from '../models/ProductConsumption';
import { QueryEventsResponse } from '../models/QueryEventsResponse';
import { QueryEventsResponseEventsInner } from '../models/QueryEventsResponseEventsInner';
import { SendEventsRequest } from '../models/SendEventsRequest';
import { SendEventsResponse } from '../models/SendEventsResponse';
import { UnlimitedDuration } from '../models/UnlimitedDuration';
import { UpdateCustomerRequest } from '../models/UpdateCustomerRequest';
import { UpdateCustomerResponse } from '../models/UpdateCustomerResponse';
import { UpdateMeterRequest } from '../models/UpdateMeterRequest';
import { UpdateMeterResponse } from '../models/UpdateMeterResponse';
import { WebhookSubscribeRequest } from '../models/WebhookSubscribeRequest';
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is designed to acquire a temporary access token.     Submit the auth token in the request body to obtain a new access token.     Use this new token for subsequent API calls. Token is set to expire every hour.
     * Login by obtaining a new access token
     * @param loginRequest
     */
    public loginWithHttpInfo(loginRequest: LoginRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoginResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.loginWithHttpInfo(loginRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint is designed to acquire a temporary access token.     Submit the auth token in the request body to obtain a new access token.     Use this new token for subsequent API calls. Token is set to expire every hour.
     * Login by obtaining a new access token
     * @param loginRequest
     */
    public login(loginRequest: LoginRequest, _options?: PromiseConfigurationOptions): Promise<LoginResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.login(loginRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableContractsApi } from './ObservableAPI';

import { ContractsApiRequestFactory, ContractsApiResponseProcessor} from "../apis/ContractsApi";
export class PromiseContractsApi {
    private api: ObservableContractsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContractsApiRequestFactory,
        responseProcessor?: ContractsApiResponseProcessor
    ) {
        this.api = new ObservableContractsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Contract.
     * Create Contract
     * @param createContractRequest
     */
    public createContractWithHttpInfo(createContractRequest: CreateContractRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateContractResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createContractWithHttpInfo(createContractRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Contract.
     * Create Contract
     * @param createContractRequest
     */
    public createContract(createContractRequest: CreateContractRequest, _options?: PromiseConfigurationOptions): Promise<CreateContractResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createContract(createContractRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a Contract by id.
     * Delete Contract
     * @param contractId
     */
    public deleteContractWithHttpInfo(contractId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteContractResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteContractWithHttpInfo(contractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a Contract by id.
     * Delete Contract
     * @param contractId
     */
    public deleteContract(contractId: string, _options?: PromiseConfigurationOptions): Promise<DeleteContractResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteContract(contractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a Contract by id.
     * Get Contract
     * @param contractId
     */
    public getContractWithHttpInfo(contractId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetContractResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getContractWithHttpInfo(contractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a Contract by id.
     * Get Contract
     * @param contractId
     */
    public getContract(contractId: string, _options?: PromiseConfigurationOptions): Promise<GetContractResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getContract(contractId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of Contracts.
     * List Contracts
     * @param [limit]
     * @param [cursor]
     */
    public listContractsWithHttpInfo(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListContractsResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listContractsWithHttpInfo(limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of Contracts.
     * List Contracts
     * @param [limit]
     * @param [cursor]
     */
    public listContracts(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<ListContractsResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listContracts(limit, cursor, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCreditsApi } from './ObservableAPI';

import { CreditsApiRequestFactory, CreditsApiResponseProcessor} from "../apis/CreditsApi";
export class PromiseCreditsApi {
    private api: ObservableCreditsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CreditsApiRequestFactory,
        responseProcessor?: CreditsApiResponseProcessor
    ) {
        this.api = new ObservableCreditsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is used to deduct credits from the specified customer account.      Submit the credit amount and customer ID in the request body to deduct the credits.      The deducted credits will be subtracted from the customer\'s account.
     * Deduct credits from customer credit ledger
     * @param deductCreditsRequest
     */
    public deductCreditsWithHttpInfo(deductCreditsRequest: DeductCreditsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deductCreditsWithHttpInfo(deductCreditsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint is used to deduct credits from the specified customer account.      Submit the credit amount and customer ID in the request body to deduct the credits.      The deducted credits will be subtracted from the customer\'s account.
     * Deduct credits from customer credit ledger
     * @param deductCreditsRequest
     */
    public deductCredits(deductCreditsRequest: DeductCreditsRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deductCredits(deductCreditsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint is used to grant credits to a customer.     Submit the credit amount and customer ID in the request body to grant the credits.     The granted credits will be added to the customer\'s account.
     * Grant credits to a customer credit ledger
     * @param grantCreditsRequest
     */
    public grantCreditsWithHttpInfo(grantCreditsRequest: GrantCreditsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.grantCreditsWithHttpInfo(grantCreditsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint is used to grant credits to a customer.     Submit the credit amount and customer ID in the request body to grant the credits.     The granted credits will be added to the customer\'s account.
     * Grant credits to a customer credit ledger
     * @param grantCreditsRequest
     */
    public grantCredits(grantCreditsRequest: GrantCreditsRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.grantCredits(grantCreditsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint is used to retrieve the credit ledger entries for a specific customer.
     * Retrieve credit ledger entries for customer.
     * @param customerId
     * @param [limit]
     * @param [cursor]
     */
    public listCreditLedgerEntriesWithHttpInfo(customerId: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCreditLedgerEntriesResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listCreditLedgerEntriesWithHttpInfo(customerId, limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint is used to retrieve the credit ledger entries for a specific customer.
     * Retrieve credit ledger entries for customer.
     * @param customerId
     * @param [limit]
     * @param [cursor]
     */
    public listCreditLedgerEntries(customerId: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<ListCreditLedgerEntriesResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listCreditLedgerEntries(customerId, limit, cursor, observableOptions);
        return result.toPromise();
    }


}



import { ObservableCustomersApi } from './ObservableAPI';

import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";
export class PromiseCustomersApi {
    private api: ObservableCustomersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomersApiRequestFactory,
        responseProcessor?: CustomersApiResponseProcessor
    ) {
        this.api = new ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new Customer.
     * Create Customer
     * @param createCustomerRequest
     */
    public createCustomerWithHttpInfo(createCustomerRequest: CreateCustomerRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateCustomerResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createCustomerWithHttpInfo(createCustomerRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Customer.
     * Create Customer
     * @param createCustomerRequest
     */
    public createCustomer(createCustomerRequest: CreateCustomerRequest, _options?: PromiseConfigurationOptions): Promise<CreateCustomerResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createCustomer(createCustomerRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a Customer by id.
     * Delete Customer
     * @param customerId
     */
    public deleteCustomerWithHttpInfo(customerId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteCustomerResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteCustomerWithHttpInfo(customerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a Customer by id.
     * Delete Customer
     * @param customerId
     */
    public deleteCustomer(customerId: string, _options?: PromiseConfigurationOptions): Promise<DeleteCustomerResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteCustomer(customerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a Customer by id.
     * Get Customer
     * @param customerId
     */
    public getCustomerWithHttpInfo(customerId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetCustomerResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getCustomerWithHttpInfo(customerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a Customer by id.
     * Get Customer
     * @param customerId
     */
    public getCustomer(customerId: string, _options?: PromiseConfigurationOptions): Promise<GetCustomerResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getCustomer(customerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific customer using its external Id.
     * Get customer by externalId
     * @param externalId
     */
    public getCustomerByExternalIdWithHttpInfo(externalId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetCustomerResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getCustomerByExternalIdWithHttpInfo(externalId, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific customer using its external Id.
     * Get customer by externalId
     * @param externalId
     */
    public getCustomerByExternalId(externalId: string, _options?: PromiseConfigurationOptions): Promise<GetCustomerResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getCustomerByExternalId(externalId, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get the products consumptions by the customer id.
     * Get products consumptions by customer id
     * @param customerId
     */
    public getCustomerProductsConsumptionsWithHttpInfo(customerId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetCustomerProductsConsumptionsResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getCustomerProductsConsumptionsWithHttpInfo(customerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get the products consumptions by the customer id.
     * Get products consumptions by customer id
     * @param customerId
     */
    public getCustomerProductsConsumptions(customerId: string, _options?: PromiseConfigurationOptions): Promise<GetCustomerProductsConsumptionsResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getCustomerProductsConsumptions(customerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of Customers.
     * List Customers
     * @param [limit]
     * @param [cursor]
     */
    public listCustomersWithHttpInfo(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCustomersResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listCustomersWithHttpInfo(limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of Customers.
     * List Customers
     * @param [limit]
     * @param [cursor]
     */
    public listCustomers(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<ListCustomersResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listCustomers(limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a Customer by id.
     * Update Customer
     * @param updateCustomerRequest
     * @param customerId
     */
    public updateCustomerWithHttpInfo(updateCustomerRequest: UpdateCustomerRequest, customerId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateCustomerResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateCustomerWithHttpInfo(updateCustomerRequest, customerId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a Customer by id.
     * Update Customer
     * @param updateCustomerRequest
     * @param customerId
     */
    public updateCustomer(updateCustomerRequest: UpdateCustomerRequest, customerId: string, _options?: PromiseConfigurationOptions): Promise<UpdateCustomerResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateCustomer(updateCustomerRequest, customerId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableEventsApi } from './ObservableAPI';

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this endpoint to remove a specific event using its reference ID.
     * Delete an event by refId
     * @param refId
     */
    public deleteEventByRefIdWithHttpInfo(refId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteEventResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteEventByRefIdWithHttpInfo(refId, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to remove a specific event using its reference ID.
     * Delete an event by refId
     * @param refId
     */
    public deleteEventByRefId(refId: string, _options?: PromiseConfigurationOptions): Promise<DeleteEventResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteEventByRefId(refId, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific event using its reference ID.
     * Get event by refId
     * @param refId
     */
    public getEventByRefIdWithHttpInfo(refId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetEventResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getEventByRefIdWithHttpInfo(refId, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get a specific event using its reference ID.
     * Get event by refId
     * @param refId
     */
    public getEventByRefId(refId: string, _options?: PromiseConfigurationOptions): Promise<GetEventResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getEventByRefId(refId, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetch events occurring within a specified timestamp range. An optional event name can be provided to further filter the events.
     * Query events by timestamp period and optional event name
     * @param startTime
     * @param endTime
     * @param [eventName]
     * @param [limit]
     * @param [cursor]
     */
    public queryEventsWithHttpInfo(startTime: Date, endTime: Date, eventName?: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<QueryEventsResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.queryEventsWithHttpInfo(startTime, endTime, eventName, limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetch events occurring within a specified timestamp range. An optional event name can be provided to further filter the events.
     * Query events by timestamp period and optional event name
     * @param startTime
     * @param endTime
     * @param [eventName]
     * @param [limit]
     * @param [cursor]
     */
    public queryEvents(startTime: Date, endTime: Date, eventName?: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<QueryEventsResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.queryEvents(startTime, endTime, eventName, limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to send an array of events for processing and storage. Make sure to comply with the request schema for each event.
     * Submit a batch of events for ingestion
     * @param sendEventsRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public sendEventsWithHttpInfo(sendEventsRequest: SendEventsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<SendEventsResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.sendEventsWithHttpInfo(sendEventsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to send an array of events for processing and storage. Make sure to comply with the request schema for each event.
     * Submit a batch of events for ingestion
     * @param sendEventsRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public sendEvents(sendEventsRequest: SendEventsRequest, _options?: PromiseConfigurationOptions): Promise<SendEventsResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.sendEvents(sendEventsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to send an array of events for processing. Make sure to comply with the request schema for each event. NOTE: this is a dry run and will not result in actual storage of the events.
     * Submit a batch of events for testing
     * @param eventsDryRunRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public sendEventsDryRunWithHttpInfo(eventsDryRunRequest: EventsDryRunRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventsDryRunResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.sendEventsDryRunWithHttpInfo(eventsDryRunRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to send an array of events for processing. Make sure to comply with the request schema for each event. NOTE: this is a dry run and will not result in actual storage of the events.
     * Submit a batch of events for testing
     * @param eventsDryRunRequest An array of events following the EventInput schema. This request body should be included in the PUT request to \&#39;/events\&#39;       Up to 1000 events or a total payload max size of 256KB
     */
    public sendEventsDryRun(eventsDryRunRequest: EventsDryRunRequest, _options?: PromiseConfigurationOptions): Promise<EventsDryRunResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.sendEventsDryRun(eventsDryRunRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableIntegrationsApi } from './ObservableAPI';

import { IntegrationsApiRequestFactory, IntegrationsApiResponseProcessor} from "../apis/IntegrationsApi";
export class PromiseIntegrationsApi {
    private api: ObservableIntegrationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IntegrationsApiRequestFactory,
        responseProcessor?: IntegrationsApiResponseProcessor
    ) {
        this.api = new ObservableIntegrationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint is used to export sales order to NetSuite.
     * Export sales order to NetSuite
     * @param netSuiteExportSalesOrderRequest
     */
    public exportNetSuiteSalesOrderWithHttpInfo(netSuiteExportSalesOrderRequest: NetSuiteExportSalesOrderRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.exportNetSuiteSalesOrderWithHttpInfo(netSuiteExportSalesOrderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint is used to export sales order to NetSuite.
     * Export sales order to NetSuite
     * @param netSuiteExportSalesOrderRequest
     */
    public exportNetSuiteSalesOrder(netSuiteExportSalesOrderRequest: NetSuiteExportSalesOrderRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.exportNetSuiteSalesOrder(netSuiteExportSalesOrderRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint is used to sync invoices to NetSuite.
     * Sync invoices to NetSuite
     * @param netSuiteSyncInvoicesRequest
     */
    public netSuiteSyncInvoicesWithHttpInfo(netSuiteSyncInvoicesRequest: NetSuiteSyncInvoicesRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<NetSuiteSyncInvoicesResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.netSuiteSyncInvoicesWithHttpInfo(netSuiteSyncInvoicesRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint is used to sync invoices to NetSuite.
     * Sync invoices to NetSuite
     * @param netSuiteSyncInvoicesRequest
     */
    public netSuiteSyncInvoices(netSuiteSyncInvoicesRequest: NetSuiteSyncInvoicesRequest, _options?: PromiseConfigurationOptions): Promise<NetSuiteSyncInvoicesResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.netSuiteSyncInvoices(netSuiteSyncInvoicesRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableInvoicesApi } from './ObservableAPI';

import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";
export class PromiseInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoicesApiRequestFactory,
        responseProcessor?: InvoicesApiResponseProcessor
    ) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a Invoice by id.
     * Get Invoice
     * @param invoiceId
     */
    public getInvoiceWithHttpInfo(invoiceId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetInvoiceResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getInvoiceWithHttpInfo(invoiceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a Invoice by id.
     * Get Invoice
     * @param invoiceId
     */
    public getInvoice(invoiceId: string, _options?: PromiseConfigurationOptions): Promise<GetInvoiceResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getInvoice(invoiceId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of Invoices.
     * List Invoices
     * @param [limit]
     * @param [cursor]
     */
    public listInvoicesWithHttpInfo(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListInvoicesResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listInvoicesWithHttpInfo(limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of Invoices.
     * List Invoices
     * @param [limit]
     * @param [cursor]
     */
    public listInvoices(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<ListInvoicesResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listInvoices(limit, cursor, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMetersApi } from './ObservableAPI';

import { MetersApiRequestFactory, MetersApiResponseProcessor} from "../apis/MetersApi";
export class PromiseMetersApi {
    private api: ObservableMetersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetersApiRequestFactory,
        responseProcessor?: MetersApiResponseProcessor
    ) {
        this.api = new ObservableMetersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a Meter by id.
     * Delete Meter
     * @param meterId
     */
    public deleteMeterWithHttpInfo(meterId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteMeterResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteMeterWithHttpInfo(meterId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a Meter by id.
     * Delete Meter
     * @param meterId
     */
    public deleteMeter(meterId: string, _options?: PromiseConfigurationOptions): Promise<DeleteMeterResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deleteMeter(meterId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a Meter by id.
     * Get Meter
     * @param meterId
     */
    public getMeterWithHttpInfo(meterId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetMeterResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMeterWithHttpInfo(meterId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a Meter by id.
     * Get Meter
     * @param meterId
     */
    public getMeter(meterId: string, _options?: PromiseConfigurationOptions): Promise<GetMeterResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getMeter(meterId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of Meters.
     * List Meters
     * @param [limit]
     * @param [cursor]
     */
    public listMetersWithHttpInfo(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListMetersResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listMetersWithHttpInfo(limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of Meters.
     * List Meters
     * @param [limit]
     * @param [cursor]
     */
    public listMeters(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<ListMetersResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listMeters(limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a Meter by id.
     * Update Meter
     * @param updateMeterRequest
     * @param meterId
     */
    public updateMeterWithHttpInfo(updateMeterRequest: UpdateMeterRequest, meterId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UpdateMeterResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateMeterWithHttpInfo(updateMeterRequest, meterId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a Meter by id.
     * Update Meter
     * @param updateMeterRequest
     * @param meterId
     */
    public updateMeter(updateMeterRequest: UpdateMeterRequest, meterId: string, _options?: PromiseConfigurationOptions): Promise<UpdateMeterResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateMeter(updateMeterRequest, meterId, observableOptions);
        return result.toPromise();
    }


}



import { ObservablePlansApi } from './ObservableAPI';

import { PlansApiRequestFactory, PlansApiResponseProcessor} from "../apis/PlansApi";
export class PromisePlansApi {
    private api: ObservablePlansApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PlansApiRequestFactory,
        responseProcessor?: PlansApiResponseProcessor
    ) {
        this.api = new ObservablePlansApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a Plan by id.
     * Delete Plan
     * @param planId
     */
    public deletePlanWithHttpInfo(planId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeletePlanResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deletePlanWithHttpInfo(planId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a Plan by id.
     * Delete Plan
     * @param planId
     */
    public deletePlan(planId: string, _options?: PromiseConfigurationOptions): Promise<DeletePlanResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.deletePlan(planId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a Plan by id.
     * Get Plan
     * @param planId
     */
    public getPlanWithHttpInfo(planId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetPlanResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPlanWithHttpInfo(planId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a Plan by id.
     * Get Plan
     * @param planId
     */
    public getPlan(planId: string, _options?: PromiseConfigurationOptions): Promise<GetPlanResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPlan(planId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of Plans.
     * List Plans
     * @param [limit]
     * @param [cursor]
     */
    public listPlansWithHttpInfo(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListPlansResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listPlansWithHttpInfo(limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Get a list of Plans.
     * List Plans
     * @param [limit]
     * @param [cursor]
     */
    public listPlans(limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<ListPlansResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.listPlans(limit, cursor, observableOptions);
        return result.toPromise();
    }


}



import { ObservableProductConsumptionsApi } from './ObservableAPI';

import { ProductConsumptionsApiRequestFactory, ProductConsumptionsApiResponseProcessor} from "../apis/ProductConsumptionsApi";
export class PromiseProductConsumptionsApi {
    private api: ObservableProductConsumptionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductConsumptionsApiRequestFactory,
        responseProcessor?: ProductConsumptionsApiResponseProcessor
    ) {
        this.api = new ObservableProductConsumptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this action to get the consumption data for a product
     * Get product consumption
     * @param productId
     */
    public getProductConsumptionWithHttpInfo(productId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetProductConsumptionResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getProductConsumptionWithHttpInfo(productId, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this action to get the consumption data for a product
     * Get product consumption
     * @param productId
     */
    public getProductConsumption(productId: string, _options?: PromiseConfigurationOptions): Promise<GetProductConsumptionResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getProductConsumption(productId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableReportsApi } from './ObservableAPI';

import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi";
export class PromiseReportsApi {
    private api: ObservableReportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportsApiRequestFactory,
        responseProcessor?: ReportsApiResponseProcessor
    ) {
        this.api = new ObservableReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get commitment report 
     * @param [reportId]
     */
    public getCommitmentReportResponseWithHttpInfo(reportId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetCommitmentReportResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getCommitmentReportResponseWithHttpInfo(reportId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get commitment report 
     * @param [reportId]
     */
    public getCommitmentReportResponse(reportId?: string, _options?: PromiseConfigurationOptions): Promise<GetCommitmentReportResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getCommitmentReportResponse(reportId, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get the products usage report.
     * Get products usage report
     * @param [reportId]
     * @param [limit]
     * @param [cursor]
     */
    public getProductsUsageReportWithHttpInfo(reportId?: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<GetProductsUsageReportResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getProductsUsageReportWithHttpInfo(reportId, limit, cursor, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to get the products usage report.
     * Get products usage report
     * @param [reportId]
     * @param [limit]
     * @param [cursor]
     */
    public getProductsUsageReport(reportId?: string, limit?: number, cursor?: string, _options?: PromiseConfigurationOptions): Promise<GetProductsUsageReportResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getProductsUsageReport(reportId, limit, cursor, observableOptions);
        return result.toPromise();
    }


}



import { ObservableWebhooksApi } from './ObservableAPI';

import { WebhooksApiRequestFactory, WebhooksApiResponseProcessor} from "../apis/WebhooksApi";
export class PromiseWebhooksApi {
    private api: ObservableWebhooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhooksApiRequestFactory,
        responseProcessor?: WebhooksApiResponseProcessor
    ) {
        this.api = new ObservableWebhooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Use this endpoint to subscribe to webhooks and receive event notifications.
     * Subscribe to webhooks
     * @param webhookSubscribeRequest Subscribe to webhooks and receive event notifications.
     */
    public webhookSubscribeWithHttpInfo(webhookSubscribeRequest: WebhookSubscribeRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.webhookSubscribeWithHttpInfo(webhookSubscribeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Use this endpoint to subscribe to webhooks and receive event notifications.
     * Subscribe to webhooks
     * @param webhookSubscribeRequest Subscribe to webhooks and receive event notifications.
     */
    public webhookSubscribe(webhookSubscribeRequest: WebhookSubscribeRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.webhookSubscribe(webhookSubscribeRequest, observableOptions);
        return result.toPromise();
    }


}



