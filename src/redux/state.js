const ADD_POST = 'ADD-POST';

const UPPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

const SEND_MESSAGE = "SEND-MESSAGE";

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

    if (action.type === ADD_POST) {
      let newPost = {
        id: this._state.profilePage._posts.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage._posts.push(newPost);
      this._state.profilePage.newPostText = '';

      this._callSubscriber(this._state);

    } else if (action.type === UPPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;

      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;

      this._callSubscriber(this._state);

    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody; 
      this._state.dialogsPage.newMessageBody = ''; 
      this._state.dialogsPage._messages.push({ id: 6 , message: body });

      this._callSubscriber(this._state);
    }

  },

}

export const addPostCreator = () => ({
  type: ADD_POST
});

export const updateNewPostTextCreator = (text) => ({
  type: UPPDATE_NEW_POST_TEXT, newText: text
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default store;
