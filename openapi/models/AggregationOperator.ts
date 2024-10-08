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
* The aggregation method defines how the events should be summed to represent a usage value.
*/
export enum AggregationOperator {
    Count = 'Count',
    Sum = 'Sum',
    Distinct = 'Distinct',
    Max = 'Max',
    Min = 'Min',
    Average = 'Average',
    First = 'First',
    Last = 'Last'
}
