import React from "react";
import {connect} from "react-redux";

import {
    setcurrentPage,
    getUsersThunkCr, followThunk, unfollowThunk
} from "../../redux/myusers-reducer";
import {compose} from "redux";
import Chat from "./Chat";
import {getProfileThunk, getStatusThunk, updateStatusThunk} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";




class ChatContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.authUserId
        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }

    componentDidMount() {
        this.props.getUsersThunkCr(this.props.currentPage, this.props.pageSize)
        this.refreshProfile()

    }




    onPageChanged = (pageNumber) => {
        this.props.setcurrentPage(pageNumber)
        this.props.getUsersThunkCr(pageNumber, this.props.pageSize)
    }

    render () {
        return <>

            <Chat
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                followThunk={this.props.followThunk}
                unfollowThunk={this.props.unfollowThunk}
                followingInProgress={this.props.followingInProgress}
                isFetching={this.props.isFetching}
                updateStatusThunk={this.props.updateStatusThunk}
                profile={this.props.profile}
                status={this.props.status}
            />

            </>
    }
    
}
let mapStateToProps = (state) => {
    return {
        users: state.myUsersPage.users,
        totalUsersCount: state.myUsersPage.totalUsersCount,
        currentPage: state.myUsersPage.currentPage,
        pageSize: state.myUsersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.myUsersPage.followingInProgress,
        status: state.profilePage.status,
        profile: state.profilePage.profile,
        authUserId: state.auth.userId

    }
}


export default compose(
    withAuthRedirect,
    withRouter,

    connect(mapStateToProps,
        {setcurrentPage, getUsersThunkCr, followThunk, unfollowThunk, updateStatusThunk, getProfileThunk, getStatusThunk})
)(ChatContainer)