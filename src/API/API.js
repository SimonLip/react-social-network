import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "2154d6f6-c6db-431a-a849-c099eb4751e3"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data);
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
};