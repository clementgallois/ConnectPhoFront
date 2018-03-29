import { CREATE_SOCKET } from './actions';

const initialState = {
  socket: null,
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_SOCKET:
      return { ...state, socket: action.payload };
    default:
      return state;
  }
}
