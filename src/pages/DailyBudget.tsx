import React from 'react';

import PageTemplate from '../components/templates/PageTemplate';
import Infoable from '../components/Infoable';

import { numberToCurrency } from '../helpers/currency-helper';
import { getAmountCssClass } from '../helpers/component-gui-helper';

import './DailyBudget.css';

interface IProps {
    dailyBudget: number
}

const DailyBudget: React.FC<IProps> = (props: IProps) => {

    const dailyBudget: number = props.dailyBudget;

    return (
        <PageTemplate title="Daily Budget">
            <Infoable info="This is your daily budget right now, from today to your next income">Your daily budget is</Infoable>
            <div className={ getAmountCssClass('amountPerDay', dailyBudget) }>{ numberToCurrency(dailyBudget) }</div>
        </PageTemplate>
    );
    
};

export default DailyBudget;
