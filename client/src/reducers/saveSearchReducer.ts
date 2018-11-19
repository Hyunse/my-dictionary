import { SAVE_VALUE } from '../actions/types';

const INITIAL_STATE = '';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_VALUE:
      return action.payload;
    default:
      return state;
  }
}
