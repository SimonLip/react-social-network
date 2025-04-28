import React, { useEffect } from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Loader from "../Loader/Loader";

let UsersContainer = (props) => {

    useEffect(() => {
        props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
            ${props.currentPage}&count=${props.pageSize}`)
            .then(response => {
                props.toggleIsFetching(false);
                props.setUsers(response.data.items);
                props.setTotalUsersCount(response.data.totalCount);
            });
    }, []);

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
            ${pageNumber}&count=${props.pageSize}`)
            .then(response => {
                props.toggleIsFetching(false);
                props.setUsers(response.data.items);
            });
    }

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
    })
    (UsersContainer);
