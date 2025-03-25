import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={classes.header}>
            <NavLink to='/profile'>
                <img
                    src="https://www.freeiconspng.com/thumbs/logo-design/rainbow-logo-design-transparent-0.png"
                    alt="logo"
                />
            </NavLink>
        </header >
    );
}

export default Header;
