import _ from 'lodash';
import { INFO_USER, USER_UPDATE } from '../actions/types.js';

const INITIAL_STATE = {
  listUsers: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_UPDATE: {
      return { ...state, [action.payload.prop]: action.payload.value };
    }
    case INFO_USER: {
      const info = [];
      _.forEach(action.payload, (value, key) => {
        info.push(value);
      });
      return { ...state, listUsers: info };
    }
    default:
      return state;
    }
};
