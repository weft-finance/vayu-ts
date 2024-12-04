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

import { ProductBreakdown } from '../models/ProductBreakdown';
import { HttpFile } from '../http/http';

/**
* Invoice product breakdown
*/
export class InvoiceProductBreakdown {
    'timeBoundPrice'?: { [key: string]: ProductBreakdown; };
    'totalUnits': number;
    'totalPrice': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "timeBoundPrice",
            "baseName": "timeBoundPrice",
            "type": "{ [key: string]: ProductBreakdown; }",
            "format": ""
        },
        {
            "name": "totalUnits",
            "baseName": "totalUnits",
            "type": "number",
            "format": "double"
        },
        {
            "name": "totalPrice",
            "baseName": "totalPrice",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return InvoiceProductBreakdown.attributeTypeMap;
    }

    public constructor() {
    }
}

