import sessionApi from './api';

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export function loginSuccess() {
  return { type: LOG_IN_SUCCESS };
}

export function loginFailure(message) {
  return { type: LOG_IN_FAILURE, payload: message };
}


export function logInUser(credentials) {
  return async (dispatch) => {
    try {
      const res = await sessionApi.login(credentials);
      if (res.success) {
        sessionStorage.setItem('jwt', res.token);
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure(res.message));
      }
    } catch (error) {
      throw (error);
    }
  };
}

export function registerUser(credentials) {
  return async (dispatch) => {
    try {
      const res = await sessionApi.register(credentials);
      if (res.success) {
        sessionStorage.setItem('jwt', res.token);
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure(res.message));
      }
    } catch (error) {
      throw (error);
    }
  };
}
