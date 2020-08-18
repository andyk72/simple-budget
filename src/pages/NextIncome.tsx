import React, { useEffect } from 'react';

import PageTemplate from '../components/templates/PageTemplate';
import Infoable from '../components/Infoable';

import { numberToCurrency } from '../helpers/currency-helper';
import { getAmountCssClass } from '../helpers/component-gui-helper';

import IIncomeWithDaysdiff from '../interfaces/IIncomeWithDaysDiff';

import './NextIncome.css';

interface IProps {
    nextIncome: IIncomeWithDaysdiff
}

const NextIncome: React.FC<IProps> = (props: IProps) => {

    const nextIncome: IIncomeWithDaysdiff = props.nextIncome;
    const nextIncomeAmount: number | undefined = nextIncome.income?.amount;
    const nextIncomeDaysDiff: number = nextIncome.daysDiff;

    return (
        <PageTemplate title="Next Income">
            <Infoable info="This is your next income">Your next income</Infoable>
            <div className={ getAmountCssClass('nextIncome', nextIncomeAmount!) }>+ { numberToCurrency(nextIncomeAmount) }</div>
            <div>will increase your balance within</div>
            <div className="sb-date">{ nextIncomeDaysDiff } days</div>
        </PageTemplate>
    );
    
};

export default NextIncome;
