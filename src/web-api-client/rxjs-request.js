/**
 * @Infos
 * ------
 * 
 *  Low level request object implementation.
 *  RxJS implementation
 * 
 * @Dependencies
 * -------------
 * 
 *  RxJS
 * 
 * @Public methods
 * ---------------
 * 
 *  @public get: (requestOptions: object) => Observable
 *  @public post: (requestOptions: object) => Observable
 *  @public put: (requestOptions: object) => Observable
 *  @public delete: (requestOptions: object) => Observable
 * 
 */
import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';

export const get = (requestOptions) => {
    return ajax
        .getJSON(requestOptions.url);
};

export const post = (requestOptions) => {
    return ajax({
        url: requestOptions.url,
        method: 'POST',
        headers: requestOptions.headers,
        body: requestOptions.body
    });
};

export const put = (requestOptions) => {
    return ajax({
        url: requestOptions.url,
        method: 'PUT',
        headers: requestOptions.headers,
        body: requestOptions.body
    });
};

export const del = (requestOptions) => {    
    return ajax({
        url: requestOptions.url,
        method: 'DELETE',
        headers: requestOptions.headers
    });    
};

export const parallel = (requests) => {
    return forkJoin(requests);
}