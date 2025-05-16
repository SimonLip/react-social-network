import { stopSubmit } from "redux-form";
import { authAPI } from "../../src/API/API";

const SET_USER_DATA = 'SET-USER-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  initialized: false,
};

// Reducer

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
        isAuth: action.payload.isAuth,
      };
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
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

// Action creators

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const setInitialized = () => ({
  type: SET_INITIALIZED,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
});

// Thunks

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      } else {
        dispatch(setAuthUserData(null, null, null, false));
      }
      dispatch(setInitialized());
    });
};

export const login = (email, password, rememberMe) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  authAPI.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        const message = response.data.messages.length > 0 ? response.data.messages[0] : "Error";
        dispatch(stopSubmit("login", { _error: message }));
      }
      dispatch(toggleIsFetching(false));
    });
};

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
};

export default authReducer;
