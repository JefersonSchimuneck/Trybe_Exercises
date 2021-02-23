import { createStore, combineReducers } from 'redux';
import { loginReducer, customersReducer } from '../reducers';

const rootReducer = combineReducers({
  customersReducer,
  loginReducer,
})

const store =  createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;