import { DATA_UPDATE } from '../actions/types.js';

const INITIAL_STATE = {
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_UPDATE: {
      return { ...state, [action.payload.prop]: action.payload.value };
    }
    default:
      return state;
    }
};
