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
import { Event } from '../models/Event';
import { IngestEventToTheSystem201Response } from '../models/IngestEventToTheSystem201Response';
import { InvoiceProductBreakdown } from '../models/InvoiceProductBreakdown';
import { Login200Response } from '../models/Login200Response';
import { LoginRequest } from '../models/LoginRequest';
import { Pricing } from '../models/Pricing';
import { PricingTiersInner } from '../models/PricingTiersInner';
import { ProductBreakdown } from '../models/ProductBreakdown';
import { QueryResultAPICustomer } from '../models/QueryResultAPICustomer';
import { QueryResultAPIEntitlement } from '../models/QueryResultAPIEntitlement';
import { QueryResultAPIEvent } from '../models/QueryResultAPIEvent';
import { QueryResultAPIInvoice } from '../models/QueryResultAPIInvoice';
import { QueryResultAPIProduct } from '../models/QueryResultAPIProduct';
import { ReviseEntitlementPayload } from '../models/ReviseEntitlementPayload';
import { UpdateEventPayload } from '../models/UpdateEventPayload';
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
     * @param aPICreateCustomerPayload 
     */
    public createCustomerWithHttpInfo(aPICreateCustomerPayload: APICreateCustomerPayload, _options?: Configuration): Promise<HttpInfo<APICustomer>> {
        const result = this.api.createCustomerWithHttpInfo(aPICreateCustomerPayload, _options);
        return result.toPromise();
    }

    /**
     * @param aPICreateCustomerPayload 
     */
    public createCustomer(aPICreateCustomerPayload: APICreateCustomerPayload, _options?: Configuration): Promise<APICustomer> {
        const result = this.api.createCustomer(aPICreateCustomerPayload, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deleteCustomerWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCustomerWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deleteCustomer(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCustomer(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getCustomerWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<APICustomer>> {
        const result = this.api.getCustomerWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getCustomer(id: string, _options?: Configuration): Promise<APICustomer> {
        const result = this.api.getCustomer(id, _options);
        return result.toPromise();
    }

    /**
     * @param aPIQueryPayloadAPICustomer 
     */
    public queryCustomersWithHttpInfo(aPIQueryPayloadAPICustomer: APIQueryPayloadAPICustomer, _options?: Configuration): Promise<HttpInfo<QueryResultAPICustomer>> {
        const result = this.api.queryCustomersWithHttpInfo(aPIQueryPayloadAPICustomer, _options);
        return result.toPromise();
    }

    /**
     * @param aPIQueryPayloadAPICustomer 
     */
    public queryCustomers(aPIQueryPayloadAPICustomer: APIQueryPayloadAPICustomer, _options?: Configuration): Promise<QueryResultAPICustomer> {
        const result = this.api.queryCustomers(aPIQueryPayloadAPICustomer, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     * @param id 
     * @param productId 
     */
    public updateACustomersProductWithHttpInfo(body: ReviseEntitlementPayload, id: string, productId: string, _options?: Configuration): Promise<HttpInfo<APIEntitlement>> {
        const result = this.api.updateACustomersProductWithHttpInfo(body, id, productId, _options);
        return result.toPromise();
    }

    /**
     * @param body 
     * @param id 
     * @param productId 
     */
    public updateACustomersProduct(body: ReviseEntitlementPayload, id: string, productId: string, _options?: Configuration): Promise<APIEntitlement> {
        const result = this.api.updateACustomersProduct(body, id, productId, _options);
        return result.toPromise();
    }

    /**
     * @param aPIUpdateCustomerPayload 
     * @param id 
     */
    public updateCustomerWithHttpInfo(aPIUpdateCustomerPayload: APIUpdateCustomerPayload, id: string, _options?: Configuration): Promise<HttpInfo<APICustomer>> {
        const result = this.api.updateCustomerWithHttpInfo(aPIUpdateCustomerPayload, id, _options);
        return result.toPromise();
    }

    /**
     * @param aPIUpdateCustomerPayload 
     * @param id 
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
     * @param id 
     */
    public deleteEntitlementWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteEntitlementWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deleteEntitlement(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEntitlement(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getEntitlementWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<APIEntitlement>> {
        const result = this.api.getEntitlementWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getEntitlement(id: string, _options?: Configuration): Promise<APIEntitlement> {
        const result = this.api.getEntitlement(id, _options);
        return result.toPromise();
    }

    /**
     * @param aPIQueryPayloadAPIEntitlement 
     */
    public queryEntitlementsWithHttpInfo(aPIQueryPayloadAPIEntitlement: APIQueryPayloadAPIEntitlement, _options?: Configuration): Promise<HttpInfo<QueryResultAPIEntitlement>> {
        const result = this.api.queryEntitlementsWithHttpInfo(aPIQueryPayloadAPIEntitlement, _options);
        return result.toPromise();
    }

    /**
     * @param aPIQueryPayloadAPIEntitlement 
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
     * @param id 
     */
    public deleteEventWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteEventWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deleteEvent(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteEvent(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getEventWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<APIEvent>> {
        const result = this.api.getEventWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getEvent(id: string, _options?: Configuration): Promise<APIEvent> {
        const result = this.api.getEvent(id, _options);
        return result.toPromise();
    }

    /**
     * @param aPIIngestEventPayload 
     */
    public ingestEventToTheSystemWithHttpInfo(aPIIngestEventPayload: Array<APIIngestEventPayload>, _options?: Configuration): Promise<HttpInfo<IngestEventToTheSystem201Response>> {
        const result = this.api.ingestEventToTheSystemWithHttpInfo(aPIIngestEventPayload, _options);
        return result.toPromise();
    }

    /**
     * @param aPIIngestEventPayload 
     */
    public ingestEventToTheSystem(aPIIngestEventPayload: Array<APIIngestEventPayload>, _options?: Configuration): Promise<IngestEventToTheSystem201Response> {
        const result = this.api.ingestEventToTheSystem(aPIIngestEventPayload, _options);
        return result.toPromise();
    }

    /**
     * @param aPIQueryPayloadAPIEvent 
     */
    public queryEventsWithHttpInfo(aPIQueryPayloadAPIEvent: APIQueryPayloadAPIEvent, _options?: Configuration): Promise<HttpInfo<QueryResultAPIEvent>> {
        const result = this.api.queryEventsWithHttpInfo(aPIQueryPayloadAPIEvent, _options);
        return result.toPromise();
    }

    /**
     * @param aPIQueryPayloadAPIEvent 
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
     * @param id 
     */
    public calculateInvoiceWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<APIInvoice>> {
        const result = this.api.calculateInvoiceWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public calculateInvoice(id: string, _options?: Configuration): Promise<APIInvoice> {
        const result = this.api.calculateInvoice(id, _options);
        return result.toPromise();
    }

    /**
     * @param aPICreateInvoicePayload 
     */
    public createInvoiceWithHttpInfo(aPICreateInvoicePayload: APICreateInvoicePayload, _options?: Configuration): Promise<HttpInfo<APIInvoice>> {
        const result = this.api.createInvoiceWithHttpInfo(aPICreateInvoicePayload, _options);
        return result.toPromise();
    }

    /**
     * @param aPICreateInvoicePayload 
     */
    public createInvoice(aPICreateInvoicePayload: APICreateInvoicePayload, _options?: Configuration): Promise<APIInvoice> {
        const result = this.api.createInvoice(aPICreateInvoicePayload, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deleteInvoiceWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteInvoiceWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deleteInvoice(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteInvoice(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getInvoiceWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<APIInvoice>> {
        const result = this.api.getInvoiceWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getInvoice(id: string, _options?: Configuration): Promise<APIInvoice> {
        const result = this.api.getInvoice(id, _options);
        return result.toPromise();
    }

    /**
     * @param aPIQueryPayloadAPIInvoice 
     */
    public queryInvoicesWithHttpInfo(aPIQueryPayloadAPIInvoice: APIQueryPayloadAPIInvoice, _options?: Configuration): Promise<HttpInfo<QueryResultAPIInvoice>> {
        const result = this.api.queryInvoicesWithHttpInfo(aPIQueryPayloadAPIInvoice, _options);
        return result.toPromise();
    }

    /**
     * @param aPIQueryPayloadAPIInvoice 
     */
    public queryInvoices(aPIQueryPayloadAPIInvoice: APIQueryPayloadAPIInvoice, _options?: Configuration): Promise<QueryResultAPIInvoice> {
        const result = this.api.queryInvoices(aPIQueryPayloadAPIInvoice, _options);
        return result.toPromise();
    }

    /**
     * @param aPIUpdateInvoicePayload 
     * @param id 
     */
    public updateInvoiceWithHttpInfo(aPIUpdateInvoicePayload: APIUpdateInvoicePayload, id: string, _options?: Configuration): Promise<HttpInfo<APIInvoice>> {
        const result = this.api.updateInvoiceWithHttpInfo(aPIUpdateInvoicePayload, id, _options);
        return result.toPromise();
    }

    /**
     * @param aPIUpdateInvoicePayload 
     * @param id 
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
     * @param aPICreateProductPayload 
     */
    public createProductWithHttpInfo(aPICreateProductPayload: APICreateProductPayload, _options?: Configuration): Promise<HttpInfo<APIProduct>> {
        const result = this.api.createProductWithHttpInfo(aPICreateProductPayload, _options);
        return result.toPromise();
    }

    /**
     * @param aPICreateProductPayload 
     */
    public createProduct(aPICreateProductPayload: APICreateProductPayload, _options?: Configuration): Promise<APIProduct> {
        const result = this.api.createProduct(aPICreateProductPayload, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deleteProductWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteProductWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public deleteProduct(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProduct(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getProductWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<APIProduct>> {
        const result = this.api.getProductWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public getProduct(id: string, _options?: Configuration): Promise<APIProduct> {
        const result = this.api.getProduct(id, _options);
        return result.toPromise();
    }

    /**
     * @param aPIQueryPayloadAPIProduct 
     */
    public queryProductsWithHttpInfo(aPIQueryPayloadAPIProduct: APIQueryPayloadAPIProduct, _options?: Configuration): Promise<HttpInfo<QueryResultAPIProduct>> {
        const result = this.api.queryProductsWithHttpInfo(aPIQueryPayloadAPIProduct, _options);
        return result.toPromise();
    }

    /**
     * @param aPIQueryPayloadAPIProduct 
     */
    public queryProducts(aPIQueryPayloadAPIProduct: APIQueryPayloadAPIProduct, _options?: Configuration): Promise<QueryResultAPIProduct> {
        const result = this.api.queryProducts(aPIQueryPayloadAPIProduct, _options);
        return result.toPromise();
    }

    /**
     * @param aPIUpdateProductPayload 
     * @param id 
     */
    public updateProductWithHttpInfo(aPIUpdateProductPayload: APIUpdateProductPayload, id: string, _options?: Configuration): Promise<HttpInfo<APIProduct>> {
        const result = this.api.updateProductWithHttpInfo(aPIUpdateProductPayload, id, _options);
        return result.toPromise();
    }

    /**
     * @param aPIUpdateProductPayload 
     * @param id 
     */
    public updateProduct(aPIUpdateProductPayload: APIUpdateProductPayload, id: string, _options?: Configuration): Promise<APIProduct> {
        const result = this.api.updateProduct(aPIUpdateProductPayload, id, _options);
        return result.toPromise();
    }


}



