import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../actions/types';

const INITIAL_STATE = {
  logined: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_FAIL:
      return { ...state, logined: false };
    case LOGIN_SUCCESS:
      localStorage.setItem('jwt', action.data);
      return { ...state, logined: true };
    case LOGOUT:
      localStorage.removeItem('jwt');
      return { ...state, logined: false };
    default:
      return { ...state, logined: false };
  }
}
