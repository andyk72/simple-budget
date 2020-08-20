/**
 * @Infos
 * ------
 * 
 * Application Domain Resource 'incomes'
 * Wraps the low level RxJS request module.
 * 
 * @Dependencies
 * -------------
 * 
 * ../rxjs-request module (RxJS)
 * 
 */

import config from '../../config/config';
import * as request from '../rxjs-request';

const BASE_API_URL = config.webApiServer.baseUrl;
const BASE_PATH = '/incomes';
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'rxjs-custom-header': 'Rxjs'
};

/**
 * @param {Object} options 
 *  .resourceId {Number}
 */
export const get = (options = {}) => {

    // define resourcePath based on options
    const resourcePath = (options.resourceId)
        ? `${ BASE_PATH }/${ options.resourceId }`
        : BASE_PATH;

    return request.get({
        url: _getResourceFullUrl(resourcePath)
    });

};

export const post = (options = {}) => {
    return request.post({
        url: _getResourceFullUrl(BASE_PATH),
        headers: options.headers || DEFAULT_HEADERS,
        body: options.resource
    });
};

export const put = (options = {}) => {
    return request.put({
        url: _getResourceFullUrl(`${ BASE_PATH }/${ options.resource.id }`),
        headers: options.headers || DEFAULT_HEADERS,
        body: options.resource
    });
};

export const del = (options = {}) => {
    return request.del({
        url: _getResourceFullUrl(`${ BASE_PATH }/${ options.resourceId }`),
        headers: options.headers || DEFAULT_HEADERS
    });
};

const _getResourceFullUrl = resourcePath => {
    return `${ BASE_API_URL }${ resourcePath }`;
};