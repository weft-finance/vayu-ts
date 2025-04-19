export * from '../models/Address';
export * from '../models/AggregationMethod';
export * from '../models/AggregationOperator';
export * from '../models/BillingCycleStatus';
export * from '../models/BillingInterval';
export * from '../models/Condition';
export * from '../models/Contact';
export * from '../models/ContractStatus';
export * from '../models/CreateContractRequest';
export * from '../models/CreateContractResponse';
export * from '../models/CreateCustomerRequest';
export * from '../models/CreateCustomerResponse';
export * from '../models/CreateCustomerResponseCustomer';
export * from '../models/CreditLedgerEntry';
export * from '../models/Criterion';
export * from '../models/CriterionOperator';
export * from '../models/Currency';
export * from '../models/DeductCreditsRequest';
export * from '../models/DeleteContractResponse';
export * from '../models/DeleteContractResponseContract';
export * from '../models/DeleteCustomerResponse';
export * from '../models/DeleteCustomerResponseCustomer';
export * from '../models/DeleteEventResponse';
export * from '../models/DeleteEventResponseEvent';
export * from '../models/DeleteMeterResponse';
export * from '../models/DeleteMeterResponseMeter';
export * from '../models/DeletePlanResponse';
export * from '../models/DeletePlanResponsePlan';
export * from '../models/Event';
export * from '../models/EventsDryRunRequest';
export * from '../models/EventsDryRunResponse';
export * from '../models/EventsDryRunResponseObject';
export * from '../models/EventsDryRunResponseObjectEvent';
export * from '../models/EventsDryRunResponseObjectMeterWithValuesInner';
export * from '../models/Filter';
export * from '../models/FullDayPeriod';
export * from '../models/GetCommitmentReportResponse';
export * from '../models/GetContractResponse';
export * from '../models/GetContractResponseContract';
export * from '../models/GetCustomerProductsConsumptionsResponse';
export * from '../models/GetCustomerResponse';
export * from '../models/GetEventResponse';
export * from '../models/GetEventResponseEvent';
export * from '../models/GetInvoiceResponse';
export * from '../models/GetInvoiceResponseInvoice';
export * from '../models/GetMeterResponse';
export * from '../models/GetMeterResponseMeter';
export * from '../models/GetPlanResponse';
export * from '../models/GetPlanResponsePlan';
export * from '../models/GetProductConsumptionResponse';
export * from '../models/GetProductConsumptionResponseProductConsumption';
export * from '../models/GetProductsUsageReportResponse';
export * from '../models/GrantCreditsRequest';
export * from '../models/InvalidEvent';
export * from '../models/LineItem';
export * from '../models/LineItemRevenueBreakdown';
export * from '../models/ListContractsResponse';
export * from '../models/ListCreditLedgerEntriesResponse';
export * from '../models/ListCustomersResponse';
export * from '../models/ListInvoicesResponse';
export * from '../models/ListMetersResponse';
export * from '../models/ListPlansResponse';
export * from '../models/LoginRequest';
export * from '../models/LoginResponse';
export * from '../models/Meter';
export * from '../models/NetSuiteExportSalesOrderRequest';
export * from '../models/NetSuiteSyncInvoicesRequest';
export * from '../models/NetSuiteSyncInvoicesRequestData';
export * from '../models/NetSuiteSyncInvoicesRequestDataEntity';
export * from '../models/NetSuiteSyncInvoicesRequestDataItem';
export * from '../models/NetSuiteSyncInvoicesRequestDataItemItemsInner';
export * from '../models/NetSuiteSyncInvoicesResponse';
export * from '../models/NotificationEventType';
export * from '../models/PaymentTerm';
export * from '../models/PlanBillingData';
export * from '../models/PlanDuration';
export * from '../models/PlanStatus';
export * from '../models/ProductConsumption';
export * from '../models/QueryEventsResponse';
export * from '../models/QueryEventsResponseEventsInner';
export * from '../models/SendEventsRequest';
export * from '../models/SendEventsResponse';
export * from '../models/UnlimitedDuration';
export * from '../models/UpdateCustomerRequest';
export * from '../models/UpdateCustomerResponse';
export * from '../models/UpdateMeterRequest';
export * from '../models/UpdateMeterResponse';
export * from '../models/WebhookSubscribeRequest';

