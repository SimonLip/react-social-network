const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
        posts: [
          { id: 1, message: "It's my first post!", likesCount: 20 },
          { id: 2, message: "Hi, how are you?", likesCount: 15 }
        ],
  
        newPostText: "text",

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

        default:
            return state;
    }
};

export const addPostCreator = () => ({
  type: ADD_POST
});

export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
});

export default profileReducer;
