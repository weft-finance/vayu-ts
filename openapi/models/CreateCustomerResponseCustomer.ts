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
import { Contact } from '../models/Contact';
import { HttpFile } from '../http/http';

export class CreateCustomerResponseCustomer {
    /**
    * The name of the customer
    */
    'name': string;
    /**
    * The aliases of the customer used to match events to the customer.
    */
    'aliases'?: Array<string> | null;
    'address'?: Address;
    /**
    * The contacts of the customer. Contact marked as primary is the target for invoice sharing.
    */
    'contacts'?: Array<Contact>;
    /**
    * The external ID of the customer
    */
    'externalId'?: string;
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
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
        },
        {
            "name": "contacts",
            "baseName": "contacts",
            "type": "Array<Contact>",
            "format": ""
        },
        {
            "name": "externalId",
            "baseName": "externalId",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return CreateCustomerResponseCustomer.attributeTypeMap;
    }

    public constructor() {
    }
}

