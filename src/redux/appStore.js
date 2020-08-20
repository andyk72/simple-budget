import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

let appStore = null;

export default () => {
    return appStore;
};

export const configureStore = (initialState) => {
    const composeEhnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    appStore = createStore(
        rootReducer,
        initialState,
        composeEhnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())) // warn us if we mutate state
    );
    return appStore;
};