import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../actions/types';

const INITIAL_STATE = {
  logined: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_FAIL:
      return { ...state, logined: false };
    case LOGIN_SUCCESS:
      return { ...state, logined: true };
    case LOGOUT:
      return { ...state, logined: false };
    default:
      return { ...state, logined: false };
  }
}
