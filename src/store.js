import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from './services/auth/reducers';
import lobby from './services/lobby/reducers';

const rootReducer = combineReducers({
  auth,
  lobby,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
export default store;
