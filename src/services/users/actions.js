export const ADD_USER = 'ADD_USER';
export const DEL_USER = 'DEL_USER';
export const USER_LIST = 'USER_LIST';

export function addUser(payload) {
  return { type: ADD_USER, payload };
}

export function deleteUser(payload) {
  return { type: DEL_USER, payload };
}

export function createUserList(payload) {
  return { type: USER_LIST, payload };
}
