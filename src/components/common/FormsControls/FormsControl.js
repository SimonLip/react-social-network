import React from "react";
import styles from './FormsControl.module.css';

export const FormControl = ({ input, meta, children, ...props }) => {
    const hasError = meta && meta.touched && meta.error;

    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            <div>
                {children}
            </div>
            {hasError && <span className={styles.errorMessage}>{meta.error}</span>}
        </div>
    );
};

export const Input = ({ input, meta, ...props }) => {
    return (
        <FormControl {...props} className={styles.input} meta={meta}>
            <input {...input} {...props} />
        </FormControl>
    );
};

export const Textarea = ({ input, meta, ...props }) => {
    return (
        <FormControl {...props} className={styles.textarea} meta={meta}>
            <textarea {...input} {...props} />
        </FormControl>
    );
};

export const Checkbox = ({ input, meta, label, ...props }) => {
    return (
        <FormControl {...props} className={styles.checkboxWrapper} meta={meta}>
            <input type="checkbox" {...input} {...props} className={styles.checkboxInput} />
            <span className={styles.checkboxLabel}>{label}</span>
        </FormControl>
    );
};
