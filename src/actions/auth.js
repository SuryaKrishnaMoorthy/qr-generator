export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';


export const userLogout = () => {
    return async dispatch({ type: USER_LOGGED_OUT});
}
