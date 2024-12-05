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
import { HttpFile } from '../http/http';

export class APIUpdateProductPayload {
    /**
    * Name
    */
    'name'?: string;
    /**
    * Event Name
    */
    'eventName'?: string;
    /**
    * Description
    */
    'description'?: string;
    'aggregation'?: Aggregation;
    'pricing'?: Pricing;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
        }    ];

    static getAttributeTypeMap() {
        return APIUpdateProductPayload.attributeTypeMap;
    }

    public constructor() {
    }
}

