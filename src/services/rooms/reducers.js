import {
  ADD_ROOM,
  ROOM_LIST,
} from './actions';

const initialState = [];

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROOM:
      return [...state, action.payload];
    case ROOM_LIST:
      return [...action.payload];
    default:
      return state;
  }
}
