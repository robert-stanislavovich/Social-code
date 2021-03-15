import React from 'react';
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";


export const withAuthRedirect = (Component) => {

    let mapStateToPropsForRedirect = (state) =>({
        isAuth: state.auth.isAuth
    })

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />

            return <Component {...this.props}/>;
        }
    }

    let connectedAuthRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return compose( withRouter) (connectedAuthRedirect)
}