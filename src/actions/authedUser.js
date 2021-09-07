import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from "types";

export function setAuthedUser(userId) {
    return {
        type: SET_AUTHED_USER,
        payload: {userId}
    }
}

export function removeAuthedUser() {
    return {
        type: REMOVE_AUTHED_USER
    }
}