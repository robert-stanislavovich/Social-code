import {profileAPI, usersAPI} from "../api/api";
import {follow, toggleIsFetching} from "./users-reducer";
import {togglefollowingInProgress} from "./myusers-reducer";
import {Redirect} from "react-router-dom";
import React from "react";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO = 'SET_PHOTO'
const SET_DATA_EDIT_MODE = 'SET_DATA_EDIT_MODE'
const SET_SUCCESS = 'SET_SUCCESS'
const SET_SMALL_FETCHING = 'SET_SMALL_FETCHING'


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null,
    status: "",
    profileDataEditMode:false,
    success:"",
    smallFetching: false
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_PHOTO: {
            return {
                ...state, profile: {...state.profile, photos: action.photos}
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_DATA_EDIT_MODE: {
            return {...state, profileDataEditMode: action.editMode}
        }
        case SET_SUCCESS: {
            return {...state, success: action.success}
        }
        case SET_SMALL_FETCHING: {
            return {...state, smallFetching: action.smallFetching}
        }


        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile })
export const setStatus = (status) =>
    ({type: SET_STATUS, status })
export const setPhoto = (photos) =>
    ({type: SET_PHOTO, photos })
export const setEditMode = (editMode) =>
    ({type: SET_DATA_EDIT_MODE, editMode })
export const setSuccess = (success) =>
    ({type: SET_SUCCESS, success })
export const setSmallFetching = (smallFetching) =>
    ({type: SET_SMALL_FETCHING, smallFetching })




export const getProfileThunk = (userId) => {
    return (dispatch) => {
        //dispatch(toggleIsFetching(true));
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
                //dispatch(toggleIsFetching(false));
            })
    }
}

export const getStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatusThunk = (status) => {
    return (dispatch) => {
        profileAPI.putProfileStatus(status)
            .then(response => {
                if (response.data.resultCode == 1) alert("Что-то пошло не так.")
                else dispatch(setStatus(status))
            })


    }
}
export const updatePhotoThunk = (photoFile) => {
    return (dispatch) => {
        profileAPI.putProfilePhoto(photoFile)
            .then(response => {
                dispatch(setPhoto(response.data.data.photos))
            })


    }
}
export const saveProfile = (profile) => {
    return (dispatch, getState) => {
        const userId = getState().auth.userId
        dispatch(setSmallFetching(true))
        profileAPI.putProfile(profile)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(getProfileThunk(userId))
                    dispatch(setSuccess("Информация успешно сохранена"))
                    dispatch(setSmallFetching(false))
                }
                else {
                    let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Что-то пошло не так"
                    dispatch(stopSubmit("profileDataEditMode",
                        {_error: errorMessage}))
                    dispatch(setSmallFetching(false))
                    dispatch(setSuccess(""))

                }

            })


    }
}








export default profileReducer;