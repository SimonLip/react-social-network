import React from "react";
import classes from "./NavbarFriendsItem.module.css";
import { NavLink } from "react-router-dom";

const NavbarFriendsItem = (props) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default NavbarFriendsItem;
