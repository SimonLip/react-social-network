import React, { useEffect } from "react";
import { connect } from "react-redux";
import Users from "./Users";
import Loader from "../Loader/Loader";
import withAuthRedirect from "../../Hocs/withAuthRedirect";
import withTopScroll from "../../Hocs/withTopScroll";
import { compose } from "redux";
import {
    follow, setUsers,
    unfollow, setCurrentPage,
    setTotalUsersCount, toggleIsFetching,
    toggleIsFollowingProgress, getUsersThunkCreator
} from "../../redux/usersReducer";
import {
    getUsers, getPageSize,
    getTotalUsersCount, getCurrentPage,
    getIsFetching, getFollowingProgress,
} from "../../redux/user-selectors";


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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),

    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingProgress: state.usersPage.followingInProgress,

//     }
// }


export default compose(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            setUsers,
            setCurrentPage,
            setTotalUsersCount,
            toggleIsFetching,
            toggleIsFollowingProgress,
            getUsersThunkCreator,
        }),
    withAuthRedirect,
    withTopScroll,)
    (UsersContainer);

