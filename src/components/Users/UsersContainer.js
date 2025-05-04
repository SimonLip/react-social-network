import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Loader from "../Loader/Loader";
import { usersAPI } from "../../API/API";
import {
    follow, setUsers,
    unfollow, setCurrentPage,
    setTotalUsersCount, toggleIsFetching,
    toggleIsFollowingProgress, getUsersThunkCreator
} from "../../redux/usersReducer";


let UsersContainer = (props) => {

    useEffect(() => {
        props.getUsersThunkCreator(props.currentPage, props.pageSize);
    }, [props.pageSize]);
    
    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.getUsersThunkCreator(pageNumber, props.pageSize);
    };

    return (
        <>
            {props.isFetching && <Loader />}
            <Users
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                users={props.users}
                follow={props.follow}
                unfollow={props.unfollow}
                onPageChanged={onPageChanged}
                toggleIsFollowingProgress={props.toggleIsFollowingProgress}
                followingProgress={props.followingProgress}
            />
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth, 

    }
}

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleIsFollowingProgress,
        getUsersThunkCreator,
    })
    (UsersContainer);
