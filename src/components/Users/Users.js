import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../img/ava-empty.jpg';

let Users = (props) => {
  
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    const visiblePages = new Set();

    visiblePages.add(1);
    visiblePages.add(pagesCount);

    for (let i = props.currentPage - 1; i <= props.currentPage + 1; i++) {
        if (i > 1 && i < pagesCount) {
            visiblePages.add(i);
        }
    }

    pages = Array.from(visiblePages).sort((a, b) => a - b);

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
                                ? <button className={classes.followButton} onClick={() => { props.unfollow(u.id) }}>
                                    Unfollow
                                </button>
                                : <button className={classes.followButton} onClick={() => { props.follow(u.id) }}>
                                    Follow
                                </button>}
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
            <div>
                {pages.map((pageNumber, index) => {
                    const prevPage = pages[index - 1];
                    const needDots = prevPage && pageNumber - prevPage > 1;

                    return (
                        <React.Fragment key={pageNumber}>
                            {needDots && <span className={classes.dots}>...</span>}
                            <button className={props.currentPage === pageNumber ? classes.selectedPage : classes.pageButton}
                                onClick={() => props.onPageChanged(pageNumber)}>
                                {pageNumber}
                            </button>
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
}


export default Users;
