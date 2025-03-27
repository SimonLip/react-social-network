import React from "react";
import classes from './NavbarFriendsList.module.css';
import NavbarFriendsItem from "./NavbarFriendsItem/NavbarFriendsItem";

const NavbarFriendsList = (props) => {

    let navbarFriends = props.state.getDialogs().map(dialog => (
        < NavbarFriendsItem className={classes.DialogItem} key={dialog.id} name={dialog.name} id={dialog.id} />
    ));

    return (
        <div className={classes.friends}>
            <div className={classes.friendsItem}>
                {navbarFriends}
            </div>
        </div>
    )
};

export default NavbarFriendsList;
