/**
 * budget reducer
 */
import * as types from '../actions/actionsTypes';

import initialState from './initialState';

/**
 * [TODO]
 * @param state {any} 
 * @param action {any}
 *  .type {String}
 *  
 */
export default function budgetReducer(state = initialState.budget, action: any) {

    switch(action.type) {
        case types.BUDGET_LOAD_SUCCESS:
            return {
                ...state,
                balance: action.budget.balance,
                incomes: [...action.budget.incomes]
            }
        default:
            return state;
    }

}