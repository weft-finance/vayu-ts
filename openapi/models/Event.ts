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

import { HttpFile } from '../http/http';

export class Event {
    /**
    * The distinctive label assigned to an event, serving as a critical identifier for categorizing and pricing events within the system\'s backend infrastructure.
    */
    'name': string;
    /**
    * The temporal marker denoting the exact moment of event occurrence. The timestamp is formatted as an ISO 8601 string and is expressed in Coordinated Universal Time (UTC). i.e. YYYY-MM-DDTHH:MM:SS.SSSZ
    */
    'timestamp': Date;
    /**
    * A pseudonymous or otherwise obfuscated identifier uniquely assigned to each customer.
    */
    'customerAlias': string;
    /**
    * A universally unique identifier (UUID) or other form of high-entropy string serving as an immutable reference for each event entry.
    */
    'ref': string;
    /**
    * A schema-less JSON object encapsulating miscellaneous attributes and metrics associated with the event.
    */
    'data'?: { [key: string]: any | null; } | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "customerAlias",
            "baseName": "customerAlias",
            "type": "string",
            "format": ""
        },
        {
            "name": "ref",
            "baseName": "ref",
            "type": "string",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "{ [key: string]: any | null; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Event.attributeTypeMap;
    }

    public constructor() {
    }
}

