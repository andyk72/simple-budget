import { logIn, logoEuro, wallet, ellipse } from 'ionicons/icons';

export default {
    webApiServer: {
        baseUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3333'
            : 'https://simple-budget-web-api-server.herokuapp.com'
    },
    navigation: {
        tabs: {
            public: [
                {
                    id: 'login',
                    label: 'Login',
                    icon: logIn
                }
            ],
            private: [
                {
                    id: 'balance',
                    label: 'Balance',
                    icon: logoEuro
                },
                {
                    id: 'dailyBudget',
                    label: 'Daily Budget',
                    icon: wallet
                },
                {
                    id: 'nextIncome',
                    label: 'Next Income',
                    icon: ellipse
                }
            ]

        }
    }
}