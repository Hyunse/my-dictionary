import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_FAIL:
      return { ...state, errorMessage: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, authenticated: action.payload };
    case LOGOUT:
      return { ...state, authenticated: '' };
    default:
      return { ...state, errorMessage: action.payload };
  }
}
