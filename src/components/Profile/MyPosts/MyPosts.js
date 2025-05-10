import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import ProfileReduxForm from "../ProfileForm/ProfileForm";

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => (
        <Post
            key={post.id}
            message={post.message}
            likesCount={post.likesCount}
        />
    ));

    const onAddPost = (formData) => {
        props.addPost(formData.newPostText);
    };

    return (
        <div className={classes.content}>
            <h3>My posts</h3>
            <ProfileReduxForm onSubmit={onAddPost} />
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
