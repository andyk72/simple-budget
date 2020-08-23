import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Login from './pages/Login';
import Balance from './pages/Balance';
import DailyBudget from './pages/DailyBudget';
import NextIncome from './pages/NextIncome';

import IUser from './interfaces/IUser';

import { publicTabsRender, privateTabsRender } from './helpers/navigation-helper';

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

const mapState = (state: any) => ({user: state.user});

interface IProps {
    user: IUser
}

const App: React.FC<IProps> = (props: IProps) => {

  return (

    <IonApp>
      <IonReactRouter>
        <IonTabs>
            
          <IonRouterOutlet>
            <Route
                path="/balance"
                render={ () =>
                    <Balance />
                } exact />
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
                path="/login"
                render={ () =>
                    <Login />
                } />
            <Route
                path="/"
                render={() => <Redirect to={props.user.isAuthenticated ? "/balance" : "/login"} />} exact />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            { !props.user.isAuthenticated && publicTabsRender() }
            { props.user.isAuthenticated && privateTabsRender() }
          </IonTabBar>

        </IonTabs>
      </IonReactRouter>
    </IonApp>

  );
};

export default connect(mapState)(App);
