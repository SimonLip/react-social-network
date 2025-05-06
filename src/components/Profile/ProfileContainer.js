import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfileThunk, getAuthUserIdThunk } from "../../redux/profileReducer";
import withAuthRedirect from "../../Hocs/withAuthRedirect";
import withTopScroll from "../../Hocs/withTopScroll";
import { compose } from "redux";

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

export default compose(
    connect(mapStateToProps,
        {
            getUserProfileThunk,
            getAuthUserIdThunk
        }), 
    withAuthRedirect,
    withTopScroll,
) (ProfileContainer);