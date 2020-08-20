import * as types from './actionsTypes';

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
        /*
        dispatch(guiToastShow({
            mode: 'error',
            message: error
        }));
        */
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
            }
        });
    }
    
}

/**
export function budgetLoad() {

    const errorHandler = (dispatch, error) => {
        dispatch(budgetLoadFail(error));
    };

    // [TODO] -> this must be a 2 parallel requests (balance, incomes)
    return function(dispatch) {
        balanceResource
            .get()
            .subscribe({
                next: balance => {
                    console.log('Balance Get Response ', balance);
                    dispatch(budgetLoadSuccess({
                        balance,
                        incomes:[]
                    }));
                },
                error: err => {
                    console.error(err);
                    errorHandler(dispatch, err);
                }
            });
        incomesResource
            .get()
            .subscribe({
                next: incomes => {
                    console.log('Incomes Get Response ', incomes);
                    dispatch(budgetLoadSuccess({
                        incomes,
                        balance: 10000 // [TODO] -> balanceResource.get 
                    }));
                },
                error: err => {
                    console.error(err);
                    errorHandler(dispatch, err);
                }
            });
    }
    
}
 */

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