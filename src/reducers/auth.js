import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGGED_OUT } from "../actions/auth";

const INITIAL_STATE = {
    userName: null,
    error: null
}

export default(state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case USER_LOGIN_SUCCESS:
            return { ...state, userName: action.payload }
        case USER_LOGIN_FAILED:
            return { ...state, userName: null, error: action.payload }
        case USER_LOGGED_OUT:
            return {...state, userName: null}
        default:
            return state;
    }
}