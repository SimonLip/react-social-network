import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src="https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg"
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
