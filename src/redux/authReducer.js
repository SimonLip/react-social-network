import { stopSubmit } from "redux-form";
import { authAPI } from "../../src/API/API";

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                const { id, email, login } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
    };
};

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    payload: isFetching
});

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Error";
                    dispatch(stopSubmit("login", { _error: message }));
                }
                dispatch(toggleIsFetching(false)); // не забудь зупинити лоадер
            });
    };
};


export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            });
    };
};

export default authReducer;