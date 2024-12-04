export * from '../models/APICreateCustomerPayload';
export * from '../models/APICreateInvoicePayload';
export * from '../models/APICreateProductPayload';
export * from '../models/APICustomer';
export * from '../models/APIEvent';
export * from '../models/APIIngestEventPayload';
export * from '../models/APIInvoice';
export * from '../models/APIInvoiceBillingPeriod';
export * from '../models/APIProduct';
export * from '../models/APIQueryPayloadAPICustomer';
export * from '../models/APIQueryPayloadAPIEvent';
export * from '../models/APIQueryPayloadAPIInvoice';
export * from '../models/APIQueryPayloadAPIProduct';
export * from '../models/APIUpdateCustomerPayload';
export * from '../models/APIUpdateInvoicePayload';
export * from '../models/APIUpdateProductPayload';
export * from '../models/Aggregation';
export * from '../models/AggregationMethods';
export * from '../models/Condition';
export * from '../models/Criterion';
export * from '../models/CriterionOperators';
export * from '../models/CriterionValue';
export * from '../models/Event';
export * from '../models/IngestEventToTheSystem201Response';
export * from '../models/InvoiceProductBreakdown';
export * from '../models/Login200Response';
export * from '../models/LoginRequest';
export * from '../models/Pricing';
export * from '../models/PricingTiersInner';
export * from '../models/ProductBreakdown';
export * from '../models/ProductRevision';
export * from '../models/QueryResultAPICustomer';
export * from '../models/QueryResultAPIEvent';
export * from '../models/QueryResultAPIInvoice';
export * from '../models/QueryResultAPIProduct';
export * from '../models/ReviseProductPayload';
export * from '../models/UpdateEventPayload';

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
import { Aggregation    } from '../models/Aggregation';
import { AggregationMethods } from '../models/AggregationMethods';
import { Condition } from '../models/Condition';
import { Criterion    } from '../models/Criterion';
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
    "AggregationMethods",
    "CriterionOperators",
]);

let typeMap: {[index: string]: any} = {
    "APICreateCustomerPayload": APICreateCustomerPayload,
    "APICreateInvoicePayload": APICreateInvoicePayload,
    "APICreateProductPayload": APICreateProductPayload,
    "APICustomer": APICustomer,
    "APIEvent": APIEvent,
    "APIIngestEventPayload": APIIngestEventPayload,
    "APIInvoice": APIInvoice,
    "APIInvoiceBillingPeriod": APIInvoiceBillingPeriod,
    "APIProduct": APIProduct,
    "APIQueryPayloadAPICustomer": APIQueryPayloadAPICustomer,
    "APIQueryPayloadAPIEvent": APIQueryPayloadAPIEvent,
    "APIQueryPayloadAPIInvoice": APIQueryPayloadAPIInvoice,
    "APIQueryPayloadAPIProduct": APIQueryPayloadAPIProduct,
    "APIUpdateCustomerPayload": APIUpdateCustomerPayload,
    "APIUpdateInvoicePayload": APIUpdateInvoicePayload,
    "APIUpdateProductPayload": APIUpdateProductPayload,
    "Aggregation": Aggregation,
    "Condition": Condition,
    "Criterion": Criterion,
    "CriterionValue": CriterionValue,
    "Event": Event,
    "IngestEventToTheSystem201Response": IngestEventToTheSystem201Response,
    "InvoiceProductBreakdown": InvoiceProductBreakdown,
    "Login200Response": Login200Response,
    "LoginRequest": LoginRequest,
    "Pricing": Pricing,
    "PricingTiersInner": PricingTiersInner,
    "ProductBreakdown": ProductBreakdown,
    "ProductRevision": ProductRevision,
    "QueryResultAPICustomer": QueryResultAPICustomer,
    "QueryResultAPIEvent": QueryResultAPIEvent,
    "QueryResultAPIInvoice": QueryResultAPIInvoice,
    "QueryResultAPIProduct": QueryResultAPIProduct,
    "ReviseProductPayload": ReviseProductPayload,
    "UpdateEventPayload": UpdateEventPayload,
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
    const [type, subtype] = mimeType.split('/');
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
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
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

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
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
        return mediaType.split(";")[0].trim().toLowerCase();
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

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

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
