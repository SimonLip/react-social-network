let state = {

  profilePage: {
    posts : [
      { id: 1, message: "It's my first post!", likesCount: 20 },
      { id: 2, message: "Hi, how are you?", likesCount: 15 }
    ],
  },

  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Stas' },
      { id: 2, name: 'Illia' },
      { id: 3, name: 'Valera' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Oxana' }
    ],

    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "Homie" },
      { id: 3, message: "We coo?" },
      { id: 4, message: "Sup!" },
      { id: 5, message: "How are you?" }
    ],
  },

};

export default state;