import React from 'react';
import { updateNewMessageBody, sendMessageClick } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../Hocs/withAuthRedirect';
import withTopScroll from '../../Hocs/withTopScroll';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,

    }
};

export default compose (
    connect(mapStateToProps, 
        {
            sendMessageClick,
            updateNewMessageBody,
        }),
        withAuthRedirect,
        withTopScroll,
) (Dialogs);
