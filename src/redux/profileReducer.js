const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                _posts: [...state._posts, { id: state._posts.length + 1, message: state.newPostText, likesCount: 0 }],
                newPostText: '',
                getPosts: state.getPosts, // 🔥 Зберігаємо методи
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
                getPosts: state.getPosts, // 🔥 Зберігаємо методи
            };

        default:
            return state;
    }
};

export default profileReducer;
