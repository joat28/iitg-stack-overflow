import {combineReducers} from 'redux';
import authReducer from './auth/auth.reducers.js';

export default combineReducers({
    auth: authReducer
});