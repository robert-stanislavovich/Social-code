import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getStatusThunk, setEditMode, setSuccess, updateStatusThunk} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Preloader from "../Preloader/Preloader";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
            // if (!userId) {this.props.history.push("/dialogs")} способ програмнного редиректа
        }
        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }
    componentDidMount() {
        this.refreshProfile()

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }


    render () {
        return <>
            <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatusThunk={this.props.updateStatusThunk}
                    paramsUserId={this.props.match.params.userId}
                    setEditMode={this.props.setEditMode}
                    profileDataEditModeъ={this.props.profileDataEditMode}
                    setSuccess={this.props.setSuccess}/>
    </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.usersPage.isFetching,
    status: state.profilePage.status,
    updateStatusThunk: state.profilePage.updateStatusThunk,
    authUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    profileDataEditMode: state.profilePage.profileDataEditMode

})



export default compose(
   withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk, setEditMode, setSuccess})
) (ProfileContainer);