import { Address } from '../models/Address';
import { AggregationMethod    } from '../models/AggregationMethod';
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
import { CreditLedgerEntry     } from '../models/CreditLedgerEntry';
import { Criterion    } from '../models/Criterion';
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
import { DeletePlanResponsePlan        } from '../models/DeletePlanResponsePlan';
import { Event } from '../models/Event';
import { EventsDryRunRequest } from '../models/EventsDryRunRequest';
import { EventsDryRunResponse } from '../models/EventsDryRunResponse';
import { EventsDryRunResponseObject } from '../models/EventsDryRunResponseObject';
import { EventsDryRunResponseObjectEvent } from '../models/EventsDryRunResponseObjectEvent';
import { EventsDryRunResponseObjectMeterWithValuesInner } from '../models/EventsDryRunResponseObjectMeterWithValuesInner';
import { Filter } from '../models/Filter';
import { FullDayPeriod } from '../models/FullDayPeriod';
import { GetCommitmentReportResponse                  } from '../models/GetCommitmentReportResponse';
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
import { GetPlanResponsePlan       } from '../models/GetPlanResponsePlan';
import { GetProductConsumptionResponse } from '../models/GetProductConsumptionResponse';
import { GetProductConsumptionResponseProductConsumption } from '../models/GetProductConsumptionResponseProductConsumption';
import { GetProductsUsageReportResponse                  } from '../models/GetProductsUsageReportResponse';
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
import { NetSuiteSyncInvoicesRequest, NetSuiteSyncInvoicesRequestIntegrationTypeEnum     } from '../models/NetSuiteSyncInvoicesRequest';
import { NetSuiteSyncInvoicesRequestData } from '../models/NetSuiteSyncInvoicesRequestData';
import { NetSuiteSyncInvoicesRequestDataEntity } from '../models/NetSuiteSyncInvoicesRequestDataEntity';
import { NetSuiteSyncInvoicesRequestDataItem } from '../models/NetSuiteSyncInvoicesRequestDataItem';
import { NetSuiteSyncInvoicesRequestDataItemItemsInner } from '../models/NetSuiteSyncInvoicesRequestDataItemItemsInner';
import { NetSuiteSyncInvoicesResponse } from '../models/NetSuiteSyncInvoicesResponse';
import { NotificationEventType } from '../models/NotificationEventType';
import { PaymentTerm } from '../models/PaymentTerm';
import { PlanBillingData      } from '../models/PlanBillingData';
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
import { WebhookSubscribeRequest   } from '../models/WebhookSubscribeRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: Set<string> = new Set<string>([
    "AggregationOperator",
    "BillingCycleStatus",
    "BillingInterval",
    "ContractStatus",
    "CriterionOperator",
    "Currency",
    "NetSuiteSyncInvoicesRequestIntegrationTypeEnum",
    "NotificationEventType",
    "PaymentTerm",
    "PlanStatus",
    "UnlimitedDuration",
]);

