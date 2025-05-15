import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAuthUserData, logout } from '../../redux/authReducer';

const HeaderContainer = (props) => {
    useEffect(() => {
        props.getAuthUserData();
    }, []);

    return <Header {...props} />;
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps,
    {
        getAuthUserData,
        logout,
    }
)(HeaderContainer);
