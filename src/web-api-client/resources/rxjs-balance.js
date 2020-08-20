/**
 * @Infos
 * ------
 * 
 * Application Domain Resource 'balance'
 * Wraps the low level RxJS request module.
 * 
 * @Dependencies
 * -------------
 * 
 * ../rxjs-request module (RxJS)
 * 
 */

import * as request from '../rxjs-request';

const BASE_API_URL = 'http://localhost:3000';
const BASE_PATH = '/balance';
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'rxjs-custom-header': 'Rxjs'
};

export const get = (options = {}) => {
    return request.get({
        url: _getResourceFullUrl(BASE_PATH)
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
        url: _getResourceFullUrl(BASE_PATH),
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