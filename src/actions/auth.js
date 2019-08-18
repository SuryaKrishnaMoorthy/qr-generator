export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export const userLoginSuccess = (user) => {
    return (dispatch) => {
        try{
            dispatch({ type: USER_LOGIN_SUCCESS, payload: user})
        } catch(err) {
            dispatch({ type: USER_LOGIN_FAILED, payload: err })
        }
    }
}

export const userLogout = (logout) => {
    return (dispatch) => dispatch({ type: USER_LOGGED_OUT})
}