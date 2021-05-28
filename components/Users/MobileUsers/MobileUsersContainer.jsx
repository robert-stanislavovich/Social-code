import React from "react";
import {connect} from "react-redux";
import MobileUsers from "./MobileUsers";
import {
    setcurrentPage,
    getUsersThunkCr, followThunk, unfollowThunk
} from "../../../redux/myusers-reducer";
import {compose} from "redux";



class MobileUsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCr(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.setcurrentPage(pageNumber)
        this.props.getUsersThunkCr(pageNumber, this.props.pageSize)
    }

    render () {
        return <>
            <MobileUsers
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                followThunk={this.props.followThunk}
                unfollowThunk={this.props.unfollowThunk}
                followingInProgress={this.props.followingInProgress}
                isFetching={this.props.isFetching}/>

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
        followingInProgress: state.myUsersPage.followingInProgress
    }
}


export default compose(

    connect(mapStateToProps,
        {setcurrentPage, getUsersThunkCr, followThunk, unfollowThunk})
)(MobileUsersContainer)