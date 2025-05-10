import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./LoginForm.module.css";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.loginForm}>
            <div>
                <Field
                    className={classes.input}
                    placeholder="Login"
                    name="login"
                    component="input"
                />
            </div>
            <div>
                <Field
                    className={classes.input}
                    placeholder="Password"
                    name="password"
                    type="password"
                    component="input"
                />
            </div>
            <div className={classes.checkboxWrapper}>
                <Field
                    className={classes.checkbox}
                    type="checkbox"
                    name="rememberMe"
                    component="input"
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
