import dialogsReducer from "./dialogReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {

    profilePage: {
      _posts: [
        { id: 1, message: "It's my first post!", likesCount: 20 },
        { id: 2, message: "Hi, how are you?", likesCount: 15 }
      ],

      newPostText: "text",

      getPosts() {
        return this._posts;
      }
    },

    dialogsPage: {
      _dialogs: [
        { id: 1, name: 'Stas' },
        { id: 2, name: 'Illia' },
        { id: 3, name: 'Valera' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Oxana' },

      ],

      _messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Homie" },
        { id: 3, message: "We coo?" },
        { id: 4, message: "Sup!" },
        { id: 5, message: "How are you?" },

      ],

      newMessageBody: " ",

      getDialogs() {
        return this._dialogs;
      },

      getMessages() {
        return this._messages;
      },

    },

    sidebar: {
      _sidebarDialogs: [
        { id: 1, name: 'Stas' },
        { id: 2, name: 'Illia' },
        { id: 3, name: 'Valera' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Oxana' },

      ],

      getSidebarDialogs() {
        return this._sidebarDialogs;
      },
    },

  },

  _callSubscriber() {
    console.log("State changed!")
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  },

}

export const addPostCreator = () => ({
  type: ADD_POST
});

export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default store;
