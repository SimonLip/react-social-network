import { profileAPI, authAPI } from "../API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';


let initialState = {
  posts: [
    { id: 1, message: "It's my first post!", likesCount: 20 },
    { id: 2, message: "Hi, how are you?", likesCount: 15 }
  ],

  newPostText: "text",
  profile: null,

};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: state.posts.length + 1, message: state.newPostText, likesCount: 0 }],
        newPostText: '',
        getPosts: state.getPosts,
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
        getPosts: state.getPosts,
      };

    case SET_USERS_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

export const addPost = () => ({
  type: ADD_POST
});

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
});

export const setUsersProfile = (profile) => ({
  type: SET_USERS_PROFILE, profile
});

export const getUserProfileThunk = (userId) => {
  return (dispatch) => {
      profileAPI.getProfile(userId).then(data => {
          dispatch(setUsersProfile(data));
      });
  };
};

export const getAuthUserIdThunk = () => {
  return (dispatch) => {
      return authAPI.me().then(response => {
          if (response.data.resultCode === 0) {
              return response.data.data.id;
          }
      });
  };
};

export default profileReducer;
