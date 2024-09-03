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

import { AggregationMethod } from '../models/AggregationMethod';
import { Filter } from '../models/Filter';
import { HttpFile } from '../http/http';

export class EventsDryRunResponseObjectMeterWithValuesInner {
    /**
    * The name of the meter
    */
    'name': string;
    /**
    * The name of the event that the meter is tracking.
    */
    'eventName': string;
    'aggregationMethod': AggregationMethod;
    'filter'?: Filter;
    'value': number;
    'instanceValue'?: any | null;

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
            "name": "aggregationMethod",
            "baseName": "aggregationMethod",
            "type": "AggregationMethod",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "Filter",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "instanceValue",
            "baseName": "instanceValue",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventsDryRunResponseObjectMeterWithValuesInner.attributeTypeMap;
    }

    public constructor() {
    }
}

