import { combineReducers } from 'redux';
import loginReducers from './loginReducers';
import saveSearchReducer from './saveSearchReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  auth: loginReducers,
  searchList: searchReducer,
  searchValue: saveSearchReducer
});

export default rootReducer;