import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "87fef270-44b2-4a7c-a431-9df58a5489f1"
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
        return instance.get(`profile/${userId}`);  
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status });
    },
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, 
            { email, password, rememberMe });
    },
    
    logout() {
    return instance.delete(`auth/login`);
}

};