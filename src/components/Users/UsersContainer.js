import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Loader from "../Loader/Loader";
import { usersAPI } from "../../API/API";
import {
    follow, setUsers,
    unfollow, setCurrentPage,
    setTotalUsersCount, toggleIsFetching,
    toggleIsFollowingProgress
} from "../../redux/usersReducer";


let UsersContainer = (props) => {

    useEffect(() => {
        fetchUsers(props.currentPage);
    }, [props.pageSize]);

    const fetchUsers = (page) => {
        props.toggleIsFetching(true);
        usersAPI.getUsers(page, props.pageSize).then(data => {
            props.toggleIsFetching(false);
            props.setUsers(data.items);
            props.setTotalUsersCount(data.totalCount);
        });
    };

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        fetchUsers(pageNumber);
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
    })
    (UsersContainer);
