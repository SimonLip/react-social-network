import React, { useEffect } from 'react';
import classes from './Header.module.css';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthUserData, toggleIsFetching } from '../../redux/authReducer';
import { authAPI } from '../../API/API';

const HeaderContainer = (props) => {
    useEffect(() => {
        props.toggleIsFetching(true);
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                const { id, email, login } = response.data.data;
                props.setAuthUserData(id, email, login);
            }
            props.toggleIsFetching(false);
        });
    }, []);

    return <Header {...props} />;
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
});

const mapDispatchToProps = {
    setAuthUserData,
    toggleIsFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
