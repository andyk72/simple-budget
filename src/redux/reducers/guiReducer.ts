/**
 * gui reducer
 */
import * as types from '../actions/actionsTypes';

import initialState from './initialState';

/**
 * [TODO]
 * @param state {any} 
 * @param action {any}
 */
export default function guiReducer(state = initialState.gui, action: any) {
    switch(action.type) {
        case types.GUI_LOAD_START:
            return {
                loading: true
            };
        case types.GUI_LOAD_END:
            return {
                loading: false
            };
        default:
            return state;
    }
}