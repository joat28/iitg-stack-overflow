import {combineReducers} from 'redux';
import authReducer from './auth/auth.reducers.js';
import alertReducer from './alert/alert.reducer.js';

export default combineReducers({
    auth: authReducer,
    alert: alertReducer
});