let typeMap: {[index: string]: any} = {
    "Address": Address,
    "AggregationMethod": AggregationMethod,
    "Condition": Condition,
    "Contact": Contact,
    "CreateContractRequest": CreateContractRequest,
    "CreateContractResponse": CreateContractResponse,
    "CreateCustomerRequest": CreateCustomerRequest,
    "CreateCustomerResponse": CreateCustomerResponse,
    "CreateCustomerResponseCustomer": CreateCustomerResponseCustomer,
    "CreditLedgerEntry": CreditLedgerEntry,
    "Criterion": Criterion,
    "DeductCreditsRequest": DeductCreditsRequest,
    "DeleteContractResponse": DeleteContractResponse,
    "DeleteContractResponseContract": DeleteContractResponseContract,
    "DeleteCustomerResponse": DeleteCustomerResponse,
    "DeleteCustomerResponseCustomer": DeleteCustomerResponseCustomer,
    "DeleteEventResponse": DeleteEventResponse,
    "DeleteEventResponseEvent": DeleteEventResponseEvent,
    "DeleteMeterResponse": DeleteMeterResponse,
    "DeleteMeterResponseMeter": DeleteMeterResponseMeter,
    "DeletePlanResponse": DeletePlanResponse,
    "DeletePlanResponsePlan": DeletePlanResponsePlan,
    "Event": Event,
    "EventsDryRunRequest": EventsDryRunRequest,
    "EventsDryRunResponse": EventsDryRunResponse,
    "EventsDryRunResponseObject": EventsDryRunResponseObject,
    "EventsDryRunResponseObjectEvent": EventsDryRunResponseObjectEvent,
    "EventsDryRunResponseObjectMeterWithValuesInner": EventsDryRunResponseObjectMeterWithValuesInner,
    "Filter": Filter,
    "FullDayPeriod": FullDayPeriod,
    "GetCommitmentReportResponse": GetCommitmentReportResponse,
    "GetContractResponse": GetContractResponse,
    "GetContractResponseContract": GetContractResponseContract,
    "GetCustomerProductsConsumptionsResponse": GetCustomerProductsConsumptionsResponse,
    "GetCustomerResponse": GetCustomerResponse,
    "GetEventResponse": GetEventResponse,
    "GetEventResponseEvent": GetEventResponseEvent,
    "GetInvoiceResponse": GetInvoiceResponse,
    "GetInvoiceResponseInvoice": GetInvoiceResponseInvoice,
    "GetMeterResponse": GetMeterResponse,
    "GetMeterResponseMeter": GetMeterResponseMeter,
    "GetPlanResponse": GetPlanResponse,
    "GetPlanResponsePlan": GetPlanResponsePlan,
    "GetProductConsumptionResponse": GetProductConsumptionResponse,
    "GetProductConsumptionResponseProductConsumption": GetProductConsumptionResponseProductConsumption,
    "GetProductsUsageReportResponse": GetProductsUsageReportResponse,
    "GrantCreditsRequest": GrantCreditsRequest,
    "InvalidEvent": InvalidEvent,
    "LineItem": LineItem,
    "LineItemRevenueBreakdown": LineItemRevenueBreakdown,
    "ListContractsResponse": ListContractsResponse,
    "ListCreditLedgerEntriesResponse": ListCreditLedgerEntriesResponse,
    "ListCustomersResponse": ListCustomersResponse,
    "ListInvoicesResponse": ListInvoicesResponse,
    "ListMetersResponse": ListMetersResponse,
    "ListPlansResponse": ListPlansResponse,
    "LoginRequest": LoginRequest,
    "LoginResponse": LoginResponse,
    "Meter": Meter,
    "NetSuiteExportSalesOrderRequest": NetSuiteExportSalesOrderRequest,
    "NetSuiteSyncInvoicesRequest": NetSuiteSyncInvoicesRequest,
    "NetSuiteSyncInvoicesRequestData": NetSuiteSyncInvoicesRequestData,
    "NetSuiteSyncInvoicesRequestDataEntity": NetSuiteSyncInvoicesRequestDataEntity,
    "NetSuiteSyncInvoicesRequestDataItem": NetSuiteSyncInvoicesRequestDataItem,
    "NetSuiteSyncInvoicesRequestDataItemItemsInner": NetSuiteSyncInvoicesRequestDataItemItemsInner,
    "NetSuiteSyncInvoicesResponse": NetSuiteSyncInvoicesResponse,
    "PlanBillingData": PlanBillingData,
    "PlanDuration": PlanDuration,
    "ProductConsumption": ProductConsumption,
    "QueryEventsResponse": QueryEventsResponse,
    "QueryEventsResponseEventsInner": QueryEventsResponseEventsInner,
    "SendEventsRequest": SendEventsRequest,
    "SendEventsResponse": SendEventsResponse,
    "UpdateCustomerRequest": UpdateCustomerRequest,
    "UpdateCustomerResponse": UpdateCustomerResponse,
    "UpdateMeterRequest": UpdateMeterRequest,
    "UpdateMeterResponse": UpdateMeterResponse,
    "WebhookSubscribeRequest": WebhookSubscribeRequest,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
