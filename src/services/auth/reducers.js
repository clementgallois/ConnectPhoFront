import { LOG_IN_SUCCESS } from './actions';

const initialState = {
  session: !!sessionStorage.jwt,
};

export default function sessionReducer(state = initialState.session, action) {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return !!sessionStorage.jwt;
    default:
      return state;
  }
}
