const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
                getDialogs: state.getDialogs, // 🔥 Зберігаємо методи
                getMessages: state.getMessages,
            };

        case SEND_MESSAGE:
            return {
                ...state,
                newMessageBody: '',
                _messages: [...state._messages, { id: state._messages.length + 1, message: state.newMessageBody }],
                getDialogs: state.getDialogs, // 🔥 Зберігаємо методи
                getMessages: state.getMessages,
            };

        default:
            return state;
    }
};

export default dialogsReducer;