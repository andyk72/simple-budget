import React from 'react';

import PageTemplate from '../components/templates/PageTemplate';
import Infoable from '../components/Infoable';

import { numberToCurrency } from '../helpers/currency-helper';
import { getAmountCssClass } from '../helpers/component-gui-helper';

import './Balance.css';

interface IProps {
    balance: number
}

const Balance: React.FC<IProps> = (props: IProps) => {

    const balance: number = props.balance;

    return (
        <PageTemplate title="Balance">
            <Infoable info="This is your money availability right now">Your balance is</Infoable>
            <div className={ getAmountCssClass('balance', balance) }>{ numberToCurrency(balance) }</div>
        </PageTemplate>
    );
    
};

export default Balance;
