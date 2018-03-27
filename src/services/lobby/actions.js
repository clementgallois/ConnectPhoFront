export const ADD_USER = 'ADD_USER';
export const DEL_USER = 'DEL_USER';
export const USER_LIST = 'USER_LIST';
export const INVITE_RECEIVED = 'INVITE_RECEIVED';
export const ADD_ROOM = 'ADD_ROOM';

export function addUser(payload) {
  return { type: ADD_USER, payload };
}

export function deleteUser(payload) {
  return { type: DEL_USER, payload };
}

export function createUserList(payload) {
  return { type: USER_LIST, payload };
}

export function inviteReceived(payload) {
  return { type: INVITE_RECEIVED, payload };
}


export function addRoom(payload) {
  return { type: ADD_ROOM, payload };
}
