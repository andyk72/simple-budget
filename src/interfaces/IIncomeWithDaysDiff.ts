import IIncome from './IIncome';

export default interface IIncomeWithDaysDiff {
    income: IIncome | null;
    daysDiff: number;
}