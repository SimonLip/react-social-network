import React from "react";
import classes from "./DialogsMessage.module.css";

const DialogMessage = (props) => {

    return (
        <div>
            <div className={classes.dialogMessage}>
                {props.message}
            </div>
            {/* <textarea
                placeholder="Enter your message"
            />
            <input
                type="button"
                value="Send message"
            /> */}
        </div>
    )
}

export default DialogMessage;
