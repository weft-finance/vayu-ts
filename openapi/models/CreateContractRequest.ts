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

export class CreateContractRequest {
    /**
    * The start date of the contract
    */
    'startDate': Date;
    /**
    * The end date of the contract
    */
    'endDate'?: Date;
    /**
    * The id of the customer that the contract is associated with
    */
    'customerId': string;
    /**
    * The id of the plan that the contract is associated with
    */
    'planId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "customerId",
            "baseName": "customerId",
            "type": "string",
            "format": ""
        },
        {
            "name": "planId",
            "baseName": "planId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateContractRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

