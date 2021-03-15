import {usersAPI} from "../api/api";
import {follow, toggleIsFetching, unfollow} from "./users-reducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FOLLOWINGPROGRESS = 'TOGGLE_IS_FOLLOWINGPROGRESS'

let initialState = {

    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    followingInProgress: []
    
};

const myusersReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS:
            return  {
            ...state,
            users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:

            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case TOGGLE_IS_FOLLOWINGPROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
            
        default:
            return state;
    }
}

export const setUsers = (users) =>
    ({type: SET_USERS, users})

export const settotalUsersCount = (totalUsersCount) =>
    ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export const setcurrentPage = (currentPage) =>
    ({type: SET_CURRENT_PAGE, currentPage})

export const togglefollowingInProgress = (isFetching, userId) =>
    ({type: TOGGLE_IS_FOLLOWINGPROGRESS, isFetching, userId})


export const getUsersThunkCr = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.data.items))
            dispatch(settotalUsersCount(response.data.totalCount))
            dispatch(toggleIsFetching(false))

        })
    }
}
export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(togglefollowingInProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {if (response.data.resultCode == 0) {
                dispatch(follow(userId))
            }
                dispatch(togglefollowingInProgress(false, userId))
            })
    }
}
export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(togglefollowingInProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {if (response.data.resultCode == 0) {
                dispatch(unfollow(userId))
            }
                dispatch(togglefollowingInProgress(false, userId))
            })
    }
}




export default myusersReducer;