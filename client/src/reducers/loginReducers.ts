import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../actions/types';

const INITIAL_STATE = {
  logined: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_FAIL:
      return { ...state, auth: action.ok };
    case LOGIN_SUCCESS:
      return { ...state, auth: action.ok };
    case LOGOUT:
      return { ...state, auth: action.ok };
    default:
      return { ...state, auth: action.ok };
  }
}
