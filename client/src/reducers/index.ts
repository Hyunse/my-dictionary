import { combineReducers } from 'redux';
import authReducers from './authReducers';
import saveSearchReducer from './saveSearchReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  auth: authReducers,
  searchList: searchReducer,
  searchValue: saveSearchReducer
});

export default rootReducer;