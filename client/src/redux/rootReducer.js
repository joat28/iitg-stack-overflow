import {combineReducers} from 'redux';
import authReducer from './auth/auth.reducers.js';
import alertReducer from './alert/alert.reducer.js';
import {questionReducer} from './questions/questions.reducer';
import {loadingReducer} from './loading/loading.reducers'
export default combineReducers({
    auth: authReducer,
    alert: alertReducer,
    question: questionReducer,
    loading: loadingReducer
});