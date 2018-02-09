import { INFO_USER } from '../actions/types.js';

const INITIAL_STATE = {

};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INFO_USER:
      return { ...state, listUsers: action.payload };
    default:
      return state;
    }
};
