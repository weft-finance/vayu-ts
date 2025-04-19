import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { APICreateCustomerPayload } from '../models/APICreateCustomerPayload';
import { APICreateInvoicePayload } from '../models/APICreateInvoicePayload';
import { APICreateProductPayload } from '../models/APICreateProductPayload';
import { APICustomer } from '../models/APICustomer';
import { APIEntitlement } from '../models/APIEntitlement';
import { APIEvent } from '../models/APIEvent';
import { APIIngestEventPayload } from '../models/APIIngestEventPayload';
import { APIInvoice } from '../models/APIInvoice';
import { APIInvoiceBillingPeriod } from '../models/APIInvoiceBillingPeriod';
import { APIProduct } from '../models/APIProduct';
import { APIQueryPayloadAPICustomer } from '../models/APIQueryPayloadAPICustomer';
import { APIQueryPayloadAPIEntitlement } from '../models/APIQueryPayloadAPIEntitlement';
import { APIQueryPayloadAPIEvent } from '../models/APIQueryPayloadAPIEvent';
import { APIQueryPayloadAPIInvoice } from '../models/APIQueryPayloadAPIInvoice';
import { APIQueryPayloadAPIProduct } from '../models/APIQueryPayloadAPIProduct';
import { APIUpdateCustomerPayload } from '../models/APIUpdateCustomerPayload';
import { APIUpdateInvoicePayload } from '../models/APIUpdateInvoicePayload';
import { APIUpdateProductPayload } from '../models/APIUpdateProductPayload';
import { Aggregation } from '../models/Aggregation';
import { AggregationMethods } from '../models/AggregationMethods';
import { Condition } from '../models/Condition';
import { Criterion } from '../models/Criterion';
import { CriterionOperators } from '../models/CriterionOperators';
import { CriterionValue } from '../models/CriterionValue';
import { EntitlementRevision } from '../models/EntitlementRevision';
import { IngestEventToTheSystem201Response } from '../models/IngestEventToTheSystem201Response';
import { InvoiceProductBreakdown } from '../models/InvoiceProductBreakdown';
import { Login200Response } from '../models/Login200Response';
import { LoginRequest } from '../models/LoginRequest';
import { Pricing } from '../models/Pricing';
import { PricingCadence } from '../models/PricingCadence';
import { PricingTiersInner } from '../models/PricingTiersInner';
import { ProductBreakdown } from '../models/ProductBreakdown';
import { QueryResultAPICustomer } from '../models/QueryResultAPICustomer';
import { QueryResultAPIEntitlement } from '../models/QueryResultAPIEntitlement';
import { QueryResultAPIEvent } from '../models/QueryResultAPIEvent';
import { QueryResultAPIInvoice } from '../models/QueryResultAPIInvoice';
import { QueryResultAPIProduct } from '../models/QueryResultAPIProduct';
import { ReviseEntitlementPayload } from '../models/ReviseEntitlementPayload';
import { ObservableAuthenticationApi } from './ObservableAPI';

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class PromiseAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param loginRequest
     */
    public loginWithHttpInfo(loginRequest: LoginRequest, _options?: Configuration): Promise<HttpInfo<Login200Response>> {
        const result = this.api.loginWithHttpInfo(loginRequest, _options);
        return result.toPromise();
    }

    /**
     * @param loginRequest
     */
    public login(loginRequest: LoginRequest, _options?: Configuration): Promise<Login200Response> {
        const result = this.api.login(loginRequest, _options);
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
     * Create a new customer.
     * @param aPICreateCustomerPayload - The details of the customer to create.
     */
    public createCustomerWithHttpInfo(aPICreateCustomerPayload: APICreateCustomerPayload, _options?: Configuration): Promise<HttpInfo<APICustomer>> {
        const result = this.api.createCustomerWithHttpInfo(aPICreateCustomerPayload, _options);
        return result.toPromise();
    }

    /**
     * Create a new customer.
     * @param aPICreateCustomerPayload - The details of the customer to create.
     */
    public createCustomer(aPICreateCustomerPayload: APICreateCustomerPayload, _options?: Configuration): Promise<APICustomer> {
        const result = this.api.createCustomer(aPICreateCustomerPayload, _options);
        return result.toPromise();
    }

    /**
     * Delete a customer by ID.
     * @param id - The ID of the customer to delete.
     */
    public deleteCustomerWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCustomerWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete a customer by ID.
     * @param id - The ID of the customer to delete.
     */
    public deleteCustomer(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCustomer(id, _options);
        return result.toPromise();
    }

    /**
     * Get a single customer by ID.
     * @param id - The ID of the customer to fetch.
     */
    public getCustomerWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<APICustomer>> {
        const result = this.api.getCustomerWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a single customer by ID.
     * @param id - The ID of the customer to fetch.
     */
    public getCustomer(id: string, _options?: Configuration): Promise<APICustomer> {
        const result = this.api.getCustomer(id, _options);
        return result.toPromise();
    }

    /**
     * Query customers based on filters and pagination.
     * @param aPIQueryPayloadAPICustomer - The query filters and pagination options.
     */
    public queryCustomersWithHttpInfo(aPIQueryPayloadAPICustomer: APIQueryPayloadAPICustomer, _options?: Configuration): Promise<HttpInfo<QueryResultAPICustomer>> {
        const result = this.api.queryCustomersWithHttpInfo(aPIQueryPayloadAPICustomer, _options);
        return result.toPromise();
    }

    /**
     * Query customers based on filters and pagination.
     * @param aPIQueryPayloadAPICustomer - The query filters and pagination options.
     */
    public queryCustomers(aPIQueryPayloadAPICustomer: APIQueryPayloadAPICustomer, _options?: Configuration): Promise<QueryResultAPICustomer> {
        const result = this.api.queryCustomers(aPIQueryPayloadAPICustomer, _options);
        return result.toPromise();
    }

    /**
     * Revise a customer\'s product.
     * @param body - The details of the revision to apply.
     * @param id - The ID of the customer to revise.
     * @param productId - The ID of the product to revise.
     */
    public updateACustomersProductWithHttpInfo(body: ReviseEntitlementPayload, id: string, productId: string, _options?: Configuration): Promise<HttpInfo<APIEntitlement>> {
        const result = this.api.updateACustomersProductWithHttpInfo(body, id, productId, _options);
        return result.toPromise();
    }

    /**
     * Revise a customer\'s product.
     * @param body - The details of the revision to apply.
     * @param id - The ID of the customer to revise.
     * @param productId - The ID of the product to revise.
     */
    public updateACustomersProduct(body: ReviseEntitlementPayload, id: string, productId: string, _options?: Configuration): Promise<APIEntitlement> {
        const result = this.api.updateACustomersProduct(body, id, productId, _options);
        return result.toPromise();
    }

    /**
     * Update an existing customer.
     * @param aPIUpdateCustomerPayload - The updated details of the customer.
     * @param id - The ID of the customer to update.
     */
    public updateCustomerWithHttpInfo(aPIUpdateCustomerPayload: APIUpdateCustomerPayload, id: string, _options?: Configuration): Promise<HttpInfo<APICustomer>> {
        const result = this.api.updateCustomerWithHttpInfo(aPIUpdateCustomerPayload, id, _options);
        return result.toPromise();
    }

    /**
     * Update an existing customer.
     * @param aPIUpdateCustomerPayload - The updated details of the customer.
     * @param id - The ID of the customer to update.
     */
    public updateCustomer(aPIUpdateCustomerPayload: APIUpdateCustomerPayload, id: string, _options?: Configuration): Promise<APICustomer> {
        const result = this.api.updateCustomer(aPIUpdateCustomerPayload, id, _options);
        return result.toPromise();
    }


}



import { ObservableEntitlementsApi } from './ObservableAPI';

import { EntitlementsApiRequestFactory, EntitlementsApiResponseProcessor} from "../apis/EntitlementsApi";
export class PromiseEntitlementsApi {
    private api: ObservableEntitlementsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EntitlementsApiRequestFactory,
        responseProcessor?: EntitlementsApiResponseProcessor
    ) {
        this.api = new ObservableEntitlementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an entitlement by ID.
     * @param id - The ID of the entitlement to delete.
     */
    public deleteEntitlementWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteEntitlementWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete an entitlement by ID.
     * @param id - The ID of the entitlement to delete.
     */
    public deleteEntitlement(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEntitlement(id, _options);
        return result.toPromise();
    }

    /**
     * Get a single entitlement by ID.
     * @param id - The ID of the entitlement to fetch.
     */
    public getEntitlementWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<APIEntitlement>> {
        const result = this.api.getEntitlementWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a single entitlement by ID.
     * @param id - The ID of the entitlement to fetch.
     */
    public getEntitlement(id: string, _options?: Configuration): Promise<APIEntitlement> {
        const result = this.api.getEntitlement(id, _options);
        return result.toPromise();
    }

    /**
     * Query entitlements based on filters and pagination.
     * @param aPIQueryPayloadAPIEntitlement - The query filters and pagination options.
     */
    public queryEntitlementsWithHttpInfo(aPIQueryPayloadAPIEntitlement: APIQueryPayloadAPIEntitlement, _options?: Configuration): Promise<HttpInfo<QueryResultAPIEntitlement>> {
        const result = this.api.queryEntitlementsWithHttpInfo(aPIQueryPayloadAPIEntitlement, _options);
        return result.toPromise();
    }

    /**
     * Query entitlements based on filters and pagination.
     * @param aPIQueryPayloadAPIEntitlement - The query filters and pagination options.
     */
    public queryEntitlements(aPIQueryPayloadAPIEntitlement: APIQueryPayloadAPIEntitlement, _options?: Configuration): Promise<QueryResultAPIEntitlement> {
        const result = this.api.queryEntitlements(aPIQueryPayloadAPIEntitlement, _options);
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
     * Delete an event by ID.
     * @param id - The ID of the event to delete.
     */
    public deleteEventWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteEventWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete an event by ID.
     * @param id - The ID of the event to delete.
     */
    public deleteEvent(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEvent(id, _options);
        return result.toPromise();
    }

    /**
     * Get a single event by ID.
     * @param id - The ID of the event to fetch.
     */
    public getEventWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<APIEvent>> {
        const result = this.api.getEventWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a single event by ID.
     * @param id - The ID of the event to fetch.
     */
    public getEvent(id: string, _options?: Configuration): Promise<APIEvent> {
        const result = this.api.getEvent(id, _options);
        return result.toPromise();
    }

    /**
     * Ingest events to the system
     * @param aPIIngestEventPayload - The events to ingest
     */
    public ingestEventToTheSystemWithHttpInfo(aPIIngestEventPayload: Array<APIIngestEventPayload>, _options?: Configuration): Promise<HttpInfo<IngestEventToTheSystem201Response>> {
        const result = this.api.ingestEventToTheSystemWithHttpInfo(aPIIngestEventPayload, _options);
        return result.toPromise();
    }

    /**
     * Ingest events to the system
     * @param aPIIngestEventPayload - The events to ingest
     */
    public ingestEventToTheSystem(aPIIngestEventPayload: Array<APIIngestEventPayload>, _options?: Configuration): Promise<IngestEventToTheSystem201Response> {
        const result = this.api.ingestEventToTheSystem(aPIIngestEventPayload, _options);
        return result.toPromise();
    }

    /**
     * Query events based on filters and pagination.
     * @param aPIQueryPayloadAPIEvent - The query filters and pagination options.
     */
    public queryEventsWithHttpInfo(aPIQueryPayloadAPIEvent: APIQueryPayloadAPIEvent, _options?: Configuration): Promise<HttpInfo<QueryResultAPIEvent>> {
        const result = this.api.queryEventsWithHttpInfo(aPIQueryPayloadAPIEvent, _options);
        return result.toPromise();
    }

    /**
     * Query events based on filters and pagination.
     * @param aPIQueryPayloadAPIEvent - The query filters and pagination options.
     */
    public queryEvents(aPIQueryPayloadAPIEvent: APIQueryPayloadAPIEvent, _options?: Configuration): Promise<QueryResultAPIEvent> {
        const result = this.api.queryEvents(aPIQueryPayloadAPIEvent, _options);
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
     * Calculate the total of an invoice.
     * @param id - The ID of the invoice to calculate.
     */
    public calculateInvoiceWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<APIInvoice>> {
        const result = this.api.calculateInvoiceWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Calculate the total of an invoice.
     * @param id - The ID of the invoice to calculate.
     */
    public calculateInvoice(id: string, _options?: Configuration): Promise<APIInvoice> {
        const result = this.api.calculateInvoice(id, _options);
        return result.toPromise();
    }

    /**
     * Create a new invoice.
     * @param aPICreateInvoicePayload - The details of the invoice to create.
     */
    public createInvoiceWithHttpInfo(aPICreateInvoicePayload: APICreateInvoicePayload, _options?: Configuration): Promise<HttpInfo<APIInvoice>> {
        const result = this.api.createInvoiceWithHttpInfo(aPICreateInvoicePayload, _options);
        return result.toPromise();
    }

    /**
     * Create a new invoice.
     * @param aPICreateInvoicePayload - The details of the invoice to create.
     */
    public createInvoice(aPICreateInvoicePayload: APICreateInvoicePayload, _options?: Configuration): Promise<APIInvoice> {
        const result = this.api.createInvoice(aPICreateInvoicePayload, _options);
        return result.toPromise();
    }

    /**
     * Delete an invoice by ID.
     * @param id - The ID of the invoice to delete.
     */
    public deleteInvoiceWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteInvoiceWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete an invoice by ID.
     * @param id - The ID of the invoice to delete.
     */
    public deleteInvoice(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteInvoice(id, _options);
        return result.toPromise();
    }

    /**
     * Get a single invoice by ID.
     * @param id - The ID of the invoice to fetch.
     */
    public getInvoiceWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<APIInvoice>> {
        const result = this.api.getInvoiceWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a single invoice by ID.
     * @param id - The ID of the invoice to fetch.
     */
    public getInvoice(id: string, _options?: Configuration): Promise<APIInvoice> {
        const result = this.api.getInvoice(id, _options);
        return result.toPromise();
    }

    /**
     * Query invoices based on filters and pagination.
     * @param aPIQueryPayloadAPIInvoice - The query filters and pagination options.
     */
    public queryInvoicesWithHttpInfo(aPIQueryPayloadAPIInvoice: APIQueryPayloadAPIInvoice, _options?: Configuration): Promise<HttpInfo<QueryResultAPIInvoice>> {
        const result = this.api.queryInvoicesWithHttpInfo(aPIQueryPayloadAPIInvoice, _options);
        return result.toPromise();
    }

    /**
     * Query invoices based on filters and pagination.
     * @param aPIQueryPayloadAPIInvoice - The query filters and pagination options.
     */
    public queryInvoices(aPIQueryPayloadAPIInvoice: APIQueryPayloadAPIInvoice, _options?: Configuration): Promise<QueryResultAPIInvoice> {
        const result = this.api.queryInvoices(aPIQueryPayloadAPIInvoice, _options);
        return result.toPromise();
    }

    /**
     * Update an existing invoice.
     * @param aPIUpdateInvoicePayload - The updated details of the invoice.
     * @param id - The ID of the invoice to update.
     */
    public updateInvoiceWithHttpInfo(aPIUpdateInvoicePayload: APIUpdateInvoicePayload, id: string, _options?: Configuration): Promise<HttpInfo<APIInvoice>> {
        const result = this.api.updateInvoiceWithHttpInfo(aPIUpdateInvoicePayload, id, _options);
        return result.toPromise();
    }

    /**
     * Update an existing invoice.
     * @param aPIUpdateInvoicePayload - The updated details of the invoice.
     * @param id - The ID of the invoice to update.
     */
    public updateInvoice(aPIUpdateInvoicePayload: APIUpdateInvoicePayload, id: string, _options?: Configuration): Promise<APIInvoice> {
        const result = this.api.updateInvoice(aPIUpdateInvoicePayload, id, _options);
        return result.toPromise();
    }


}



import { ObservableProductsApi } from './ObservableAPI';

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class PromiseProductsApi {
    private api: ObservableProductsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new product.
     * @param aPICreateProductPayload - The details of the product to create.
     */
    public createProductWithHttpInfo(aPICreateProductPayload: APICreateProductPayload, _options?: Configuration): Promise<HttpInfo<APIProduct>> {
        const result = this.api.createProductWithHttpInfo(aPICreateProductPayload, _options);
        return result.toPromise();
    }

    /**
     * Create a new product.
     * @param aPICreateProductPayload - The details of the product to create.
     */
    public createProduct(aPICreateProductPayload: APICreateProductPayload, _options?: Configuration): Promise<APIProduct> {
        const result = this.api.createProduct(aPICreateProductPayload, _options);
        return result.toPromise();
    }

    /**
     * Delete a product by ID.
     * @param id - The ID of the product to delete.
     */
    public deleteProductWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteProductWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Delete a product by ID.
     * @param id - The ID of the product to delete.
     */
    public deleteProduct(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProduct(id, _options);
        return result.toPromise();
    }

    /**
     * Get a single product by ID.
     * @param id - The ID of the product to fetch.
     */
    public getProductWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<APIProduct>> {
        const result = this.api.getProductWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * Get a single product by ID.
     * @param id - The ID of the product to fetch.
     */
    public getProduct(id: string, _options?: Configuration): Promise<APIProduct> {
        const result = this.api.getProduct(id, _options);
        return result.toPromise();
    }

    /**
     * Query products based on filters and pagination.
     * @param aPIQueryPayloadAPIProduct - The query filters and pagination details.
     */
    public queryProductsWithHttpInfo(aPIQueryPayloadAPIProduct: APIQueryPayloadAPIProduct, _options?: Configuration): Promise<HttpInfo<QueryResultAPIProduct>> {
        const result = this.api.queryProductsWithHttpInfo(aPIQueryPayloadAPIProduct, _options);
        return result.toPromise();
    }

    /**
     * Query products based on filters and pagination.
     * @param aPIQueryPayloadAPIProduct - The query filters and pagination details.
     */
    public queryProducts(aPIQueryPayloadAPIProduct: APIQueryPayloadAPIProduct, _options?: Configuration): Promise<QueryResultAPIProduct> {
        const result = this.api.queryProducts(aPIQueryPayloadAPIProduct, _options);
        return result.toPromise();
    }

    /**
     * Update an existing product.
     * @param aPIUpdateProductPayload - The updated details of the product.
     * @param id - The ID of the product to update.
     */
    public updateProductWithHttpInfo(aPIUpdateProductPayload: APIUpdateProductPayload, id: string, _options?: Configuration): Promise<HttpInfo<APIProduct>> {
        const result = this.api.updateProductWithHttpInfo(aPIUpdateProductPayload, id, _options);
        return result.toPromise();
    }

    /**
     * Update an existing product.
     * @param aPIUpdateProductPayload - The updated details of the product.
     * @param id - The ID of the product to update.
     */
    public updateProduct(aPIUpdateProductPayload: APIUpdateProductPayload, id: string, _options?: Configuration): Promise<APIProduct> {
        const result = this.api.updateProduct(aPIUpdateProductPayload, id, _options);
        return result.toPromise();
    }


}



