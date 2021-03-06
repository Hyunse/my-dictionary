import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const store: any = createStore(
  // Reducer
  reducers,
  // Init State
  { auth: { authenticated: localStorage.getItem('token') || ''}} as any,
  // Middleware
  applyMiddleware(reduxThunk)
);

export default store;