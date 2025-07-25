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

import { ProductConsumption } from '../models/ProductConsumption';
import { HttpFile } from '../http/http';

export class GetCustomerProductsConsumptionsByAliasResponse {
    'productsConsumptions': Array<ProductConsumption>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productsConsumptions",
            "baseName": "productsConsumptions",
            "type": "Array<ProductConsumption>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetCustomerProductsConsumptionsByAliasResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
