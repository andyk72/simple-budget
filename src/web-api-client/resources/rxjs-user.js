/**
 * @Infos
 * ------
 * 
 * Application Domain Resource 'user'
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
const BASE_PATH = '/user';
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'rxjs-custom-header': 'Rxjs'
};

/**
 * 
 * @param {Object} options
 *  .user {Object}
 *      .username {String}
 *      .password {String}
 */
export const login = (options) => {
    return request.post({
        url: `${ _getResourceFullUrl(BASE_PATH) }/login`,
        headers: options.headers || DEFAULT_HEADERS,
        body: options.user
    });
};

const _getResourceFullUrl = resourcePath => {
    return `${ BASE_API_URL }${ resourcePath }`;
};