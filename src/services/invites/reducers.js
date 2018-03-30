import {
  ADD_INVITE,
  DELETE_INVITE,
} from './actions';

const initialState = [];

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_INVITE:
      return [...state, action.payload];
    case DELETE_INVITE:
      return state.filter(item => item._id !== action.payload);
    default:
      return state;
  }
}
