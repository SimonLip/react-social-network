import React from "react";
import classes from './Post.module.css';
import userPhoto from "../../../../img/ava-empty.jpg";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src={userPhoto}
                alt="avatar"
            />
            <div className={classes.message}>
                {props.message}
            </div>
            <div>
                <div className={classes.likesCount}>Likes: {props.likesCount}</div>
            </div>
        </div>
    );
};

export default Post;
