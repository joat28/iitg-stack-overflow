import {combineReducers} from 'redux';
import authReducer from './auth/auth.reducers.js';
import alertReducer from './alert/alert.reducer.js';
import {questionReducer} from './questions/questions.reducer';

export default combineReducers({
    auth: authReducer,
    alert: alertReducer,
    question: questionReducer
});