import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./LoginForm.module.css";
import { requiredField } from "../../../validators/validator";
import { Input, Checkbox } from "../../common/FormsControls/FormsControl";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.loginForm}>
            <div className={classes.formGroup}>
                <Field
                    placeholder="Email"
                    name="email"
                    component={Input}
                    validate={[requiredField]}
                    className={classes.inputField}
                />
            </div>
            <div className={classes.formGroup}>
                <Field
                    placeholder="Password"
                    name="password"
                    type="password"
                    component={Input}
                    validate={[requiredField]}
                    className={classes.inputField}
                />
            </div>
            <div className={classes.checkboxWrapper}>
                <Field
                    type="checkbox"
                    name="rememberMe"
                    component={Checkbox}
                    className={classes.checkboxInput}
                />
                <span className={classes.checkboxLabel}>remember me</span>
            </div>
            {props.error && (
                <div className={classes.formSummaryError}>
                    {props.error}
                </div>
            )}
            <button className={classes.button}>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginReduxForm;
