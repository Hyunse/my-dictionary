import { API_ERROR, API_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  data: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case API_ERROR:
      return { ...state, errorMessage: action.payload };
    case API_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
