import React from 'react';
import { updateNewMessageBody, sendMessageClick } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
};

const DialogsContainer = connect(mapStateToProps, 
    {
        sendMessageClick,
        updateNewMessageBody,
    }
)
    (Dialogs);

export default DialogsContainer;
