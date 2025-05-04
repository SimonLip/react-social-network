const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
        dialogs: [
          { id: 1, name: 'Stas' },
          { id: 2, name: 'Illia' },
          { id: 3, name: 'Valera' },
          { id: 4, name: 'Sasha' },
          { id: 5, name: 'Oxana' },
  
        ],
  
        messages: [
          { id: 1, message: "Hi" },
          { id: 2, message: "Homie" },
          { id: 3, message: "We coo?" },
          { id: 4, message: "Sup!" },
          { id: 5, message: "How are you?" },
  
        ],
  
        newMessageBody: " ",
  
      };

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
                getDialogs: state.getDialogs, 
                getMessages: state.getMessages,
            };

        case SEND_MESSAGE:
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: state.messages.length + 1, message: state.newMessageBody }],
                getDialogs: state.getDialogs, 
                getMessages: state.getMessages,
            };

        default:
            return state;
    }
};

export const sendMessageClick = () => ({
  type: SEND_MESSAGE
});

export const updateNewMessageBody = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body
});

export default dialogsReducer;
