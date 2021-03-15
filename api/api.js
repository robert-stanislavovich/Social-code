import * as axios from "axios";

let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "78e14594-ef26-4d2d-8b54-44edc88dc37a"}
})


export const usersAPI  = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }// Вариант с использованием создания экземпляра запроса axios.create - "instance"
}
export const profileAPI  = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    putProfileStatus(status) {
        return instance.put(`profile/status/`, { status: status })
    },
    putProfile(profile) {
        return instance.put(`profile/`, profile)
    },
    putProfilePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}
export const authAPI  = {
    getMe() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha ) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
    getCaptcha() {
        return instance.get(`security/get-captcha-url`)
    }
}
















export const usersAPIexample  = {
    getUsers (currentPage, pageSize) {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
}
} // Вариант с подразделением запросов по API тематике, для вызова "usersAPI.getUsers()"
export const getUsersexample = (currentPage, pageSize) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
} // Самый простой вариант функции запроса, для вызова "getUsers()"


