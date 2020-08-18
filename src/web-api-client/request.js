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
 *  @public get(requestOptions, observer)
 *  @public post(requestOptions, observer)
 *  @public put(requestOptions, observer)
 *  @public delete(requestOptions, observer)
 * 
 */
import { ajax } from 'rxjs/ajax';

export const get = (requestOptions, observer) => {
    ajax
        .getJSON(requestOptions.url)
        .subscribe(observer);
};

export const post = (requestOptions, observer) => {
    ajax({
        url: requestOptions.url,
        method: 'POST',
        headers: requestOptions.headers,
        body: requestOptions.body
    })
    .subscribe(observer);
};

export const put = (requestOptions, observer) => {
    ajax({
        url: requestOptions.url,
        method: 'PUT',
        headers: requestOptions.headers,
        body: requestOptions.body
    })
    .subscribe(observer);
};

export const del = (requestOptions, observer) => {    
    ajax({
        url: requestOptions.url,
        method: 'DELETE',
        headers: requestOptions.headers
    })
    .subscribe(observer);    
};