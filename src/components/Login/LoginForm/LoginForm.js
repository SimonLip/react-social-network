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
                    placeholder="Login"
                    name="login"
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
            <button className={classes.button}>Login</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginReduxForm;
