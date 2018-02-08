import { combineReducers } from 'redux';
import UserReducer from './UserReducer.js';
import AuthReducer from './AuthReducer.js';

const reducers = combineReducers({
  user: UserReducer,
  auth: AuthReducer
});

export default reducers;
