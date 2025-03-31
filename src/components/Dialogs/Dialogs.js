import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.getDialogs().map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} />
    );

    let messagesElements = state.getMessages().map(message =>
        <DialogMessage message={message.message} />
    );

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (element) => {
        let body = element.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Enter your message"
                    />
                </div>
                <div>
                    <input
                        type="button"
                        onClick={onSendMessageClick}
                        value="Send message"
                    />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
