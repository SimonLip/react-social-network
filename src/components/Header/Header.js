import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../img/ava-empty.jpg';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <NavLink to='/profile'>
                <img
                    className={classes.logo}
                    src="https://www.freeiconspng.com/thumbs/logo-design/rainbow-logo-design-transparent-0.png"
                    alt="logo"
                />
            </NavLink>
            <div className={classes.loginBlock}>
                {props.isAuth ? (
                    <>
                        {props.login}
                        <img
                            src={props.profile?.photos?.large || userPhoto}
                            alt="avatar"
                            className={classes.avatar}
                        />
                    </>
                ) : (
                    <NavLink to='/login'>Login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
