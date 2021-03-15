import {authAPI, usersAPI} from "../api/api";
import {follow} from "./users-reducer";
import {togglefollowingInProgress} from "./myusers-reducer";
import {stopSubmit} from "redux-form";
import {Redirect} from "react-router-dom";
import React from "react";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';



let initialState = {
    userId: null,
    email:null,
    login:null,
    isFetching: true,
    isAuth: false,
    rememberMe: null,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload
            }

        case SET_CAPTCHA_URL:

            return {
                ...state, captchaUrl: action.captchaUrl
            }

        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login, isAuth) =>
    ({type: SET_USER_DATA, payload:{userId,email,login, isAuth}})
export const setCaptchaUrl = (captchaUrl) =>
    ({type: SET_CAPTCHA_URL, captchaUrl})




export const authThunk = () => {
    return (dispatch) => {
        return authAPI.getMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}


export const loginThunk = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe = false, captcha).then(response => {
            if (response.data.resultCode === 0){
                dispatch(authThunk())
                dispatch(setCaptchaUrl(null))
            } else {
                if (response.data.resultCode === 10) {
                    authAPI.getCaptcha().then(response => {
                        dispatch(setCaptchaUrl(response.data.url))
                    })}
                   else {
                       dispatch(stopSubmit("login", {_error: response.data.messages[0]}))
                }
            }
        })

    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            dispatch(setAuthUserData(null, null, null, false))
        })
    }
}


export default authReducer;