import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfileThunk, getAuthUserIdThunk } from "../../redux/profileReducer";

let ProfileContainer = (props) => {
    const { userId } = useParams();

    useEffect(() => {
        if (userId) {
            props.getUserProfileThunk(userId);
        } else {
            props.getAuthUserIdThunk().then(authId => {
                if (authId) {
                    props.getUserProfileThunk(authId);
                }
            });
        }
    }, [userId]);

    return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps,
    {
        getUserProfileThunk,
        getAuthUserIdThunk
    }
)(ProfileContainer);
