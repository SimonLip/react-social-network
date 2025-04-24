import React, { useEffect } from "react";
import classes from './Users.module.css';
import axios from "axios";
import userPhoto from '../../img/ava-empty.jpg';

let Users1 = (props) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users/page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                props.setUsers(response.data.items);
            });
    }, []);

    return (
        <div>
            {props.users.map(u => (
                <div key={u.id}>
                    <span>
                        <div>
                            <img
                                src={u.photos?.small || userPhoto}
                                className={classes.userPhoto}
                                alt="user avatar"
                            />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status || "No status"}</div>
                        </span>
                        <span>
                            <div>Country not provided</div>
                            <div>City not provided</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Users1;
