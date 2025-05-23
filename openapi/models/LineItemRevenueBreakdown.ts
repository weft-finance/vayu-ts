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

/**
* The revenue breakdown of the line item
*/
export class LineItemRevenueBreakdown {
    'total': number;
    'subtotal': number;
    'overage': number;
    'discount': number;
    'creditsUsed': number;
    'tax': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": ""
        },
        {
            "name": "subtotal",
            "baseName": "subtotal",
            "type": "number",
            "format": ""
        },
        {
            "name": "overage",
            "baseName": "overage",
            "type": "number",
            "format": ""
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "number",
            "format": ""
        },
        {
            "name": "creditsUsed",
            "baseName": "creditsUsed",
            "type": "number",
            "format": ""
        },
        {
            "name": "tax",
            "baseName": "tax",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LineItemRevenueBreakdown.attributeTypeMap;
    }

    public constructor() {
    }
}
