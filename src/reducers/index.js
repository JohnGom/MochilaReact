import { combineReducers } from 'redux';
import UserReducer from './UserReducer.js';
import AuthReducer from './AuthReducer.js';
import NotificationReducer from './NotificationReducer.js';
import StatsReducer from './StatsReducer.js';

const reducers = combineReducers({
  user: UserReducer,
  auth: AuthReducer,
  notif: NotificationReducer,
  stats: StatsReducer
});

export default reducers;
