import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.content}>
            <div className={classes.item}>
            <img src="https://i0.wp.com/antennadaily.ru/wp-content/uploads/2020/01/photo-1515238152791-8216bfdf89a7.jpeg?fit=1052%2C700&ssl=1" alt="avatar" className={classes.img} />
                <div>{props.message}</div>
                <div>Like</div>
            </div>
        </div>
    )
}

export default Post;
