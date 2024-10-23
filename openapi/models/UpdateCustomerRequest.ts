/**
 * Vayu API
 * The Vayu API is a RESTful API that allows you to submit events for processing and storage & manage billing related entities.           The API is secured using the Bearer Authentication scheme with JWT tokens.           To obtain a JWT token, please contact Vayu at team@withvayu.com
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dev@withvayu.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Address } from '../models/Address';
import { HttpFile } from '../http/http';

export class UpdateCustomerRequest {
    /**
    * The name of the customer
    */
    'name'?: string;
    /**
    * The external ID of the customer
    */
    'externalId'?: string;
    /**
    * The aliases of the customer used to match events to the customer.
    */
    'aliases'?: Array<string>;
    'address'?: Address;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string",
            "format": ""
        },
        {
            "name": "aliases",
            "baseName": "aliases",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "Address",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateCustomerRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

