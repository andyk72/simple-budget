import { combineReducers } from 'redux';
import gui from './guiReducer';
import user from './userReducer';
import budget from './budgetReducer';

const rootReducer = combineReducers({
    gui,
    user,
    budget
});

export default rootReducer;