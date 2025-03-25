import React from "react";
import classes from "./DialogMessage.module.css";

const DialogMessage = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div>
            <div className={classes.dialog}>{props.message}</div>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Send</button>
        </div>
    )
}

export default DialogMessage;
