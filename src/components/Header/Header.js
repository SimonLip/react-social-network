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
                        <div className={classes.userLogoutWrapper}>
                            <span className={classes.userName}>
                                <NavLink
                                    to='/profile'>{props.login}
                                </NavLink>
                            </span>
                            <button
                                className={classes.logoutButton}
                                onClick={props.logout}>
                                Log out
                            </button>
                        </div>
                        <div></div>
                        <div className={classes.avatarWrapper}>
                            <NavLink to='/profile'>
                                <img
                                    src={props.profile?.photos?.large || userPhoto}
                                    alt="avatar"
                                    className={classes.avatar}
                                />
                            </NavLink>
                        </div>
                    </>
                ) : (
                    <div className={classes.login}>
                        <NavLink to='/login'>Login</NavLink>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
