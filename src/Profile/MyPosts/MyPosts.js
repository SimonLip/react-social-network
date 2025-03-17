import React from "react";
import classes from './MyPosts.module.css';
import Posts from "../Post/Post";
import ProfileButton from "../ProfileButton/ProfileButton";

const MyPosts = () => {
    return (
        <div className={classes.content}>
            <div>My posts</div>
            <ProfileButton />
            <Posts message='Hi, how are you?'/>
            <Posts message="It's my 1st post"/>
        </div>
    )
}

export default MyPosts;
