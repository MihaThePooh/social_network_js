import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    // раскоментить, когда зарегаюсь на сайте
    withCredentials: true,
    // заменить на свой уникальный апи кей
    headers: {
        "API-KEY": "48f1de72-194e-4acd-8885-e0d109690021"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn("getProfile этот надо будет зарефакторить")
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
