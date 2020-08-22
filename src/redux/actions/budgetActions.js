import * as types from './actionsTypes';

import * as guiActions from './guiActions';

import { parallel } from '../../web-api-client/rxjs-request';
import * as incomesResource from '../../web-api-client/resources/rxjs-incomes';
import * as balanceResource from '../../web-api-client/resources/rxjs-balance';

// Budget Load Thunk Action
/**
 * Loads the budget:
 *  - balance
 *  - incomes
 */
export function budgetLoad() {

    const errorHandler = (dispatch, error) => {
        dispatch(budgetLoadFail(error));
    };

    return function(dispatch) {
        parallel([
            balanceResource.get(),
            incomesResource.get()
        ])
        .subscribe({
            next: budget => {
                dispatch(budgetLoadSuccess({
                    balance: budget[0].value,
                    incomes: budget[1]
                }));
            },
            error: err => {
                console.error(err);
                errorHandler(dispatch, err);
            },
            complete: () => {
                dispatch(guiActions.guiLoadEnd())
            }
        });
    }
    
}

/**
 * 
 * @param {Object} budget 
 *  .balance {Number}
 *  .incomes Object[]
 */
export function budgetLoadSuccess(budget) {
    return {
        type: types.BUDGET_LOAD_SUCCESS,
        budget
    };
}

export function budgetLoadFail(error) {
    return {
        type: types.BUDGET_LOAD_FAIL,
        error
    };
}