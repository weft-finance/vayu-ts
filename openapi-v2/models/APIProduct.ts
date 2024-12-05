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

import { Aggregation } from '../models/Aggregation';
import { Pricing } from '../models/Pricing';
import { ProductRevision } from '../models/ProductRevision';
import { HttpFile } from '../http/http';

/**
* API Product
*/
export class APIProduct {
    /**
    * ID
    */
    'id': string;
    /**
    * Name
    */
    'name': string;
    /**
    * Event Name
    */
    'eventName': string;
    /**
    * Description
    */
    'description'?: string;
    /**
    * Account ID
    */
    'accountId': string;
    'aggregation': Aggregation;
    'pricing': Pricing;
    /**
    * Revisions
    */
    'revisions'?: Array<ProductRevision>;
    /**
    * Created At
    */
    'createdAt': string;
    /**
    * Updated At
    */
    'updatedAt': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "aggregation",
            "baseName": "aggregation",
            "type": "Aggregation",
            "format": ""
        },
        {
            "name": "pricing",
            "baseName": "pricing",
            "type": "Pricing",
            "format": ""
        },
        {
            "name": "revisions",
            "baseName": "revisions",
            "type": "Array<ProductRevision>",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string",
            "format": "date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "string",
            "format": "date"
        }    ];

    static getAttributeTypeMap() {
        return APIProduct.attributeTypeMap;
    }

    public constructor() {
    }
}

