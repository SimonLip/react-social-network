import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import withAuthRedirect from "../../Hocs/withAuthRedirect";
import withTopScroll from "../../Hocs/withTopScroll";
import { compose } from "redux";
import {
    getUserProfile,
    getAuthUserId,
    getStatus,
    updateStatus,
} from "../../redux/profileReducer";

let ProfileContainer = (props) => {
    const { userId } = useParams();

    useEffect(() => {
        if (userId) {
            props.getUserProfile(userId);
            props.getStatus(userId);
        } else {
            props.getAuthUserId().then(authId => {
                if (authId) {
                    props.getUserProfile(authId);
                    props.getStatus(authId);
                }
            });
        }
    }, [userId]);

    return <Profile
        {...props}
        isOwner={!userId}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
    />;
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,

});

export default compose(
    connect(mapStateToProps,
        {
            getUserProfile,
            getAuthUserId,
            getStatus,
            updateStatus,
        }),
    withAuthRedirect,
    withTopScroll,
)(ProfileContainer);