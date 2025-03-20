import React from "react";
import classes from "./ProfileInfo.module.css";
import { NavLink } from "react-router-dom";

const ProfileInfo = (props) => {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="Snow" />
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
