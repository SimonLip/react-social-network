import React from "react";
import classes from "./ProfileInfo.module.css";
import Loader from "../../Loader/Loader";
import userPhoto from "../../../img/ava-empty.jpg";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Loader />;
    }

    return (
        <div className={classes.content}>
            <div>
                <img
                    className={classes.headerImage}
                    src="https://www.w3schools.com/howto/img_snow_wide.jpg"
                    alt="Snow"
                />
            </div>
            <div className={classes.descriptionBlock}>
                {props.profile.photos && props.profile.photos.large ? (
                    <img 
                        src={props.profile.photos.large} 
                        alt="Profile" 
                    />
                ) : (
                    <img 
                        src={userPhoto} 
                        alt="no avatar" 
                        className={classes.noAvatar} 
                    />
                )}
                <div className={classes.userName}>
                    {props.profile.fullName || "User Name"}
                </div>
                <div className={classes.userDescription}>
                    {props.profile.aboutMe || "No description available"}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
