import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./DialogsForm.module.css";
import { Textarea } from "../../common/FormsControls/FormsControl";
import { requiredField, maxLengthCreator } from "../../../validators/validator";

const maxLength100 = maxLengthCreator(100);

let DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    className={classes.dialogsTextarea}
                    name={"massage"}
                    component={Textarea}
                    placeholder="Enter your message"
                    onChange={props.onNewMessageChange}
                    validate={[requiredField, maxLength100]}
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

const DialogsReduxForm = reduxForm({
    form: 'dialogs'
})(DialogsForm);

export default DialogsReduxForm;
