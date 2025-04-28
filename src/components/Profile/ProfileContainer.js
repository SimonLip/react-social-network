import React, { useEffect } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUsersProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom";

let ProfileContainer = (props) => {
    const { userId } = useParams();

    const profileId = userId || 32360;

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
            .then(response => {
                props.setUsersProfile(response.data);
            });
    }, [profileId]);
    
    return (
        <Profile {...props} profile={props.profile} />
    );
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUsersProfile })(ProfileContainer);
