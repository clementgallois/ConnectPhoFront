import {
  CREATE_SOCKET,
  JOIN_ROOM,
} from './actions';

const initialState = {
  socket: null,
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_SOCKET:
      return { ...state, socket: action.payload };
    case JOIN_ROOM:
      state.socket.emit('JOIN_ROOM', { room: action.payload });
      return state;
    default:
      return state;
  }
}
