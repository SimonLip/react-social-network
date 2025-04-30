import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUsersProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";
import { profileAPI, authAPI } from "../../API/API";

let ProfileContainer = (props) => {
    const { userId } = useParams();
    const [authUserId, setAuthUserId] = useState(null);

    useEffect(() => {
        if (!userId) {
            authAPI.me().then(response => {
                if (response.data.resultCode === 0) {
                    const id = response.data.data.id;
                    setAuthUserId(id);
                }
            });
        }
    }, [userId]);

    const profileId = userId || authUserId;

    useEffect(() => {
        if (profileId) {
            profileAPI.getProfile(profileId).then(data => {
                props.setUsersProfile(data);
            });
        }
    }, [profileId]);

    return <Profile {...props} profile={props.profile} />;
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUsersProfile })(ProfileContainer);
