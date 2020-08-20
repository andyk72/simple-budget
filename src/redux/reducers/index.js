import { combineReducers } from 'redux';
import gui from './guiReducer';
import budget from './budgetReducer';

const rootReducer = combineReducers({
    gui,
    budget
});

export default rootReducer;