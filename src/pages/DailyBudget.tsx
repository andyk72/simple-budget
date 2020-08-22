import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as guiActions from '../redux/actions/guiActions';
import * as budgetActions from '../redux/actions/budgetActions';

import PageTemplate from '../components/templates/PageTemplate';
import Infoable from '../components/Infoable';

import { getDailyBudget } from '../helpers/budget-helper';
import { numberToCurrency } from '../helpers/currency-helper';
import { getAmountCssClass } from '../helpers/component-gui-helper';

import './DailyBudget.css';

interface IProps {
    dailyBudget: number,
    budgetLoad: () => void
}

const mapState = (state: any) => {
    return {
        dailyBudget: getDailyBudget(state.budget.balance, state.budget.incomes, new Date())
    }
};

const mapDispatch = (dispatch: any) => {
    return {
        budgetLoad: () => {
            dispatch(guiActions.guiLoadStart());
            dispatch(budgetActions.budgetLoad());
        }
    };
};

const DailyBudget: React.FC<IProps> = (props: IProps) => {

    const dailyBudget: number = props.dailyBudget;

    useEffect(() => {
        props.budgetLoad();
    }, []);

    return (
        <PageTemplate title="Daily Budget">
            <Infoable info="This is your daily budget right now, from today to your next income">Your daily budget is</Infoable>
            <div className={ getAmountCssClass('amountPerDay', dailyBudget) }>{ numberToCurrency(dailyBudget) }</div>
        </PageTemplate>
    );
    
};

export default connect(mapState, mapDispatch)(DailyBudget);
export {
    DailyBudget
}
