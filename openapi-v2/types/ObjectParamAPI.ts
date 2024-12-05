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
    public loginWithHttpInfo(param: AuthenticationApiLoginRequest, options?: Configuration): Promise<HttpInfo<Login200Response>> {
        return this.api.loginWithHttpInfo(param.loginRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public login(param: AuthenticationApiLoginRequest, options?: Configuration): Promise<Login200Response> {
        return this.api.login(param.loginRequest,  options).toPromise();
    }

}

import { ObservableCustomersApi } from "./ObservableAPI";
import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";

export interface CustomersApiCreateCustomerRequest {
    /**
     * 
     * @type APICreateCustomerPayload
     * @memberof CustomersApicreateCustomer
     */
    aPICreateCustomerPayload: APICreateCustomerPayload
}

export interface CustomersApiDeleteCustomerRequest {
    /**
     * 
     * @type string
     * @memberof CustomersApideleteCustomer
     */
    id: string
}

export interface CustomersApiGetCustomerRequest {
    /**
     * 
     * @type string
     * @memberof CustomersApigetCustomer
     */
    id: string
}

export interface CustomersApiQueryCustomersRequest {
    /**
     * 
     * @type APIQueryPayloadAPICustomer
     * @memberof CustomersApiqueryCustomers
     */
    aPIQueryPayloadAPICustomer: APIQueryPayloadAPICustomer
}

export interface CustomersApiUpdateACustomersProductRequest {
    /**
     * 
     * @type ReviseEntitlementPayload
     * @memberof CustomersApiupdateACustomersProduct
     */
    body: ReviseEntitlementPayload
    /**
     * 
     * @type string
     * @memberof CustomersApiupdateACustomersProduct
     */
    id: string
    /**
     * 
     * @type string
     * @memberof CustomersApiupdateACustomersProduct
     */
    productId: string
}

export interface CustomersApiUpdateCustomerRequest {
    /**
     * 
     * @type APIUpdateCustomerPayload
     * @memberof CustomersApiupdateCustomer
     */
    aPIUpdateCustomerPayload: APIUpdateCustomerPayload
    /**
     * 
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
     * @param param the request object
     */
    public createCustomerWithHttpInfo(param: CustomersApiCreateCustomerRequest, options?: Configuration): Promise<HttpInfo<APICustomer>> {
        return this.api.createCustomerWithHttpInfo(param.aPICreateCustomerPayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createCustomer(param: CustomersApiCreateCustomerRequest, options?: Configuration): Promise<APICustomer> {
        return this.api.createCustomer(param.aPICreateCustomerPayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteCustomerWithHttpInfo(param: CustomersApiDeleteCustomerRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCustomerWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteCustomer(param: CustomersApiDeleteCustomerRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCustomer(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getCustomerWithHttpInfo(param: CustomersApiGetCustomerRequest, options?: Configuration): Promise<HttpInfo<APICustomer>> {
        return this.api.getCustomerWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getCustomer(param: CustomersApiGetCustomerRequest, options?: Configuration): Promise<APICustomer> {
        return this.api.getCustomer(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public queryCustomersWithHttpInfo(param: CustomersApiQueryCustomersRequest, options?: Configuration): Promise<HttpInfo<QueryResultAPICustomer>> {
        return this.api.queryCustomersWithHttpInfo(param.aPIQueryPayloadAPICustomer,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public queryCustomers(param: CustomersApiQueryCustomersRequest, options?: Configuration): Promise<QueryResultAPICustomer> {
        return this.api.queryCustomers(param.aPIQueryPayloadAPICustomer,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateACustomersProductWithHttpInfo(param: CustomersApiUpdateACustomersProductRequest, options?: Configuration): Promise<HttpInfo<APIEntitlement>> {
        return this.api.updateACustomersProductWithHttpInfo(param.body, param.id, param.productId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateACustomersProduct(param: CustomersApiUpdateACustomersProductRequest, options?: Configuration): Promise<APIEntitlement> {
        return this.api.updateACustomersProduct(param.body, param.id, param.productId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateCustomerWithHttpInfo(param: CustomersApiUpdateCustomerRequest, options?: Configuration): Promise<HttpInfo<APICustomer>> {
        return this.api.updateCustomerWithHttpInfo(param.aPIUpdateCustomerPayload, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateCustomer(param: CustomersApiUpdateCustomerRequest, options?: Configuration): Promise<APICustomer> {
        return this.api.updateCustomer(param.aPIUpdateCustomerPayload, param.id,  options).toPromise();
    }

}

import { ObservableEntitlementsApi } from "./ObservableAPI";
import { EntitlementsApiRequestFactory, EntitlementsApiResponseProcessor} from "../apis/EntitlementsApi";

export interface EntitlementsApiDeleteEntitlementRequest {
    /**
     * 
     * @type string
     * @memberof EntitlementsApideleteEntitlement
     */
    id: string
}

export interface EntitlementsApiGetEntitlementRequest {
    /**
     * 
     * @type string
     * @memberof EntitlementsApigetEntitlement
     */
    id: string
}

export interface EntitlementsApiQueryEntitlementsRequest {
    /**
     * 
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
     * @param param the request object
     */
    public deleteEntitlementWithHttpInfo(param: EntitlementsApiDeleteEntitlementRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteEntitlementWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteEntitlement(param: EntitlementsApiDeleteEntitlementRequest, options?: Configuration): Promise<void> {
        return this.api.deleteEntitlement(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getEntitlementWithHttpInfo(param: EntitlementsApiGetEntitlementRequest, options?: Configuration): Promise<HttpInfo<APIEntitlement>> {
        return this.api.getEntitlementWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getEntitlement(param: EntitlementsApiGetEntitlementRequest, options?: Configuration): Promise<APIEntitlement> {
        return this.api.getEntitlement(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public queryEntitlementsWithHttpInfo(param: EntitlementsApiQueryEntitlementsRequest, options?: Configuration): Promise<HttpInfo<QueryResultAPIEntitlement>> {
        return this.api.queryEntitlementsWithHttpInfo(param.aPIQueryPayloadAPIEntitlement,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public queryEntitlements(param: EntitlementsApiQueryEntitlementsRequest, options?: Configuration): Promise<QueryResultAPIEntitlement> {
        return this.api.queryEntitlements(param.aPIQueryPayloadAPIEntitlement,  options).toPromise();
    }

}

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiDeleteEventRequest {
    /**
     * 
     * @type string
     * @memberof EventsApideleteEvent
     */
    id: string
}

export interface EventsApiGetEventRequest {
    /**
     * 
     * @type string
     * @memberof EventsApigetEvent
     */
    id: string
}

export interface EventsApiIngestEventToTheSystemRequest {
    /**
     * 
     * @type Array&lt;APIIngestEventPayload&gt;
     * @memberof EventsApiingestEventToTheSystem
     */
    aPIIngestEventPayload: Array<APIIngestEventPayload>
}

export interface EventsApiQueryEventsRequest {
    /**
     * 
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
     * @param param the request object
     */
    public deleteEventWithHttpInfo(param: EventsApiDeleteEventRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteEventWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteEvent(param: EventsApiDeleteEventRequest, options?: Configuration): Promise<void> {
        return this.api.deleteEvent(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getEventWithHttpInfo(param: EventsApiGetEventRequest, options?: Configuration): Promise<HttpInfo<APIEvent>> {
        return this.api.getEventWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getEvent(param: EventsApiGetEventRequest, options?: Configuration): Promise<APIEvent> {
        return this.api.getEvent(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public ingestEventToTheSystemWithHttpInfo(param: EventsApiIngestEventToTheSystemRequest, options?: Configuration): Promise<HttpInfo<IngestEventToTheSystem201Response>> {
        return this.api.ingestEventToTheSystemWithHttpInfo(param.aPIIngestEventPayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public ingestEventToTheSystem(param: EventsApiIngestEventToTheSystemRequest, options?: Configuration): Promise<IngestEventToTheSystem201Response> {
        return this.api.ingestEventToTheSystem(param.aPIIngestEventPayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public queryEventsWithHttpInfo(param: EventsApiQueryEventsRequest, options?: Configuration): Promise<HttpInfo<QueryResultAPIEvent>> {
        return this.api.queryEventsWithHttpInfo(param.aPIQueryPayloadAPIEvent,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public queryEvents(param: EventsApiQueryEventsRequest, options?: Configuration): Promise<QueryResultAPIEvent> {
        return this.api.queryEvents(param.aPIQueryPayloadAPIEvent,  options).toPromise();
    }

}

import { ObservableInvoicesApi } from "./ObservableAPI";
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";

export interface InvoicesApiCalculateInvoiceRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApicalculateInvoice
     */
    id: string
}

export interface InvoicesApiCreateInvoiceRequest {
    /**
     * 
     * @type APICreateInvoicePayload
     * @memberof InvoicesApicreateInvoice
     */
    aPICreateInvoicePayload: APICreateInvoicePayload
}

export interface InvoicesApiDeleteInvoiceRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApideleteInvoice
     */
    id: string
}

export interface InvoicesApiGetInvoiceRequest {
    /**
     * 
     * @type string
     * @memberof InvoicesApigetInvoice
     */
    id: string
}

export interface InvoicesApiQueryInvoicesRequest {
    /**
     * 
     * @type APIQueryPayloadAPIInvoice
     * @memberof InvoicesApiqueryInvoices
     */
    aPIQueryPayloadAPIInvoice: APIQueryPayloadAPIInvoice
}

export interface InvoicesApiUpdateInvoiceRequest {
    /**
     * 
     * @type APIUpdateInvoicePayload
     * @memberof InvoicesApiupdateInvoice
     */
    aPIUpdateInvoicePayload: APIUpdateInvoicePayload
    /**
     * 
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
     * @param param the request object
     */
    public calculateInvoiceWithHttpInfo(param: InvoicesApiCalculateInvoiceRequest, options?: Configuration): Promise<HttpInfo<APIInvoice>> {
        return this.api.calculateInvoiceWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public calculateInvoice(param: InvoicesApiCalculateInvoiceRequest, options?: Configuration): Promise<APIInvoice> {
        return this.api.calculateInvoice(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createInvoiceWithHttpInfo(param: InvoicesApiCreateInvoiceRequest, options?: Configuration): Promise<HttpInfo<APIInvoice>> {
        return this.api.createInvoiceWithHttpInfo(param.aPICreateInvoicePayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createInvoice(param: InvoicesApiCreateInvoiceRequest, options?: Configuration): Promise<APIInvoice> {
        return this.api.createInvoice(param.aPICreateInvoicePayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteInvoiceWithHttpInfo(param: InvoicesApiDeleteInvoiceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteInvoiceWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteInvoice(param: InvoicesApiDeleteInvoiceRequest, options?: Configuration): Promise<void> {
        return this.api.deleteInvoice(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getInvoiceWithHttpInfo(param: InvoicesApiGetInvoiceRequest, options?: Configuration): Promise<HttpInfo<APIInvoice>> {
        return this.api.getInvoiceWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getInvoice(param: InvoicesApiGetInvoiceRequest, options?: Configuration): Promise<APIInvoice> {
        return this.api.getInvoice(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public queryInvoicesWithHttpInfo(param: InvoicesApiQueryInvoicesRequest, options?: Configuration): Promise<HttpInfo<QueryResultAPIInvoice>> {
        return this.api.queryInvoicesWithHttpInfo(param.aPIQueryPayloadAPIInvoice,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public queryInvoices(param: InvoicesApiQueryInvoicesRequest, options?: Configuration): Promise<QueryResultAPIInvoice> {
        return this.api.queryInvoices(param.aPIQueryPayloadAPIInvoice,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateInvoiceWithHttpInfo(param: InvoicesApiUpdateInvoiceRequest, options?: Configuration): Promise<HttpInfo<APIInvoice>> {
        return this.api.updateInvoiceWithHttpInfo(param.aPIUpdateInvoicePayload, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateInvoice(param: InvoicesApiUpdateInvoiceRequest, options?: Configuration): Promise<APIInvoice> {
        return this.api.updateInvoice(param.aPIUpdateInvoicePayload, param.id,  options).toPromise();
    }

}

import { ObservableProductsApi } from "./ObservableAPI";
import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";

export interface ProductsApiCreateProductRequest {
    /**
     * 
     * @type APICreateProductPayload
     * @memberof ProductsApicreateProduct
     */
    aPICreateProductPayload: APICreateProductPayload
}

export interface ProductsApiDeleteProductRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApideleteProduct
     */
    id: string
}

export interface ProductsApiGetProductRequest {
    /**
     * 
     * @type string
     * @memberof ProductsApigetProduct
     */
    id: string
}

export interface ProductsApiQueryProductsRequest {
    /**
     * 
     * @type APIQueryPayloadAPIProduct
     * @memberof ProductsApiqueryProducts
     */
    aPIQueryPayloadAPIProduct: APIQueryPayloadAPIProduct
}

export interface ProductsApiUpdateProductRequest {
    /**
     * 
     * @type APIUpdateProductPayload
     * @memberof ProductsApiupdateProduct
     */
    aPIUpdateProductPayload: APIUpdateProductPayload
    /**
     * 
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
     * @param param the request object
     */
    public createProductWithHttpInfo(param: ProductsApiCreateProductRequest, options?: Configuration): Promise<HttpInfo<APIProduct>> {
        return this.api.createProductWithHttpInfo(param.aPICreateProductPayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createProduct(param: ProductsApiCreateProductRequest, options?: Configuration): Promise<APIProduct> {
        return this.api.createProduct(param.aPICreateProductPayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteProductWithHttpInfo(param: ProductsApiDeleteProductRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteProductWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deleteProduct(param: ProductsApiDeleteProductRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProduct(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getProductWithHttpInfo(param: ProductsApiGetProductRequest, options?: Configuration): Promise<HttpInfo<APIProduct>> {
        return this.api.getProductWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getProduct(param: ProductsApiGetProductRequest, options?: Configuration): Promise<APIProduct> {
        return this.api.getProduct(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public queryProductsWithHttpInfo(param: ProductsApiQueryProductsRequest, options?: Configuration): Promise<HttpInfo<QueryResultAPIProduct>> {
        return this.api.queryProductsWithHttpInfo(param.aPIQueryPayloadAPIProduct,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public queryProducts(param: ProductsApiQueryProductsRequest, options?: Configuration): Promise<QueryResultAPIProduct> {
        return this.api.queryProducts(param.aPIQueryPayloadAPIProduct,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateProductWithHttpInfo(param: ProductsApiUpdateProductRequest, options?: Configuration): Promise<HttpInfo<APIProduct>> {
        return this.api.updateProductWithHttpInfo(param.aPIUpdateProductPayload, param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateProduct(param: ProductsApiUpdateProductRequest, options?: Configuration): Promise<APIProduct> {
        return this.api.updateProduct(param.aPIUpdateProductPayload, param.id,  options).toPromise();
    }

}
