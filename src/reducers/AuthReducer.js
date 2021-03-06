import { LOGIN_USER, USER_UPDATE } from '../actions/types.js';

const INITIAL_STATE = {
  listUsers: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_UPDATE: {
      return { ...state, [action.payload.prop]: action.payload.value };
    }
    case LOGIN_USER: {
      return { ...state, answer: action.payload };
    }
    default:
      return state;
    }
};
