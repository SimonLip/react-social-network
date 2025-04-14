const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'


let initialState = {
    users: [
        {
            id: 1, photoUrl: 'https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg',
            followed: true, fullName: "Artem", status: "I like DnD",
            location: { city: "Dnipro", country: "Ukraine" }
        },
        {
            id: 2, photoUrl: 'https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg',
            followed: false, fullName: "Stas", status: "I like chess",
            location: { city: "Chernihiv", country: "Ukraine" }
        },
        {
            id: 3, photoUrl: 'https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg',
            followed: false, fullName: "Oxana", status: "I like flovers",
            location: { city: "Chernihiv", country: "Ukraine" }
        },
        {
            id: 4, photoUrl: 'https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg',
            followed: true, fullName: "Illya", status: "I like cats",
            location: { city: "Kyiv", country: "Ukraine" }
        },
    ],

};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }

                    return u;
                })


            };


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }

                    return u;
                })


            };
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            };

        default:
            return state;
    }
};

export const followAC = (userId) => ({
    type: FOLLOW,
    userId,
});

export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId,
});

export const setUsersAC = (users) => ({
    type: SET_USERS,
});

export default usersReducer;

