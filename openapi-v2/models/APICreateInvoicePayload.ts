/**
 * 24k
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { APIInvoiceBillingPeriod } from '../models/APIInvoiceBillingPeriod';
import { HttpFile } from '../http/http';

export class APICreateInvoicePayload {
    /**
    * Name
    */
    'name': string;
    /**
    * Customer ID
    */
    'customerId': string;
    /**
    * Products
    */
    'products': Array<string>;
    'billingPeriod': APIInvoiceBillingPeriod;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerId",
            "baseName": "customerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "products",
            "baseName": "products",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "billingPeriod",
            "baseName": "billingPeriod",
            "type": "APIInvoiceBillingPeriod",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return APICreateInvoicePayload.attributeTypeMap;
    }

    public constructor() {
    }
}
