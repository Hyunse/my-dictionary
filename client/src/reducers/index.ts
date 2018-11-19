import { combineReducers } from 'redux';
import saveSearchReducer from './saveSearchReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  searchList: searchReducer,
  searchValue: saveSearchReducer
});

export default rootReducer;