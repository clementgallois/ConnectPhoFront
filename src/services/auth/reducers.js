import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
} from './actions';

const initialState = {
  loggedIn: !!sessionStorage.jwt,
  loginError: null,
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return { ...state, loggedIn: !!sessionStorage.jwt };
    case LOG_IN_FAILURE:
      return { ...state, loginError: action.payload };
    default:
      return state;
  }
}
