import {
  ADD_USER,
  DEL_USER,
  USER_LIST,
} from './actions';

const initialState = {
  userList: [],
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return { userList: [...state.userList, action.payload] };
    case DEL_USER:
      return { userList: state.userList.filter(item => item._id !== action.payload._id) };
    case USER_LIST:
      return { userList: [...action.payload] };
    default:
      return state;
  }
}
