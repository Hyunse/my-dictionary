import { combineReducers } from 'redux';
import loginReducers from './loginReducers';
import saveSearchReducer from './saveSearchReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  login: loginReducers,
  searchList: searchReducer,
  searchValue: saveSearchReducer
});

export default rootReducer;