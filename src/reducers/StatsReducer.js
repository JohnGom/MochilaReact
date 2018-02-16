import { INFO_STATS } from '../actions/types.js';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INFO_STATS: {
      return { ...state, listData: action.payload };
    }
    default:
      return state;
    }
};
