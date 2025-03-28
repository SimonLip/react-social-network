import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts
                profilePage={props.profilePage}
                dispatch={props.dispatch}
                newPostText={props.profilePage.newPostText}
            />
        </div>
    )
}

export default Profile;
