import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from './services/auth/reducers';

const rootReducer = combineReducers({
  auth,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
export default store;
