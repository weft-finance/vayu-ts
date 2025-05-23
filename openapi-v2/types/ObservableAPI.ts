import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor} from "../apis/AuthenticationApi";
export class ObservableAuthenticationApi {
    private requestFactory: AuthenticationApiRequestFactory;
    private responseProcessor: AuthenticationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthenticationApiRequestFactory,
        responseProcessor?: AuthenticationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationApiResponseProcessor();
    }

    /**
     * @param loginRequest
     */
    public loginWithHttpInfo(loginRequest: LoginRequest, _options?: Configuration): Observable<HttpInfo<Login200Response>> {
        const requestContextPromise = this.requestFactory.login(loginRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.loginWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param loginRequest
     */
    public login(loginRequest: LoginRequest, _options?: Configuration): Observable<Login200Response> {
        return this.loginWithHttpInfo(loginRequest, _options).pipe(map((apiResponse: HttpInfo<Login200Response>) => apiResponse.data));
    }

}

import { CustomersApiRequestFactory, CustomersApiResponseProcessor} from "../apis/CustomersApi";
export class ObservableCustomersApi {
    private requestFactory: CustomersApiRequestFactory;
    private responseProcessor: CustomersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CustomersApiRequestFactory,
        responseProcessor?: CustomersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CustomersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CustomersApiResponseProcessor();
    }

    /**
     * Create a new customer.
     * @param aPICreateCustomerPayload - The details of the customer to create.
     */
    public createCustomerWithHttpInfo(aPICreateCustomerPayload: APICreateCustomerPayload, _options?: Configuration): Observable<HttpInfo<APICustomer>> {
        const requestContextPromise = this.requestFactory.createCustomer(aPICreateCustomerPayload, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new customer.
     * @param aPICreateCustomerPayload - The details of the customer to create.
     */
    public createCustomer(aPICreateCustomerPayload: APICreateCustomerPayload, _options?: Configuration): Observable<APICustomer> {
        return this.createCustomerWithHttpInfo(aPICreateCustomerPayload, _options).pipe(map((apiResponse: HttpInfo<APICustomer>) => apiResponse.data));
    }

    /**
     * Delete a customer by ID.
     * @param id - The ID of the customer to delete.
     */
    public deleteCustomerWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCustomer(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a customer by ID.
     * @param id - The ID of the customer to delete.
     */
    public deleteCustomer(id: string, _options?: Configuration): Observable<void> {
        return this.deleteCustomerWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a single customer by ID.
     * @param id - The ID of the customer to fetch.
     */
    public getCustomerWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<APICustomer>> {
        const requestContextPromise = this.requestFactory.getCustomer(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a single customer by ID.
     * @param id - The ID of the customer to fetch.
     */
    public getCustomer(id: string, _options?: Configuration): Observable<APICustomer> {
        return this.getCustomerWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<APICustomer>) => apiResponse.data));
    }

    /**
     * Query customers based on filters and pagination.
     * @param aPIQueryPayloadAPICustomer - The query filters and pagination options.
     */
    public queryCustomersWithHttpInfo(aPIQueryPayloadAPICustomer: APIQueryPayloadAPICustomer, _options?: Configuration): Observable<HttpInfo<QueryResultAPICustomer>> {
        const requestContextPromise = this.requestFactory.queryCustomers(aPIQueryPayloadAPICustomer, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryCustomersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Query customers based on filters and pagination.
     * @param aPIQueryPayloadAPICustomer - The query filters and pagination options.
     */
    public queryCustomers(aPIQueryPayloadAPICustomer: APIQueryPayloadAPICustomer, _options?: Configuration): Observable<QueryResultAPICustomer> {
        return this.queryCustomersWithHttpInfo(aPIQueryPayloadAPICustomer, _options).pipe(map((apiResponse: HttpInfo<QueryResultAPICustomer>) => apiResponse.data));
    }

    /**
     * Revise a customer\'s product.
     * @param body - The details of the revision to apply.
     * @param id - The ID of the customer to revise.
     * @param productId - The ID of the product to revise.
     */
    public updateACustomersProductWithHttpInfo(body: ReviseEntitlementPayload, id: string, productId: string, _options?: Configuration): Observable<HttpInfo<APIEntitlement>> {
        const requestContextPromise = this.requestFactory.updateACustomersProduct(body, id, productId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateACustomersProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Revise a customer\'s product.
     * @param body - The details of the revision to apply.
     * @param id - The ID of the customer to revise.
     * @param productId - The ID of the product to revise.
     */
    public updateACustomersProduct(body: ReviseEntitlementPayload, id: string, productId: string, _options?: Configuration): Observable<APIEntitlement> {
        return this.updateACustomersProductWithHttpInfo(body, id, productId, _options).pipe(map((apiResponse: HttpInfo<APIEntitlement>) => apiResponse.data));
    }

    /**
     * Update an existing customer.
     * @param aPIUpdateCustomerPayload - The updated details of the customer.
     * @param id - The ID of the customer to update.
     */
    public updateCustomerWithHttpInfo(aPIUpdateCustomerPayload: APIUpdateCustomerPayload, id: string, _options?: Configuration): Observable<HttpInfo<APICustomer>> {
        const requestContextPromise = this.requestFactory.updateCustomer(aPIUpdateCustomerPayload, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing customer.
     * @param aPIUpdateCustomerPayload - The updated details of the customer.
     * @param id - The ID of the customer to update.
     */
    public updateCustomer(aPIUpdateCustomerPayload: APIUpdateCustomerPayload, id: string, _options?: Configuration): Observable<APICustomer> {
        return this.updateCustomerWithHttpInfo(aPIUpdateCustomerPayload, id, _options).pipe(map((apiResponse: HttpInfo<APICustomer>) => apiResponse.data));
    }

}

import { EntitlementsApiRequestFactory, EntitlementsApiResponseProcessor} from "../apis/EntitlementsApi";
export class ObservableEntitlementsApi {
    private requestFactory: EntitlementsApiRequestFactory;
    private responseProcessor: EntitlementsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EntitlementsApiRequestFactory,
        responseProcessor?: EntitlementsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EntitlementsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EntitlementsApiResponseProcessor();
    }

    /**
     * Delete an entitlement by ID.
     * @param id - The ID of the entitlement to delete.
     */
    public deleteEntitlementWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteEntitlement(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEntitlementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an entitlement by ID.
     * @param id - The ID of the entitlement to delete.
     */
    public deleteEntitlement(id: string, _options?: Configuration): Observable<void> {
        return this.deleteEntitlementWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a single entitlement by ID.
     * @param id - The ID of the entitlement to fetch.
     */
    public getEntitlementWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<APIEntitlement>> {
        const requestContextPromise = this.requestFactory.getEntitlement(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEntitlementWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a single entitlement by ID.
     * @param id - The ID of the entitlement to fetch.
     */
    public getEntitlement(id: string, _options?: Configuration): Observable<APIEntitlement> {
        return this.getEntitlementWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<APIEntitlement>) => apiResponse.data));
    }

    /**
     * Query entitlements based on filters and pagination.
     * @param aPIQueryPayloadAPIEntitlement - The query filters and pagination options.
     */
    public queryEntitlementsWithHttpInfo(aPIQueryPayloadAPIEntitlement: APIQueryPayloadAPIEntitlement, _options?: Configuration): Observable<HttpInfo<QueryResultAPIEntitlement>> {
        const requestContextPromise = this.requestFactory.queryEntitlements(aPIQueryPayloadAPIEntitlement, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryEntitlementsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Query entitlements based on filters and pagination.
     * @param aPIQueryPayloadAPIEntitlement - The query filters and pagination options.
     */
    public queryEntitlements(aPIQueryPayloadAPIEntitlement: APIQueryPayloadAPIEntitlement, _options?: Configuration): Observable<QueryResultAPIEntitlement> {
        return this.queryEntitlementsWithHttpInfo(aPIQueryPayloadAPIEntitlement, _options).pipe(map((apiResponse: HttpInfo<QueryResultAPIEntitlement>) => apiResponse.data));
    }

}

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class ObservableEventsApi {
    private requestFactory: EventsApiRequestFactory;
    private responseProcessor: EventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApiResponseProcessor();
    }

    /**
     * Delete an event by ID.
     * @param id - The ID of the event to delete.
     */
    public deleteEventWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteEvent(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an event by ID.
     * @param id - The ID of the event to delete.
     */
    public deleteEvent(id: string, _options?: Configuration): Observable<void> {
        return this.deleteEventWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a single event by ID.
     * @param id - The ID of the event to fetch.
     */
    public getEventWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<APIEvent>> {
        const requestContextPromise = this.requestFactory.getEvent(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a single event by ID.
     * @param id - The ID of the event to fetch.
     */
    public getEvent(id: string, _options?: Configuration): Observable<APIEvent> {
        return this.getEventWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<APIEvent>) => apiResponse.data));
    }

    /**
     * Ingest events to the system
     * @param aPIIngestEventPayload - The events to ingest
     */
    public ingestEventToTheSystemWithHttpInfo(aPIIngestEventPayload: Array<APIIngestEventPayload>, _options?: Configuration): Observable<HttpInfo<IngestEventToTheSystem201Response>> {
        const requestContextPromise = this.requestFactory.ingestEventToTheSystem(aPIIngestEventPayload, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.ingestEventToTheSystemWithHttpInfo(rsp)));
            }));
    }

    /**
     * Ingest events to the system
     * @param aPIIngestEventPayload - The events to ingest
     */
    public ingestEventToTheSystem(aPIIngestEventPayload: Array<APIIngestEventPayload>, _options?: Configuration): Observable<IngestEventToTheSystem201Response> {
        return this.ingestEventToTheSystemWithHttpInfo(aPIIngestEventPayload, _options).pipe(map((apiResponse: HttpInfo<IngestEventToTheSystem201Response>) => apiResponse.data));
    }

    /**
     * Query events based on filters and pagination.
     * @param aPIQueryPayloadAPIEvent - The query filters and pagination options.
     */
    public queryEventsWithHttpInfo(aPIQueryPayloadAPIEvent: APIQueryPayloadAPIEvent, _options?: Configuration): Observable<HttpInfo<QueryResultAPIEvent>> {
        const requestContextPromise = this.requestFactory.queryEvents(aPIQueryPayloadAPIEvent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Query events based on filters and pagination.
     * @param aPIQueryPayloadAPIEvent - The query filters and pagination options.
     */
    public queryEvents(aPIQueryPayloadAPIEvent: APIQueryPayloadAPIEvent, _options?: Configuration): Observable<QueryResultAPIEvent> {
        return this.queryEventsWithHttpInfo(aPIQueryPayloadAPIEvent, _options).pipe(map((apiResponse: HttpInfo<QueryResultAPIEvent>) => apiResponse.data));
    }

}

import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";
export class ObservableInvoicesApi {
    private requestFactory: InvoicesApiRequestFactory;
    private responseProcessor: InvoicesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoicesApiRequestFactory,
        responseProcessor?: InvoicesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InvoicesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InvoicesApiResponseProcessor();
    }

    /**
     * Calculate the total of an invoice.
     * @param id - The ID of the invoice to calculate.
     */
    public calculateInvoiceWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<APIInvoice>> {
        const requestContextPromise = this.requestFactory.calculateInvoice(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.calculateInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Calculate the total of an invoice.
     * @param id - The ID of the invoice to calculate.
     */
    public calculateInvoice(id: string, _options?: Configuration): Observable<APIInvoice> {
        return this.calculateInvoiceWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<APIInvoice>) => apiResponse.data));
    }

    /**
     * Create a new invoice.
     * @param aPICreateInvoicePayload - The details of the invoice to create.
     */
    public createInvoiceWithHttpInfo(aPICreateInvoicePayload: APICreateInvoicePayload, _options?: Configuration): Observable<HttpInfo<APIInvoice>> {
        const requestContextPromise = this.requestFactory.createInvoice(aPICreateInvoicePayload, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new invoice.
     * @param aPICreateInvoicePayload - The details of the invoice to create.
     */
    public createInvoice(aPICreateInvoicePayload: APICreateInvoicePayload, _options?: Configuration): Observable<APIInvoice> {
        return this.createInvoiceWithHttpInfo(aPICreateInvoicePayload, _options).pipe(map((apiResponse: HttpInfo<APIInvoice>) => apiResponse.data));
    }

    /**
     * Delete an invoice by ID.
     * @param id - The ID of the invoice to delete.
     */
    public deleteInvoiceWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteInvoice(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an invoice by ID.
     * @param id - The ID of the invoice to delete.
     */
    public deleteInvoice(id: string, _options?: Configuration): Observable<void> {
        return this.deleteInvoiceWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a single invoice by ID.
     * @param id - The ID of the invoice to fetch.
     */
    public getInvoiceWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<APIInvoice>> {
        const requestContextPromise = this.requestFactory.getInvoice(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a single invoice by ID.
     * @param id - The ID of the invoice to fetch.
     */
    public getInvoice(id: string, _options?: Configuration): Observable<APIInvoice> {
        return this.getInvoiceWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<APIInvoice>) => apiResponse.data));
    }

    /**
     * Query invoices based on filters and pagination.
     * @param aPIQueryPayloadAPIInvoice - The query filters and pagination options.
     */
    public queryInvoicesWithHttpInfo(aPIQueryPayloadAPIInvoice: APIQueryPayloadAPIInvoice, _options?: Configuration): Observable<HttpInfo<QueryResultAPIInvoice>> {
        const requestContextPromise = this.requestFactory.queryInvoices(aPIQueryPayloadAPIInvoice, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryInvoicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Query invoices based on filters and pagination.
     * @param aPIQueryPayloadAPIInvoice - The query filters and pagination options.
     */
    public queryInvoices(aPIQueryPayloadAPIInvoice: APIQueryPayloadAPIInvoice, _options?: Configuration): Observable<QueryResultAPIInvoice> {
        return this.queryInvoicesWithHttpInfo(aPIQueryPayloadAPIInvoice, _options).pipe(map((apiResponse: HttpInfo<QueryResultAPIInvoice>) => apiResponse.data));
    }

    /**
     * Update an existing invoice.
     * @param aPIUpdateInvoicePayload - The updated details of the invoice.
     * @param id - The ID of the invoice to update.
     */
    public updateInvoiceWithHttpInfo(aPIUpdateInvoicePayload: APIUpdateInvoicePayload, id: string, _options?: Configuration): Observable<HttpInfo<APIInvoice>> {
        const requestContextPromise = this.requestFactory.updateInvoice(aPIUpdateInvoicePayload, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing invoice.
     * @param aPIUpdateInvoicePayload - The updated details of the invoice.
     * @param id - The ID of the invoice to update.
     */
    public updateInvoice(aPIUpdateInvoicePayload: APIUpdateInvoicePayload, id: string, _options?: Configuration): Observable<APIInvoice> {
        return this.updateInvoiceWithHttpInfo(aPIUpdateInvoicePayload, id, _options).pipe(map((apiResponse: HttpInfo<APIInvoice>) => apiResponse.data));
    }

}

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class ObservableProductsApi {
    private requestFactory: ProductsApiRequestFactory;
    private responseProcessor: ProductsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsApiResponseProcessor();
    }

    /**
     * Create a new product.
     * @param aPICreateProductPayload - The details of the product to create.
     */
    public createProductWithHttpInfo(aPICreateProductPayload: APICreateProductPayload, _options?: Configuration): Observable<HttpInfo<APIProduct>> {
        const requestContextPromise = this.requestFactory.createProduct(aPICreateProductPayload, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new product.
     * @param aPICreateProductPayload - The details of the product to create.
     */
    public createProduct(aPICreateProductPayload: APICreateProductPayload, _options?: Configuration): Observable<APIProduct> {
        return this.createProductWithHttpInfo(aPICreateProductPayload, _options).pipe(map((apiResponse: HttpInfo<APIProduct>) => apiResponse.data));
    }

    /**
     * Delete a product by ID.
     * @param id - The ID of the product to delete.
     */
    public deleteProductWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteProduct(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a product by ID.
     * @param id - The ID of the product to delete.
     */
    public deleteProduct(id: string, _options?: Configuration): Observable<void> {
        return this.deleteProductWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a single product by ID.
     * @param id - The ID of the product to fetch.
     */
    public getProductWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<APIProduct>> {
        const requestContextPromise = this.requestFactory.getProduct(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a single product by ID.
     * @param id - The ID of the product to fetch.
     */
    public getProduct(id: string, _options?: Configuration): Observable<APIProduct> {
        return this.getProductWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<APIProduct>) => apiResponse.data));
    }

    /**
     * Query products based on filters and pagination.
     * @param aPIQueryPayloadAPIProduct - The query filters and pagination details.
     */
    public queryProductsWithHttpInfo(aPIQueryPayloadAPIProduct: APIQueryPayloadAPIProduct, _options?: Configuration): Observable<HttpInfo<QueryResultAPIProduct>> {
        const requestContextPromise = this.requestFactory.queryProducts(aPIQueryPayloadAPIProduct, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryProductsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Query products based on filters and pagination.
     * @param aPIQueryPayloadAPIProduct - The query filters and pagination details.
     */
    public queryProducts(aPIQueryPayloadAPIProduct: APIQueryPayloadAPIProduct, _options?: Configuration): Observable<QueryResultAPIProduct> {
        return this.queryProductsWithHttpInfo(aPIQueryPayloadAPIProduct, _options).pipe(map((apiResponse: HttpInfo<QueryResultAPIProduct>) => apiResponse.data));
    }

    /**
     * Update an existing product.
     * @param aPIUpdateProductPayload - The updated details of the product.
     * @param id - The ID of the product to update.
     */
    public updateProductWithHttpInfo(aPIUpdateProductPayload: APIUpdateProductPayload, id: string, _options?: Configuration): Observable<HttpInfo<APIProduct>> {
        const requestContextPromise = this.requestFactory.updateProduct(aPIUpdateProductPayload, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update an existing product.
     * @param aPIUpdateProductPayload - The updated details of the product.
     * @param id - The ID of the product to update.
     */
    public updateProduct(aPIUpdateProductPayload: APIUpdateProductPayload, id: string, _options?: Configuration): Observable<APIProduct> {
        return this.updateProductWithHttpInfo(aPIUpdateProductPayload, id, _options).pipe(map((apiResponse: HttpInfo<APIProduct>) => apiResponse.data));
    }

}
