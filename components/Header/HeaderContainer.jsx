import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {withRouter} from "react-router-dom";
import {openBurger} from "../../redux/app-reducer";



class HeaderContainer extends React.Component {


    render() {
        return <>
            <Header {...this.props}
                    users={this.props.users}
                    openBurger={this.props.openBurger}
                    burger={this.props.burger}

            />

        </>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    users: state.myUsersPage.users,
    logout: state.auth.logout,
    authUserId: state.auth.userId,
    email: state.auth.email,
    burger: state.app.burger




})

let withUrlDataContainerComponent = withRouter(HeaderContainer)

export default connect(mapStateToProps,{logout, openBurger})(withUrlDataContainerComponent);