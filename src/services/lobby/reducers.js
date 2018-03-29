import {
  ADD_INVITE,
  DELETE_INVITE,
} from './actions';

const initialState = {
  invites: [],
  rooms: [],
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INVITE:
      return { ...state, invites: [...state.invites, action.payload] };
    case DELETE_INVITE:
      return { ...state, invites: state.invites.filter(item => item.room !== action.payload.room) };
    default:
      return state;
  }
}
