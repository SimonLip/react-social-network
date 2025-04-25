import React from "react";
import { addPost, updateNewPostText } from "../../../redux/profileReducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts"

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const MyPostsContainer = connect(mapStateToProps,
    {
        addPost,
        updateNewPostText,
    }
)
    (MyPosts);


export default MyPostsContainer;
