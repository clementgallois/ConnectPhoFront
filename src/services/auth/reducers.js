import { LOG_IN_SUCCESS } from './actions';

const initialState = {
  loggedIn: !!sessionStorage.jwt,
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return { ...state, loggedIn: !!sessionStorage.jwt };
    default:
      return state;
  }
}
