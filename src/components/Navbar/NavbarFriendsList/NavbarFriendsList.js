import React from "react";
import classes from './NavbarFriendsList.module.css';
import NavbarFriendsItem from "./NavbarFriendsItem/NavbarFriendsItem";

const NavbarFriendsList = (props) => {

    let navbarFriends = props.sidebar.getSidebarDialogs().map(dialog => (
        < NavbarFriendsItem className={classes.NavbarItem} key={dialog.id} name={dialog.name} id={dialog.id} />
    ));

    return (
        <div className={classes.navbar}>
            <div className={classes.navbarItem}>
                {navbarFriends}
            </div>
        </div>
    )
};

export default NavbarFriendsList;
