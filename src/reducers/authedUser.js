import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from "types";

export default function authedUserReducer(authedUser = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER: return action.payload.userId
        case REMOVE_AUTHED_USER: return null
        default: return authedUser
    }
}