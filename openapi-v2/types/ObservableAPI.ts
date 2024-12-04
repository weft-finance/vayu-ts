import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { APICreateCustomerPayload } from '../models/APICreateCustomerPayload';
import { APICreateInvoicePayload } from '../models/APICreateInvoicePayload';
import { APICreateProductPayload } from '../models/APICreateProductPayload';
import { APICustomer } from '../models/APICustomer';
import { APIEvent } from '../models/APIEvent';
import { APIIngestEventPayload } from '../models/APIIngestEventPayload';
import { APIInvoice } from '../models/APIInvoice';
import { APIInvoiceBillingPeriod } from '../models/APIInvoiceBillingPeriod';
import { APIProduct } from '../models/APIProduct';
import { APIQueryPayloadAPICustomer } from '../models/APIQueryPayloadAPICustomer';
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
import { Event } from '../models/Event';
import { IngestEventToTheSystem201Response } from '../models/IngestEventToTheSystem201Response';
import { InvoiceProductBreakdown } from '../models/InvoiceProductBreakdown';
import { Login200Response } from '../models/Login200Response';
import { LoginRequest } from '../models/LoginRequest';
import { Pricing } from '../models/Pricing';
import { PricingTiersInner } from '../models/PricingTiersInner';
import { ProductBreakdown } from '../models/ProductBreakdown';
import { ProductRevision } from '../models/ProductRevision';
import { QueryResultAPICustomer } from '../models/QueryResultAPICustomer';
import { QueryResultAPIEvent } from '../models/QueryResultAPIEvent';
import { QueryResultAPIInvoice } from '../models/QueryResultAPIInvoice';
import { QueryResultAPIProduct } from '../models/QueryResultAPIProduct';
import { ReviseProductPayload } from '../models/ReviseProductPayload';
import { UpdateEventPayload } from '../models/UpdateEventPayload';

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
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
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
     * @param aPICreateCustomerPayload 
     */
    public createCustomerWithHttpInfo(aPICreateCustomerPayload: APICreateCustomerPayload, _options?: Configuration): Observable<HttpInfo<APICustomer>> {
        const requestContextPromise = this.requestFactory.createCustomer(aPICreateCustomerPayload, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param aPICreateCustomerPayload 
     */
    public createCustomer(aPICreateCustomerPayload: APICreateCustomerPayload, _options?: Configuration): Observable<APICustomer> {
        return this.createCustomerWithHttpInfo(aPICreateCustomerPayload, _options).pipe(map((apiResponse: HttpInfo<APICustomer>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public deleteCustomerWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCustomer(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public deleteCustomer(id: string, _options?: Configuration): Observable<void> {
        return this.deleteCustomerWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public getCustomerWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<APICustomer>> {
        const requestContextPromise = this.requestFactory.getCustomer(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public getCustomer(id: string, _options?: Configuration): Observable<APICustomer> {
        return this.getCustomerWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<APICustomer>) => apiResponse.data));
    }

    /**
     * @param aPIQueryPayloadAPICustomer 
     */
    public queryCustomersWithHttpInfo(aPIQueryPayloadAPICustomer: APIQueryPayloadAPICustomer, _options?: Configuration): Observable<HttpInfo<QueryResultAPICustomer>> {
        const requestContextPromise = this.requestFactory.queryCustomers(aPIQueryPayloadAPICustomer, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryCustomersWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param aPIQueryPayloadAPICustomer 
     */
    public queryCustomers(aPIQueryPayloadAPICustomer: APIQueryPayloadAPICustomer, _options?: Configuration): Observable<QueryResultAPICustomer> {
        return this.queryCustomersWithHttpInfo(aPIQueryPayloadAPICustomer, _options).pipe(map((apiResponse: HttpInfo<QueryResultAPICustomer>) => apiResponse.data));
    }

    /**
     * @param aPIUpdateCustomerPayload 
     * @param id 
     */
    public updateCustomerWithHttpInfo(aPIUpdateCustomerPayload: APIUpdateCustomerPayload, id: string, _options?: Configuration): Observable<HttpInfo<APICustomer>> {
        const requestContextPromise = this.requestFactory.updateCustomer(aPIUpdateCustomerPayload, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCustomerWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param aPIUpdateCustomerPayload 
     * @param id 
     */
    public updateCustomer(aPIUpdateCustomerPayload: APIUpdateCustomerPayload, id: string, _options?: Configuration): Observable<APICustomer> {
        return this.updateCustomerWithHttpInfo(aPIUpdateCustomerPayload, id, _options).pipe(map((apiResponse: HttpInfo<APICustomer>) => apiResponse.data));
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
     * @param id 
     */
    public deleteEventWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteEvent(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public deleteEvent(id: string, _options?: Configuration): Observable<void> {
        return this.deleteEventWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public getEventWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<APIEvent>> {
        const requestContextPromise = this.requestFactory.getEvent(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public getEvent(id: string, _options?: Configuration): Observable<APIEvent> {
        return this.getEventWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<APIEvent>) => apiResponse.data));
    }

    /**
     * @param aPIIngestEventPayload 
     */
    public ingestEventToTheSystemWithHttpInfo(aPIIngestEventPayload: Array<APIIngestEventPayload>, _options?: Configuration): Observable<HttpInfo<IngestEventToTheSystem201Response>> {
        const requestContextPromise = this.requestFactory.ingestEventToTheSystem(aPIIngestEventPayload, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.ingestEventToTheSystemWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param aPIIngestEventPayload 
     */
    public ingestEventToTheSystem(aPIIngestEventPayload: Array<APIIngestEventPayload>, _options?: Configuration): Observable<IngestEventToTheSystem201Response> {
        return this.ingestEventToTheSystemWithHttpInfo(aPIIngestEventPayload, _options).pipe(map((apiResponse: HttpInfo<IngestEventToTheSystem201Response>) => apiResponse.data));
    }

    /**
     * @param aPIQueryPayloadAPIEvent 
     */
    public queryEventsWithHttpInfo(aPIQueryPayloadAPIEvent: APIQueryPayloadAPIEvent, _options?: Configuration): Observable<HttpInfo<QueryResultAPIEvent>> {
        const requestContextPromise = this.requestFactory.queryEvents(aPIQueryPayloadAPIEvent, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param aPIQueryPayloadAPIEvent 
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
     * @param id 
     */
    public calculateInvoiceWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<APIInvoice>> {
        const requestContextPromise = this.requestFactory.calculateInvoice(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.calculateInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public calculateInvoice(id: string, _options?: Configuration): Observable<APIInvoice> {
        return this.calculateInvoiceWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<APIInvoice>) => apiResponse.data));
    }

    /**
     * @param aPICreateInvoicePayload 
     */
    public createInvoiceWithHttpInfo(aPICreateInvoicePayload: APICreateInvoicePayload, _options?: Configuration): Observable<HttpInfo<APIInvoice>> {
        const requestContextPromise = this.requestFactory.createInvoice(aPICreateInvoicePayload, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param aPICreateInvoicePayload 
     */
    public createInvoice(aPICreateInvoicePayload: APICreateInvoicePayload, _options?: Configuration): Observable<APIInvoice> {
        return this.createInvoiceWithHttpInfo(aPICreateInvoicePayload, _options).pipe(map((apiResponse: HttpInfo<APIInvoice>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public deleteInvoiceWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteInvoice(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public deleteInvoice(id: string, _options?: Configuration): Observable<void> {
        return this.deleteInvoiceWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public getInvoiceWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<APIInvoice>> {
        const requestContextPromise = this.requestFactory.getInvoice(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public getInvoice(id: string, _options?: Configuration): Observable<APIInvoice> {
        return this.getInvoiceWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<APIInvoice>) => apiResponse.data));
    }

    /**
     * @param aPIQueryPayloadAPIInvoice 
     */
    public queryInvoicesWithHttpInfo(aPIQueryPayloadAPIInvoice: APIQueryPayloadAPIInvoice, _options?: Configuration): Observable<HttpInfo<QueryResultAPIInvoice>> {
        const requestContextPromise = this.requestFactory.queryInvoices(aPIQueryPayloadAPIInvoice, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryInvoicesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param aPIQueryPayloadAPIInvoice 
     */
    public queryInvoices(aPIQueryPayloadAPIInvoice: APIQueryPayloadAPIInvoice, _options?: Configuration): Observable<QueryResultAPIInvoice> {
        return this.queryInvoicesWithHttpInfo(aPIQueryPayloadAPIInvoice, _options).pipe(map((apiResponse: HttpInfo<QueryResultAPIInvoice>) => apiResponse.data));
    }

    /**
     * @param aPIUpdateInvoicePayload 
     * @param id 
     */
    public updateInvoiceWithHttpInfo(aPIUpdateInvoicePayload: APIUpdateInvoicePayload, id: string, _options?: Configuration): Observable<HttpInfo<APIInvoice>> {
        const requestContextPromise = this.requestFactory.updateInvoice(aPIUpdateInvoicePayload, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param aPIUpdateInvoicePayload 
     * @param id 
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
     * @param aPICreateProductPayload 
     */
    public createProductWithHttpInfo(aPICreateProductPayload: APICreateProductPayload, _options?: Configuration): Observable<HttpInfo<APIProduct>> {
        const requestContextPromise = this.requestFactory.createProduct(aPICreateProductPayload, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param aPICreateProductPayload 
     */
    public createProduct(aPICreateProductPayload: APICreateProductPayload, _options?: Configuration): Observable<APIProduct> {
        return this.createProductWithHttpInfo(aPICreateProductPayload, _options).pipe(map((apiResponse: HttpInfo<APIProduct>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public deleteProductWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteProduct(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public deleteProduct(id: string, _options?: Configuration): Observable<void> {
        return this.deleteProductWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id 
     */
    public getProductWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<APIProduct>> {
        const requestContextPromise = this.requestFactory.getProduct(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id 
     */
    public getProduct(id: string, _options?: Configuration): Observable<APIProduct> {
        return this.getProductWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<APIProduct>) => apiResponse.data));
    }

    /**
     * @param aPIQueryPayloadAPIProduct 
     */
    public queryProductsWithHttpInfo(aPIQueryPayloadAPIProduct: APIQueryPayloadAPIProduct, _options?: Configuration): Observable<HttpInfo<QueryResultAPIProduct>> {
        const requestContextPromise = this.requestFactory.queryProducts(aPIQueryPayloadAPIProduct, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.queryProductsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param aPIQueryPayloadAPIProduct 
     */
    public queryProducts(aPIQueryPayloadAPIProduct: APIQueryPayloadAPIProduct, _options?: Configuration): Observable<QueryResultAPIProduct> {
        return this.queryProductsWithHttpInfo(aPIQueryPayloadAPIProduct, _options).pipe(map((apiResponse: HttpInfo<QueryResultAPIProduct>) => apiResponse.data));
    }

    /**
     * @param body 
     * @param id 
     */
    public reviseAProductWithHttpInfo(body: ReviseProductPayload, id: string, _options?: Configuration): Observable<HttpInfo<APIProduct>> {
        const requestContextPromise = this.requestFactory.reviseAProduct(body, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.reviseAProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param body 
     * @param id 
     */
    public reviseAProduct(body: ReviseProductPayload, id: string, _options?: Configuration): Observable<APIProduct> {
        return this.reviseAProductWithHttpInfo(body, id, _options).pipe(map((apiResponse: HttpInfo<APIProduct>) => apiResponse.data));
    }

    /**
     * @param aPIUpdateProductPayload 
     * @param id 
     */
    public updateProductWithHttpInfo(aPIUpdateProductPayload: APIUpdateProductPayload, id: string, _options?: Configuration): Observable<HttpInfo<APIProduct>> {
        const requestContextPromise = this.requestFactory.updateProduct(aPIUpdateProductPayload, id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param aPIUpdateProductPayload 
     * @param id 
     */
    public updateProduct(aPIUpdateProductPayload: APIUpdateProductPayload, id: string, _options?: Configuration): Observable<APIProduct> {
        return this.updateProductWithHttpInfo(aPIUpdateProductPayload, id, _options).pipe(map((apiResponse: HttpInfo<APIProduct>) => apiResponse.data));
    }

}
