import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.profilePage.getPosts().map(post => (
        <Post key={post.id} message={post.message} likesCount={post.likesCount} />
    ));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({ type : 'ADD-POST' });
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch( action );
    }

    return (
        <div className={classes.content}>
            <h3>
                My posts
            </h3>
            <div>
                <textarea
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
                />
                <div>
                    <input
                        type="button"
                        onClick={addPost}
                        value="Add post"
                    />
                </div>
                <div className={classes.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;
