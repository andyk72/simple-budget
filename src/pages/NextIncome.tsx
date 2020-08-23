import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as guiActions from '../redux/actions/guiActions';
import * as budgetActions from '../redux/actions/budgetActions';

import PageTemplate from '../components/templates/PageTemplate';
import Infoable from '../components/Infoable';
import Unauthorized from '../components/Unauthorized';

import { getNextIncome } from '../helpers/budget-helper';
import { numberToCurrency } from '../helpers/currency-helper';
import { getAmountCssClass } from '../helpers/component-gui-helper';

import IUser from '../interfaces/IUser';

import IIncomeWithDaysdiff from '../interfaces/IIncomeWithDaysDiff';

import './NextIncome.css';

interface IProps {
    nextIncome: IIncomeWithDaysdiff,
    user: IUser,
    budgetLoad: () => void
}

const mapState = (state: any) => {
    return {
        user: state.user,
        nextIncome: getNextIncome(state.budget.incomes, new Date())
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

const NextIncome: React.FC<IProps> = (props: IProps) => {

    const nextIncome: IIncomeWithDaysdiff = props.nextIncome;
    const nextIncomeAmount: number | undefined = nextIncome.income?.amount;
    const nextIncomeDaysDiff: number = nextIncome.daysDiff;

    useEffect(() => {
        props.budgetLoad();
    }, []);

    return (
        <PageTemplate title="Next Income">
            {props.user.isAuthenticated ?
                nextIncome.income ? (
                    <React.Fragment>
                        <Infoable info="This is your next income">Your next income</Infoable>
                        <div className={ getAmountCssClass('nextIncome', nextIncomeAmount!) }>+ { numberToCurrency(nextIncomeAmount) }</div>
                        <div>will increase your balance within</div>
                        <div className="sb-date">{ nextIncomeDaysDiff } days</div>
                    </React.Fragment>
                ) : (
                    <div className="sb-red">You have no scheduled incomes.</div>
                )
            : (
                <Unauthorized />
            )
            }
        </PageTemplate>
    );
    
};

export default connect(mapState, mapDispatch)(NextIncome);
export {
    NextIncome
}
