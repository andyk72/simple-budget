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
 * ../request module (RxJS)
 * 
 */

import * as request from '../request';

const BASE_API_URL = 'http://localhost:3000';
const BASE_PATH = '/balance';
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'rxjs-custom-header': 'Rxjs'
};

/**
 * 
 * @param {Object} options 
 *  If two arguments are passed in, options is
 *      .resourceId {Number}
 *  If one argument is passed in, options is actually observer (will be assigned to observer's value)
 *      .next {Function}
 *      .error {Function}
 *      .complete {Function}
 * @param {Object|undefined} observer 
 *  If two arguments are passed in, observer is
 *      .next {Function}
 *      .error {Function}
 *      .complete {Function}
 *  If one argument is passed in, observer is undefined (will be assigned options' value)
 */
export const get = (options, observer) => {

    // reassign observer argument if options argument is omitted
    if (options.next) {
        observer = {...options};
    }

    request.get({
        url: _getResourceFullUrl(BASE_PATH)
    }, observer);

};

export const post = (options, observer) => {
    request.post({
        url: _getResourceFullUrl(BASE_PATH),
        headers: options.headers || DEFAULT_HEADERS,
        body: options.resource
    }, observer);
};

export const put = (options, observer) => {
    request.put({
        url: _getResourceFullUrl(BASE_PATH),
        headers: options.headers || DEFAULT_HEADERS,
        body: options.resource
    }, observer);
};

export const del = (options, observer) => {
    request.del({
        url: _getResourceFullUrl(`${ BASE_PATH }/${ options.resourceId }`),
        headers: options.headers || DEFAULT_HEADERS
    }, observer);
};

const _getResourceFullUrl = resourcePath => {
    return `${ BASE_API_URL }${ resourcePath }`;
};