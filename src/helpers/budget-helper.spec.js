import { data } from '../mock-data/mock-data';
import { getNextIncome, getDailyBudget } from './budget-helper';

describe('budget-helper module', () => {

    it('getNextIncome() should return 8 days to "jairo" income for 2020-07-27 date', () => {
        const incomes = data.incomes;
        const atDate = new Date('2020-07-27');
        const nextIncome = getNextIncome(incomes, atDate);
        const expected = {
            id: 'jairo',
            daysDiff: 8
        };
        expect(nextIncome.income.id).toEqual(expected.id);
        expect(nextIncome.daysDiff).toEqual(expected.daysDiff);
    });

    it('getNextIncome() should return 5 days to "amtek" income for 2020-08-05 date', () => {
        const incomes = data.incomes;
        const atDate = new Date('2020-08-05');
        const nextIncome = getNextIncome(incomes, atDate);
        const expected = {
            id: 'amtek',
            daysDiff: 5
        };
        expect(nextIncome.income.id).toEqual(expected.id);
        expect(nextIncome.daysDiff).toEqual(expected.daysDiff);
    });

    it('getDailyBudget() should return 150 for 2020-07-27 date', () => {
        const balance = data.balance;
        const incomes = data.incomes;
        const atDate = new Date('2020-07-27');
        const dailyBudget = getDailyBudget(balance, incomes, atDate);
        const expected = 150;
        expect(dailyBudget).toEqual(expected);
    });

    it('getDailyBudget() returns 0 if balance === 0 or incomes === []', () => {
        const balance = 0;
        const incomes = [];
        const atDate = new Date('2020-07-27');
        const dailyBudget = getDailyBudget(balance, incomes, atDate);
        const expected = 0;
        expect(dailyBudget).toEqual(expected);
    });    

});