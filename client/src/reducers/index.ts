import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  searchList: searchReducer
});

export default rootReducer;