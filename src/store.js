import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from './services/auth/reducers';
import lobby from './services/lobby/reducers';
import socket from './services/socket/reducers';
import users from './services/users/reducers';
import rooms from './services/rooms/reducers';

const rootReducer = combineReducers({
  auth,
  lobby,
  socket,
  users,
  rooms,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
export default store;
