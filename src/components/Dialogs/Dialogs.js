import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessages/DialogMessage';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.getDialogs().map(dialog => (
        < DialogItem className={classes.DialogItem} key={dialog.id} name={dialog.name} id={dialog.id} />
    ));

    let messagesElements = props.dialogsPage.getMessages().map(message => (
        < DialogMessage key={message.id} message={message.message} />
    ));

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={classes.messages}>
                    <div className={classes.messageItems}>
                        {messagesElements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
