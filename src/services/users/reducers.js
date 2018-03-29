import {
  ADD_USER,
  DEL_USER,
  USER_LIST,
} from './actions';

const initialState = [];

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    case DEL_USER:
      return state.filter(item => item._id !== action.payload._id);
    case USER_LIST:
      return [...action.payload];
    default:
      return state;
  }
}
