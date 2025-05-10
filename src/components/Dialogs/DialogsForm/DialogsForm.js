import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./DialogsForm.module.css";

let DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    className={classes.dialogsTextarea}
                    name={"massage"}
                    component="textarea"
                    placeholder="Enter your message"
                />

                <button
                    className={classes.dialogsButton}
                    type="submit"
                >
                    Send message
                </button>
            </div>
        </form>
    );
};

const DialogReduxForm = reduxForm({
    form: 'dialogs'
})(DialogsForm);

export default DialogReduxForm;
