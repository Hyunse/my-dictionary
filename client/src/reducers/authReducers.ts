import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SIGN_UP_FAIL, SIGN_UP_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_UP_FAIL:
    case LOGIN_FAIL:
      return { ...state, errorMessage: action.payload };
    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, authenticated: action.payload };
    case LOGOUT:
      return { ...state, authenticated: '' };
    default:
      return { ...state, errorMessage: action.payload };
  }
}
