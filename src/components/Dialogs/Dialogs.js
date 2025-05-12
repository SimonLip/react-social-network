import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import DialogsMessage from './DialogsMessage/DialogsMessage';
import DialogsReduxForm from './DialogsForm/DialogsForm';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialogs =>
        <DialogsItem name={dialogs.name} id={dialogs.id} key={dialogs.id} />
    );

    let messagesElements = props.dialogsPage.messages.map(message =>
        <DialogsMessage message={message.message} id={message.id} key={message.id} />
    );

    const onSendMessage = (formData) => {
        props.sendMessageClick(formData.message);
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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
                <DialogsReduxForm
                    onSubmit={onSendMessage}
                    onNewMessageChange={onNewMessageChange}
                />
            </div>
        </div>
    );
};

export default Dialogs;
