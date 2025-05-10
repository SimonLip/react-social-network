import React from 'react';
import classes from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import DialogsMessage from './DialogsMessage/DialogsMessage';
import DialogReduxForm from './DialogsForm/DialogsForm';

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog =>
        <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id} />
    );

    let messagesElements = props.dialogsPage.messages.map(message =>
        <DialogsMessage message={message.message} id={message.id} key={message.id} />
    );

    const onSendMessage = (formData) => {
        props.sendMessageClick(formData.message);
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
                <DialogReduxForm onSubmit={onSendMessage} />
            </div>
        </div>
    );
};

export default Dialogs;
