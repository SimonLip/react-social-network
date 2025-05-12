import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './ProfileForm.module.css';
import { requiredField, maxLengthCreator } from '../../../validators/validator';
import { Textarea } from '../../common/FormsControls/FormsControl';

const maxLength100 = maxLengthCreator(100);

const ProfileForm = (props) => {
    const { handleSubmit, reset } = props;

    const onSubmit = (formData) => {
        props.onSubmit(formData);
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.profileForm}
        >
            <Field
                name="newPostText"
                component={Textarea}
                className={classes.profileTextarea}
                placeholder="Write something..."
                validate={[requiredField, maxLength100]}
            />
            <div>
                <button className={classes.profileButton} type="submit">Add post</button>
            </div>
        </form>
    );
};

const ProfileReduxForm = reduxForm({
    form: 'profile'
})(ProfileForm);

export default ProfileReduxForm;
