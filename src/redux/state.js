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
      getDialogs() {
        return this._dialogs;
      },

      getMessages() {
        return this._messages;
      },

    },

  },

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  getState() {
    return this._state
  },

  dispatch(action) {

    if (action.type === 'ADD-POST') {
      let newPost = {
        id: this._state.profilePage._posts.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage._posts.push(newPost);
      this._state.profilePage.newPostText = '';

      this.rerenderEntireTree(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;

      this.rerenderEntireTree(this._state);
    }

  },

}

export default store;
