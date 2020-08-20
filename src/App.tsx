import React from 'react';

import { Redirect, Route } from 'react-router-dom';

import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, wallet, logoEuro } from 'ionicons/icons';

import Balance from './pages/Balance';
import DailyBudget from './pages/DailyBudget';
import NextIncome from './pages/NextIncome';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/simple-budget.css';

import './App.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
          
        <IonRouterOutlet>
          <Route
            path="/balance"
            render={ () =>
                <Balance />
            } />
          <Route
            path="/dailyBudget"
            render={ () =>
                <DailyBudget />
            } />
          <Route
            path="/nextIncome"
            render={ () =>
                <NextIncome />
            } />
          <Route
            path="/"
            render={() => <Redirect to="/balance" />} exact />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="balance" href="/balance">
            <IonIcon icon={logoEuro} />
            <IonLabel>Balance</IonLabel>
          </IonTabButton>
          <IonTabButton tab="dailyBudget" href="/dailyBudget">
            <IonIcon icon={wallet} />
            <IonLabel>Daily Budget</IonLabel>
          </IonTabButton>
          <IonTabButton tab="nextIncome" href="/nextIncome">
            <IonIcon icon={ellipse} />
            <IonLabel>Next Income</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
