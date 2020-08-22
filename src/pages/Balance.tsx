import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as guiActions from '../redux/actions/guiActions';
import * as budgetActions from '../redux/actions/budgetActions';

import PageTemplate from '../components/templates/PageTemplate';
import Infoable from '../components/Infoable';

import { numberToCurrency } from '../helpers/currency-helper';
import { getAmountCssClass } from '../helpers/component-gui-helper';

import './Balance.css';

interface IProps {
    balance: number,
    budgetLoad: () => void
}

const mapState = (state: any) => {
    return {
        balance: state.budget.balance
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

const Balance: React.FC<IProps> = (props: IProps) => {

    const balance: number = props.balance;

    useEffect(() => {
        props.budgetLoad();
    }, []);

    return (
        <PageTemplate title="Balance">
            <Infoable info="This is your money availability right now">Your balance is</Infoable>
            <div className={ getAmountCssClass('balance', balance) }>{ numberToCurrency(balance) }</div>
        </PageTemplate>
    );
    
};

export default connect(mapState, mapDispatch)(Balance);
export {
    Balance
}
