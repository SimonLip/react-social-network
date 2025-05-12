import { profileAPI, authAPI } from "../API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 0, message: "It's my first post!", likesCount: 20 },
    { id: 1, message: "It's my first post!", likesCount: 20 },
    { id: 2, message: "Hi, how are you?", likesCount: 15 },
    { id: 3, message: "It's my first post!", likesCount: 20 },
    { id: 4, message: "Hi, how are you?", likesCount: 15 },
    { id: 5, message: "It's my first post!", likesCount: 20 },
    { id: 6, message: "Hi, how are you?", likesCount: 15 },
    { id: 7, message: "It's my first post!", likesCount: 20 },
    { id: 8, message: "Hi, how are you?", likesCount: 15 },
    { id: 9, message: "It's my first post!", likesCount: 20 },
    { id: 10, message: "Hi, how are you?", likesCount: 15 },
    { id: 11, message: "It's my first post!", likesCount: 20 },
    { id: 12, message: "Hi, how are you?", likesCount: 15 },
  ],
  newPostText: "",
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: state.posts.length + 1, message: action.text, likesCount: 0 }
        ],
      };


    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const addPost = (text) => ({
  type: ADD_POST,
  text,
});

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE,
  profile
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
});

export const getUserProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(response => {
      dispatch(setUsersProfile(response.data));
    });
  };
};

export const getAuthUserId = () => {
  return (dispatch) => {
    return authAPI.me().then(response => {
      if (response.data.resultCode === 0) {
        return response.data.data.id;
      }
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    if (!userId) return;
    profileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
