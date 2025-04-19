import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

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

import { ObservableAuthenticationApi } from "./ObservableAPI";
import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";

export interface AuthenticationApiLoginRequest {
    /**
     * 
     * @type LoginRequest
     * @memberof AuthenticationApilogin
     */
    loginRequest: LoginRequest
}

export class ObjectAuthenticationApi {
    private api: ObservableAuthenticationApi

    public constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor) {
        this.api = new ObservableAuthenticationApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public loginWithHttpInfo(param: AuthenticationApiLoginRequest, options?: ConfigurationOptions): Promise<HttpInfo<Login200Response>> {
        return this.api.loginWithHttpInfo(param.loginRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public login(param: AuthenticationApiLoginRequest, options?: ConfigurationOptions): Promise<Login200Response> {
        return this.api.login(param.loginRequest,  options).toPromise();
    }

}

import { ObservableCustomersApi } from "./ObservableAPI";
import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";

export interface CustomersApiCreateCustomerRequest {
    /**
     * - The details of the customer to create.
     * @type APICreateCustomerPayload
     * @memberof CustomersApicreateCustomer
     */
    aPICreateCustomerPayload: APICreateCustomerPayload
}

export interface CustomersApiDeleteCustomerRequest {
    /**
     * - The ID of the customer to delete.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApideleteCustomer
     */
    id: string
}

export interface CustomersApiGetCustomerRequest {
    /**
     * - The ID of the customer to fetch.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApigetCustomer
     */
    id: string
}

export interface CustomersApiQueryCustomersRequest {
    /**
     * - The query filters and pagination options.
     * @type APIQueryPayloadAPICustomer
     * @memberof CustomersApiqueryCustomers
     */
    aPIQueryPayloadAPICustomer: APIQueryPayloadAPICustomer
}

export interface CustomersApiUpdateACustomersProductRequest {
    /**
     * - The details of the revision to apply.
     * @type ReviseEntitlementPayload
     * @memberof CustomersApiupdateACustomersProduct
     */
    body: ReviseEntitlementPayload
    /**
     * - The ID of the customer to revise.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApiupdateACustomersProduct
     */
    id: string
    /**
     * - The ID of the product to revise.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApiupdateACustomersProduct
     */
    productId: string
}

export interface CustomersApiUpdateCustomerRequest {
    /**
     * - The updated details of the customer.
     * @type APIUpdateCustomerPayload
     * @memberof CustomersApiupdateCustomer
     */
    aPIUpdateCustomerPayload: APIUpdateCustomerPayload
    /**
     * - The ID of the customer to update.
     * Defaults to: undefined
     * @type string
     * @memberof CustomersApiupdateCustomer
     */
    id: string
}

export class ObjectCustomersApi {
    private api: ObservableCustomersApi

    public constructor(configuration: Configuration, requestFactory?: CustomersApiRequestFactory, responseProcessor?: CustomersApiResponseProcessor) {
        this.api = new ObservableCustomersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new customer.
     * @param param the request object
     */
    public createCustomerWithHttpInfo(param: CustomersApiCreateCustomerRequest, options?: ConfigurationOptions): Promise<HttpInfo<APICustomer>> {
        return this.api.createCustomerWithHttpInfo(param.aPICreateCustomerPayload,  options).toPromise();
    }

    /**
     * Create a new customer.
     * @param param the request object
     */
    public createCustomer(param: CustomersApiCreateCustomerRequest, options?: ConfigurationOptions): Promise<APICustomer> {
        return this.api.createCustomer(param.aPICreateCustomerPayload,  options).toPromise();
    }

    /**
     * Delete a customer by ID.
     * @param param the request object
     */
    public deleteCustomerWithHttpInfo(param: CustomersApiDeleteCustomerRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteCustomerWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete a customer by ID.
     * @param param the request object
     */
    public deleteCustomer(param: CustomersApiDeleteCustomerRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteCustomer(param.id,  options).toPromise();
    }

    /**
     * Get a single customer by ID.
     * @param param the request object
     */
    public getCustomerWithHttpInfo(param: CustomersApiGetCustomerRequest, options?: ConfigurationOptions): Promise<HttpInfo<APICustomer>> {
        return this.api.getCustomerWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a single customer by ID.
     * @param param the request object
     */
    public getCustomer(param: CustomersApiGetCustomerRequest, options?: ConfigurationOptions): Promise<APICustomer> {
        return this.api.getCustomer(param.id,  options).toPromise();
    }

    /**
     * Query customers based on filters and pagination.
     * @param param the request object
     */
    public queryCustomersWithHttpInfo(param: CustomersApiQueryCustomersRequest, options?: ConfigurationOptions): Promise<HttpInfo<QueryResultAPICustomer>> {
        return this.api.queryCustomersWithHttpInfo(param.aPIQueryPayloadAPICustomer,  options).toPromise();
    }

    /**
     * Query customers based on filters and pagination.
     * @param param the request object
     */
    public queryCustomers(param: CustomersApiQueryCustomersRequest, options?: ConfigurationOptions): Promise<QueryResultAPICustomer> {
        return this.api.queryCustomers(param.aPIQueryPayloadAPICustomer,  options).toPromise();
    }

    /**
     * Revise a customer\'s product.
     * @param param the request object
     */
    public updateACustomersProductWithHttpInfo(param: CustomersApiUpdateACustomersProductRequest, options?: ConfigurationOptions): Promise<HttpInfo<APIEntitlement>> {
        return this.api.updateACustomersProductWithHttpInfo(param.body, param.id, param.productId,  options).toPromise();
    }

    /**
     * Revise a customer\'s product.
     * @param param the request object
     */
    public updateACustomersProduct(param: CustomersApiUpdateACustomersProductRequest, options?: ConfigurationOptions): Promise<APIEntitlement> {
        return this.api.updateACustomersProduct(param.body, param.id, param.productId,  options).toPromise();
    }

    /**
     * Update an existing customer.
     * @param param the request object
     */
    public updateCustomerWithHttpInfo(param: CustomersApiUpdateCustomerRequest, options?: ConfigurationOptions): Promise<HttpInfo<APICustomer>> {
        return this.api.updateCustomerWithHttpInfo(param.aPIUpdateCustomerPayload, param.id,  options).toPromise();
    }

    /**
     * Update an existing customer.
     * @param param the request object
     */
    public updateCustomer(param: CustomersApiUpdateCustomerRequest, options?: ConfigurationOptions): Promise<APICustomer> {
        return this.api.updateCustomer(param.aPIUpdateCustomerPayload, param.id,  options).toPromise();
    }

}

import { ObservableEntitlementsApi } from "./ObservableAPI";
import { EntitlementsApiRequestFactory, EntitlementsApiResponseProcessor} from "../apis/EntitlementsApi";

export interface EntitlementsApiDeleteEntitlementRequest {
    /**
     * - The ID of the entitlement to delete.
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementsApideleteEntitlement
     */
    id: string
}

export interface EntitlementsApiGetEntitlementRequest {
    /**
     * - The ID of the entitlement to fetch.
     * Defaults to: undefined
     * @type string
     * @memberof EntitlementsApigetEntitlement
     */
    id: string
}

export interface EntitlementsApiQueryEntitlementsRequest {
    /**
     * - The query filters and pagination options.
     * @type APIQueryPayloadAPIEntitlement
     * @memberof EntitlementsApiqueryEntitlements
     */
    aPIQueryPayloadAPIEntitlement: APIQueryPayloadAPIEntitlement
}

export class ObjectEntitlementsApi {
    private api: ObservableEntitlementsApi

    public constructor(configuration: Configuration, requestFactory?: EntitlementsApiRequestFactory, responseProcessor?: EntitlementsApiResponseProcessor) {
        this.api = new ObservableEntitlementsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an entitlement by ID.
     * @param param the request object
     */
    public deleteEntitlementWithHttpInfo(param: EntitlementsApiDeleteEntitlementRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteEntitlementWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete an entitlement by ID.
     * @param param the request object
     */
    public deleteEntitlement(param: EntitlementsApiDeleteEntitlementRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteEntitlement(param.id,  options).toPromise();
    }

    /**
     * Get a single entitlement by ID.
     * @param param the request object
     */
    public getEntitlementWithHttpInfo(param: EntitlementsApiGetEntitlementRequest, options?: ConfigurationOptions): Promise<HttpInfo<APIEntitlement>> {
        return this.api.getEntitlementWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a single entitlement by ID.
     * @param param the request object
     */
    public getEntitlement(param: EntitlementsApiGetEntitlementRequest, options?: ConfigurationOptions): Promise<APIEntitlement> {
        return this.api.getEntitlement(param.id,  options).toPromise();
    }

    /**
     * Query entitlements based on filters and pagination.
     * @param param the request object
     */
    public queryEntitlementsWithHttpInfo(param: EntitlementsApiQueryEntitlementsRequest, options?: ConfigurationOptions): Promise<HttpInfo<QueryResultAPIEntitlement>> {
        return this.api.queryEntitlementsWithHttpInfo(param.aPIQueryPayloadAPIEntitlement,  options).toPromise();
    }

    /**
     * Query entitlements based on filters and pagination.
     * @param param the request object
     */
    public queryEntitlements(param: EntitlementsApiQueryEntitlementsRequest, options?: ConfigurationOptions): Promise<QueryResultAPIEntitlement> {
        return this.api.queryEntitlements(param.aPIQueryPayloadAPIEntitlement,  options).toPromise();
    }

}

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiDeleteEventRequest {
    /**
     * - The ID of the event to delete.
     * Defaults to: undefined
     * @type string
     * @memberof EventsApideleteEvent
     */
    id: string
}

export interface EventsApiGetEventRequest {
    /**
     * - The ID of the event to fetch.
     * Defaults to: undefined
     * @type string
     * @memberof EventsApigetEvent
     */
    id: string
}

export interface EventsApiIngestEventToTheSystemRequest {
    /**
     * - The events to ingest
     * @type Array&lt;APIIngestEventPayload&gt;
     * @memberof EventsApiingestEventToTheSystem
     */
    aPIIngestEventPayload: Array<APIIngestEventPayload>
}

export interface EventsApiQueryEventsRequest {
    /**
     * - The query filters and pagination options.
     * @type APIQueryPayloadAPIEvent
     * @memberof EventsApiqueryEvents
     */
    aPIQueryPayloadAPIEvent: APIQueryPayloadAPIEvent
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an event by ID.
     * @param param the request object
     */
    public deleteEventWithHttpInfo(param: EventsApiDeleteEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteEventWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete an event by ID.
     * @param param the request object
     */
    public deleteEvent(param: EventsApiDeleteEventRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteEvent(param.id,  options).toPromise();
    }

    /**
     * Get a single event by ID.
     * @param param the request object
     */
    public getEventWithHttpInfo(param: EventsApiGetEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<APIEvent>> {
        return this.api.getEventWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a single event by ID.
     * @param param the request object
     */
    public getEvent(param: EventsApiGetEventRequest, options?: ConfigurationOptions): Promise<APIEvent> {
        return this.api.getEvent(param.id,  options).toPromise();
    }

    /**
     * Ingest events to the system
     * @param param the request object
     */
    public ingestEventToTheSystemWithHttpInfo(param: EventsApiIngestEventToTheSystemRequest, options?: ConfigurationOptions): Promise<HttpInfo<IngestEventToTheSystem201Response>> {
        return this.api.ingestEventToTheSystemWithHttpInfo(param.aPIIngestEventPayload,  options).toPromise();
    }

    /**
     * Ingest events to the system
     * @param param the request object
     */
    public ingestEventToTheSystem(param: EventsApiIngestEventToTheSystemRequest, options?: ConfigurationOptions): Promise<IngestEventToTheSystem201Response> {
        return this.api.ingestEventToTheSystem(param.aPIIngestEventPayload,  options).toPromise();
    }

    /**
     * Query events based on filters and pagination.
     * @param param the request object
     */
    public queryEventsWithHttpInfo(param: EventsApiQueryEventsRequest, options?: ConfigurationOptions): Promise<HttpInfo<QueryResultAPIEvent>> {
        return this.api.queryEventsWithHttpInfo(param.aPIQueryPayloadAPIEvent,  options).toPromise();
    }

    /**
     * Query events based on filters and pagination.
     * @param param the request object
     */
    public queryEvents(param: EventsApiQueryEventsRequest, options?: ConfigurationOptions): Promise<QueryResultAPIEvent> {
        return this.api.queryEvents(param.aPIQueryPayloadAPIEvent,  options).toPromise();
    }

}

import { ObservableInvoicesApi } from "./ObservableAPI";
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";

export interface InvoicesApiCalculateInvoiceRequest {
    /**
     * - The ID of the invoice to calculate.
     * Defaults to: undefined
     * @type string
     * @memberof InvoicesApicalculateInvoice
     */
    id: string
}

export interface InvoicesApiCreateInvoiceRequest {
    /**
     * - The details of the invoice to create.
     * @type APICreateInvoicePayload
     * @memberof InvoicesApicreateInvoice
     */
    aPICreateInvoicePayload: APICreateInvoicePayload
}

export interface InvoicesApiDeleteInvoiceRequest {
    /**
     * - The ID of the invoice to delete.
     * Defaults to: undefined
     * @type string
     * @memberof InvoicesApideleteInvoice
     */
    id: string
}

export interface InvoicesApiGetInvoiceRequest {
    /**
     * - The ID of the invoice to fetch.
     * Defaults to: undefined
     * @type string
     * @memberof InvoicesApigetInvoice
     */
    id: string
}

export interface InvoicesApiQueryInvoicesRequest {
    /**
     * - The query filters and pagination options.
     * @type APIQueryPayloadAPIInvoice
     * @memberof InvoicesApiqueryInvoices
     */
    aPIQueryPayloadAPIInvoice: APIQueryPayloadAPIInvoice
}

export interface InvoicesApiUpdateInvoiceRequest {
    /**
     * - The updated details of the invoice.
     * @type APIUpdateInvoicePayload
     * @memberof InvoicesApiupdateInvoice
     */
    aPIUpdateInvoicePayload: APIUpdateInvoicePayload
    /**
     * - The ID of the invoice to update.
     * Defaults to: undefined
     * @type string
     * @memberof InvoicesApiupdateInvoice
     */
    id: string
}

export class ObjectInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Calculate the total of an invoice.
     * @param param the request object
     */
    public calculateInvoiceWithHttpInfo(param: InvoicesApiCalculateInvoiceRequest, options?: ConfigurationOptions): Promise<HttpInfo<APIInvoice>> {
        return this.api.calculateInvoiceWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Calculate the total of an invoice.
     * @param param the request object
     */
    public calculateInvoice(param: InvoicesApiCalculateInvoiceRequest, options?: ConfigurationOptions): Promise<APIInvoice> {
        return this.api.calculateInvoice(param.id,  options).toPromise();
    }

    /**
     * Create a new invoice.
     * @param param the request object
     */
    public createInvoiceWithHttpInfo(param: InvoicesApiCreateInvoiceRequest, options?: ConfigurationOptions): Promise<HttpInfo<APIInvoice>> {
        return this.api.createInvoiceWithHttpInfo(param.aPICreateInvoicePayload,  options).toPromise();
    }

    /**
     * Create a new invoice.
     * @param param the request object
     */
    public createInvoice(param: InvoicesApiCreateInvoiceRequest, options?: ConfigurationOptions): Promise<APIInvoice> {
        return this.api.createInvoice(param.aPICreateInvoicePayload,  options).toPromise();
    }

    /**
     * Delete an invoice by ID.
     * @param param the request object
     */
    public deleteInvoiceWithHttpInfo(param: InvoicesApiDeleteInvoiceRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteInvoiceWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete an invoice by ID.
     * @param param the request object
     */
    public deleteInvoice(param: InvoicesApiDeleteInvoiceRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteInvoice(param.id,  options).toPromise();
    }

    /**
     * Get a single invoice by ID.
     * @param param the request object
     */
    public getInvoiceWithHttpInfo(param: InvoicesApiGetInvoiceRequest, options?: ConfigurationOptions): Promise<HttpInfo<APIInvoice>> {
        return this.api.getInvoiceWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a single invoice by ID.
     * @param param the request object
     */
    public getInvoice(param: InvoicesApiGetInvoiceRequest, options?: ConfigurationOptions): Promise<APIInvoice> {
        return this.api.getInvoice(param.id,  options).toPromise();
    }

    /**
     * Query invoices based on filters and pagination.
     * @param param the request object
     */
    public queryInvoicesWithHttpInfo(param: InvoicesApiQueryInvoicesRequest, options?: ConfigurationOptions): Promise<HttpInfo<QueryResultAPIInvoice>> {
        return this.api.queryInvoicesWithHttpInfo(param.aPIQueryPayloadAPIInvoice,  options).toPromise();
    }

    /**
     * Query invoices based on filters and pagination.
     * @param param the request object
     */
    public queryInvoices(param: InvoicesApiQueryInvoicesRequest, options?: ConfigurationOptions): Promise<QueryResultAPIInvoice> {
        return this.api.queryInvoices(param.aPIQueryPayloadAPIInvoice,  options).toPromise();
    }

    /**
     * Update an existing invoice.
     * @param param the request object
     */
    public updateInvoiceWithHttpInfo(param: InvoicesApiUpdateInvoiceRequest, options?: ConfigurationOptions): Promise<HttpInfo<APIInvoice>> {
        return this.api.updateInvoiceWithHttpInfo(param.aPIUpdateInvoicePayload, param.id,  options).toPromise();
    }

    /**
     * Update an existing invoice.
     * @param param the request object
     */
    public updateInvoice(param: InvoicesApiUpdateInvoiceRequest, options?: ConfigurationOptions): Promise<APIInvoice> {
        return this.api.updateInvoice(param.aPIUpdateInvoicePayload, param.id,  options).toPromise();
    }

}

import { ObservableProductsApi } from "./ObservableAPI";
import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";

export interface ProductsApiCreateProductRequest {
    /**
     * - The details of the product to create.
     * @type APICreateProductPayload
     * @memberof ProductsApicreateProduct
     */
    aPICreateProductPayload: APICreateProductPayload
}

export interface ProductsApiDeleteProductRequest {
    /**
     * - The ID of the product to delete.
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApideleteProduct
     */
    id: string
}

export interface ProductsApiGetProductRequest {
    /**
     * - The ID of the product to fetch.
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApigetProduct
     */
    id: string
}

export interface ProductsApiQueryProductsRequest {
    /**
     * - The query filters and pagination details.
     * @type APIQueryPayloadAPIProduct
     * @memberof ProductsApiqueryProducts
     */
    aPIQueryPayloadAPIProduct: APIQueryPayloadAPIProduct
}

export interface ProductsApiUpdateProductRequest {
    /**
     * - The updated details of the product.
     * @type APIUpdateProductPayload
     * @memberof ProductsApiupdateProduct
     */
    aPIUpdateProductPayload: APIUpdateProductPayload
    /**
     * - The ID of the product to update.
     * Defaults to: undefined
     * @type string
     * @memberof ProductsApiupdateProduct
     */
    id: string
}

export class ObjectProductsApi {
    private api: ObservableProductsApi

    public constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new product.
     * @param param the request object
     */
    public createProductWithHttpInfo(param: ProductsApiCreateProductRequest, options?: ConfigurationOptions): Promise<HttpInfo<APIProduct>> {
        return this.api.createProductWithHttpInfo(param.aPICreateProductPayload,  options).toPromise();
    }

    /**
     * Create a new product.
     * @param param the request object
     */
    public createProduct(param: ProductsApiCreateProductRequest, options?: ConfigurationOptions): Promise<APIProduct> {
        return this.api.createProduct(param.aPICreateProductPayload,  options).toPromise();
    }

    /**
     * Delete a product by ID.
     * @param param the request object
     */
    public deleteProductWithHttpInfo(param: ProductsApiDeleteProductRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.deleteProductWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Delete a product by ID.
     * @param param the request object
     */
    public deleteProduct(param: ProductsApiDeleteProductRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.deleteProduct(param.id,  options).toPromise();
    }

    /**
     * Get a single product by ID.
     * @param param the request object
     */
    public getProductWithHttpInfo(param: ProductsApiGetProductRequest, options?: ConfigurationOptions): Promise<HttpInfo<APIProduct>> {
        return this.api.getProductWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * Get a single product by ID.
     * @param param the request object
     */
    public getProduct(param: ProductsApiGetProductRequest, options?: ConfigurationOptions): Promise<APIProduct> {
        return this.api.getProduct(param.id,  options).toPromise();
    }

    /**
     * Query products based on filters and pagination.
     * @param param the request object
     */
    public queryProductsWithHttpInfo(param: ProductsApiQueryProductsRequest, options?: ConfigurationOptions): Promise<HttpInfo<QueryResultAPIProduct>> {
        return this.api.queryProductsWithHttpInfo(param.aPIQueryPayloadAPIProduct,  options).toPromise();
    }

    /**
     * Query products based on filters and pagination.
     * @param param the request object
     */
    public queryProducts(param: ProductsApiQueryProductsRequest, options?: ConfigurationOptions): Promise<QueryResultAPIProduct> {
        return this.api.queryProducts(param.aPIQueryPayloadAPIProduct,  options).toPromise();
    }

    /**
     * Update an existing product.
     * @param param the request object
     */
    public updateProductWithHttpInfo(param: ProductsApiUpdateProductRequest, options?: ConfigurationOptions): Promise<HttpInfo<APIProduct>> {
        return this.api.updateProductWithHttpInfo(param.aPIUpdateProductPayload, param.id,  options).toPromise();
    }

    /**
     * Update an existing product.
     * @param param the request object
     */
    public updateProduct(param: ProductsApiUpdateProductRequest, options?: ConfigurationOptions): Promise<APIProduct> {
        return this.api.updateProduct(param.aPIUpdateProductPayload, param.id,  options).toPromise();
    }

}
