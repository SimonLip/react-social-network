import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './ProfileForm.module.css';

const ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.profileForm}>
            <Field
                name="newPostText"
                component="textarea"
                className={classes.textarea}
                placeholder="Write something..."
            />
            <div>
                <button type="submit">Add post</button>
            </div>
        </form>
    );
};

const ProfileReduxForm = reduxForm({
    form: 'profile'
})(ProfileForm);

export default ProfileReduxForm;
