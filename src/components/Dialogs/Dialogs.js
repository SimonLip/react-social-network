import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}  />
    );

    let messagesElements = props.dialogsPage.messages.map(message =>
        <DialogMessage message={message.message} id={message.id} key={message.id} />
    );

    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessageClick();
    };

    let onNewMessageChange = (element) => {
        let body = element.target.value;
        props.updateNewMessageBody(body);
    };

    if (!props.isAuth) {
        return <Navigate to='/login' replace/>
    };

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
                        className={classes.dialogsTextarea}
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Enter your message"
                    />
                </div>
                <div>
                    <input
                        className={classes.dialogsButton}
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
