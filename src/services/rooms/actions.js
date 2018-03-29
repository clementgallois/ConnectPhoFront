
export const ROOM_LIST = 'ROOM_LIST';
export const ADD_ROOM = 'ADD_ROOM';


export function addRoom(payload) {
  return { type: ADD_ROOM, payload };
}

export function createRoomList(payload) {
  return { type: ROOM_LIST, payload };
}
