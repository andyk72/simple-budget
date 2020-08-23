/**
 * user reducer
 */
import * as types from '../actions/actionsTypes';

import initialState from './initialState';

/**
 * [TODO]
 * @param state {any} 
 * @param action {any}
 */

 /**
  isAuthenticated: false,
        username: null,
        token: null
  */
export default function userReducer(state = initialState.user, action: any) {
    switch(action.type) {
        case types.USER_LOGIN_SUCCESS:
            return {
                isAuthenticated: action.payload.isAuthenticated,
                username: action.payload.user.username,
                token: action.payload.user.token
            };
        case types.USER_LOGIN_DENIED:
            return {
                isAuthenticated: false,
                username: null,
                token: null
            };
        default:
            return state;
    }
}