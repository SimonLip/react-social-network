import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => (
        <Post key={post.id} message={post.message} likesCount={post.likesCount} />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={classes.content}>
            <h3>
                My posts
            </h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
