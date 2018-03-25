import sessionApi from './api';

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export function loginSuccess() {
  return { type: LOG_IN_SUCCESS };
}


export function logInUser(credentials) {
  return async (dispatch) => {
    try {
      const res = await sessionApi.login(credentials);
      sessionStorage.setItem('jwt', res.token);
      dispatch(loginSuccess());
    } catch (error) {
      throw (error);
    }
  };
}
