/**
 * budget-helper module
 * 
 *  Exposes budget related logic 
 * 
 * @exports
 * 
 *  getIncome(incomes: IIncome[], incomeId: string): IIncome | null
 *  getNextIncome(incomes: IIncome[], atDate: Date): IIncomeWithDaysDiff
 *  getDailyBudget(balance: number, incomes: IIncome[], atDate: Date): number
 */

import IIncome from '../interfaces/IIncome';
import IIncomeWithDaysDiff from '../interfaces/IIncomeWithDaysDiff';
import { datesDiffByDays } from './dates-helper';

/**
 * Returns the income identified by incomeId
 * @param incomes {Iincome[]}
 * @param incomeId {String}
 * @return IIncome | null
 */
export const getIncome = (incomes: IIncome[], incomeId: string): IIncome | null => {
    const filtered = incomes.filter(income => income.id === incomeId);
    return filtered && filtered.length === 1 ? filtered[0]: null;
};

/**
 * Returns the next income Object, relative to atDate, packed with the daysDiff information, which reports the difference
 * ...in day between the income date and atDate date
 * @param {Object[]} incomes 
 * @param {Date} atDate 
 * @return {Object}
 *  .income IIncome
 *  .daysDiff number
 */
export const getNextIncome = (incomes: IIncome[], atDate: Date): IIncomeWithDaysDiff => {

    return incomes.reduce((result: IIncomeWithDaysDiff, currentIncome: IIncome): IIncomeWithDaysDiff => {

        let prevIncome: IIncome;

        // create current income data
        const currentIncomeData: IIncomeWithDaysDiff = _getIncomeData(currentIncome, atDate);

        // if this is the first iteration -> return current income data
        if (result.income === null) {
            return currentIncomeData;
        } else {
            prevIncome = result.income;
        }
        
        // create prev income data
        const prevIncomeData: IIncomeWithDaysDiff = _getIncomeData(prevIncome, atDate);

        // calculate result income data
        let incomeData: IIncomeWithDaysDiff = (prevIncomeData.daysDiff < currentIncomeData.daysDiff)
            ? prevIncomeData
            : currentIncomeData;

        return incomeData;

    }, {income: null, daysDiff: -1})
};

/**
 * Returns the daily budget, based on:
 *  1. The current balance
 *  2. The days timespan to the next income
 * @param balance {Number}
 * @param incomes {IIncome[]}
 * @param atDate {Date}
 */
export const getDailyBudget = (balance: number, incomes: IIncome[], atDate: Date): number => {
    // get next income relative to atDate
    const nextIncome:IIncomeWithDaysDiff = getNextIncome(incomes, atDate);
    // get days diff
    const daysToNextIncome: number = nextIncome.daysDiff;
    if (daysToNextIncome === -1) {
        throw('budget-helper::getDailyBudget Error => Invalid daysDiff number: cannot calculate daily budget')
    }
    // return 
    return balance/daysToNextIncome;
};

const _getIncomeData = (income: IIncome, atDate: Date): IIncomeWithDaysDiff  => {

    // get atDate month and year
    const month = atDate.getMonth();
    const year = atDate.getFullYear();

    // shift to the next month for income Date if income day is lower than atDate day
    const incomeDateMonth = (income.date.day < atDate.getDate())
        ? month + 1
        : month;

    // create income Date and days difference with atDate
    const incomeDate = new Date(year, incomeDateMonth, income.date.day);
    const daysDiff = datesDiffByDays(atDate, incomeDate);
    
    // return
    return {
        income,
        daysDiff
    };

}