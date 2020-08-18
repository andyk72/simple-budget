import IIncome from '../interfaces/IIncome';

export const data = {
    balance: 1200,
    incomes: [
        {
            id: 'jairo',
            date: {
                day: 4
            },
            amount: 850
        },
        {
            id: 'amtek',
            date: {
                day: 10
            },
            amount: 1750
        }
    ]
};

export const getBalance = (): number => {
    return data.balance;
};

export const getIncomes = (): IIncome[] => {
    return data.incomes;
};