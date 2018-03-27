import {
  ADD_USER,
  DEL_USER,
  USER_LIST,
  INVITE_RECEIVED,
  ADD_ROOM,
} from './actions';

const initialState = {
  userList: [],
  invites: [],
  rooms: [],
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, userList: [...state.userList, action.payload] };
    case DEL_USER:
      return { ...state, userList: state.userList.filter(item => item._id !== action.payload._id) };
    case USER_LIST:
      return { ...state, userList: [...action.payload] };
    case INVITE_RECEIVED:
      return { ...state, invites: [...state.invites, action.payload] };
    case ADD_ROOM:
      return { ...state, rooms: [...state.rooms, action.payload] };
    default:
      return state;
  }
}
