export const ADD_INVITE = 'ADD_INVITE';
export const DELETE_INVITE = 'DELETE_INVITE';


export function addInvite(payload) {
  return { type: ADD_INVITE, payload };
}

export function deleteInvite(payload) {
  return { type: DELETE_INVITE, payload };
}
