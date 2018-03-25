import sessionApi from './api';

export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export function loginSuccess() {
  return { type: LOG_IN_SUCCESS };
}


export function logInUser(credentials) {
  return dispatch => (sessionApi.login(credentials).then((response) => {
    sessionStorage.setItem('jwt', response.token);
    dispatch(loginSuccess());
  }).catch((error) => {
    throw (error);
  })
  );
}
