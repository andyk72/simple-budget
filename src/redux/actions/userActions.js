import * as types from './actionsTypes';

import * as guiActions from './guiActions';

import * as userResource from '../../web-api-client/resources/rxjs-user';

// User Login Thunk Action
/**
 * Logs the user in
 */
export function login(user) {

    return function(dispatch) {
        dispatch(guiActions.guiLoadStart());
        userResource
            .login({user})
            .subscribe({
                next: ajaxResponse => {
                    const response = ajaxResponse.response;
                    if (response.isAuthenticated) {
                        dispatch(loginSuccess(response));
                    } else {
                        dispatch(loginDenied(response));
                    }                    
                },
                error: err => {
                    console.error(err);
                    dispatch(loginFail(err));
                    // [TODO] -> handle message (toast or similar)
                    dispatch(guiActions.guiLoadEnd());
                },
                complete: () => {
                    dispatch(guiActions.guiLoadEnd())
                }
            });
    };
    
}

/**
 * @param {Object} payload
 *  .isAuthenticated {Boolean}
 *  .user {Object}
 *      .username {String}
 *      .token {String}
 */
export function loginSuccess(payload) {
    return {
        type: types.USER_LOGIN_SUCCESS,
        payload
    };
}

/**
 * @param {Object} payload
 *  .isAuthenticated {Boolean}
 *  .user {Null}
 */
export function loginDenied(payload) {
    return {
        type: types.USER_LOGIN_DENIED,
        payload
    };
}

export function loginFail(error) {
    return {
        type: types.USER_LOGIN_FAIL,
        error
    };
}