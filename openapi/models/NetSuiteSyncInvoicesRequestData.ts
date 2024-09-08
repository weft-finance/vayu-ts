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

import { NetSuiteSyncInvoicesRequestDataEntity } from '../models/NetSuiteSyncInvoicesRequestDataEntity';
import { NetSuiteSyncInvoicesRequestDataItem } from '../models/NetSuiteSyncInvoicesRequestDataItem';
import { HttpFile } from '../http/http';

export class NetSuiteSyncInvoicesRequestData {
    'startDate': Date;
    'endDate': Date;
    'tranDate': Date;
    'memo': string;
    'externalId': string;
    'entity': NetSuiteSyncInvoicesRequestDataEntity;
    'account'?: NetSuiteSyncInvoicesRequestDataEntity;
    'item': NetSuiteSyncInvoicesRequestDataItem;
    'discountItem'?: NetSuiteSyncInvoicesRequestDataEntity;
    'discountRate'?: number;

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
            "name": "tranDate",
            "baseName": "tranDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "memo",
            "baseName": "memo",
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
            "name": "entity",
            "baseName": "entity",
            "type": "NetSuiteSyncInvoicesRequestDataEntity",
            "format": ""
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "NetSuiteSyncInvoicesRequestDataEntity",
            "format": ""
        },
        {
            "name": "item",
            "baseName": "item",
            "type": "NetSuiteSyncInvoicesRequestDataItem",
            "format": ""
        },
        {
            "name": "discountItem",
            "baseName": "discountItem",
            "type": "NetSuiteSyncInvoicesRequestDataEntity",
            "format": ""
        },
        {
            "name": "discountRate",
            "baseName": "discountRate",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NetSuiteSyncInvoicesRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}
