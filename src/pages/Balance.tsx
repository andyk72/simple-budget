import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as guiActions from '../redux/actions/guiActions';
import * as budgetActions from '../redux/actions/budgetActions';

import PageTemplate from '../components/templates/PageTemplate';
import Infoable from '../components/Infoable';
import Unauthorized from '../components/Unauthorized';

import { numberToCurrency } from '../helpers/currency-helper';
import { getAmountCssClass } from '../helpers/component-gui-helper';

import IUser from '../interfaces/IUser';

import './Balance.css';

interface IProps {
    balance: number,
    user: IUser,
    budgetLoad: () => void
}

const mapState = (state: any) => {
    return {
        user: state.user,
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
            {props.user.isAuthenticated ? (
                <React.Fragment>
                    <Infoable info="This is your money availability right now">Your balance is</Infoable>
                    <div className={ getAmountCssClass('balance', balance) }>{ numberToCurrency(balance) }</div>
                </React.Fragment>
            ) : (
                <Unauthorized />
            )
            }
        </PageTemplate>
    );
};

export default connect(mapState, mapDispatch)(Balance);
export {
    Balance
}
