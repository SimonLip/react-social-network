import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./Post/Post";
import Avatar from "./Avatar/Avatar";
import ImgForDelete from "./ImgForDelete/ImgForDelate";

const Profile = () => {
    return (
        <div>
            <ImgForDelete />
            <Avatar />
            <MyPosts />
        </div>
    )
}

export default Profile;
