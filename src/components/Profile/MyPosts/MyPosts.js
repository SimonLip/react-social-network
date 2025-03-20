import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.postData.map(post => (
        <Post key={post.id} message={post.message} likesCount={post.l}/>
    ));

    return (
        <div className={classes.content}>
            <h3>
                My posts
            </h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
