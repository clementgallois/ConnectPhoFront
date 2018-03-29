import io from 'socket.io-client';
import * as userActions from '../users/actions';
import * as roomActions from '../rooms/actions';
import * as lobbyActions from '../lobby/actions';

export const CREATE_SOCKET = 'CREATE_SOCKET';

export function createSocket(payload) {
  return async (dispatch) => {
    const socket = io.connect(payload, { query: `token=${sessionStorage.jwt}` });

    socket.on('USER_LIST', any => dispatch(userActions.createUserList(any)));
    socket.on('ADD_USER', any => dispatch(userActions.addUser(any)));
    socket.on('DEL_USER', any => dispatch(userActions.deleteUser(any)));
    socket.on('ROOM_LIST', any => dispatch(roomActions.createRoomList(any)));
    socket.on('ROOM_JOINED', any => dispatch(roomActions.addRoom(any)));
    socket.on('INVITE_RECEIVED', any => dispatch(lobbyActions.addInvite(any)));
    dispatch({ type: CREATE_SOCKET, payload: socket });
  };
}
