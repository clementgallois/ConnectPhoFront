import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from './services/auth/reducers';
import invites from './services/invites/reducers';
import socket from './services/socket/reducers';
import users from './services/users/reducers';
import rooms from './services/rooms/reducers';

const rootReducer = combineReducers({
  auth,
  invites,
  socket,
  users,
  rooms,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);
export default store;
