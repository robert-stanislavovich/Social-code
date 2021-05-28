import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, withRouter} from "react-router-dom";
import MyUsersContainer from "./components/Users/MyUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {InitApp} from "./redux/app-reducer";
import UploadAvatar from "./components/Upload/UploadAvatar";
import Preloader from "./components/Preloader/Preloader";
import {getProfileThunk} from "./redux/profile-reducer";
import FoodContainer from "./components/FoodDelivery/FoodContainer";
import About from "./components/About/About";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import MobileVersion from "./components/Profile/MobileVersion/MobileVersion";
import MobileMenu from "./components/Navbar/Mobile/MobileMenu";
import MobileUsersContainer from "./components/Users/MobileUsers/MobileUsersContainer";
import MobileLogin from "./components/Login/MobileLogin/MobileLogin";
import MobileAbout from "./components/About/MobileAbout";


class App extends React.Component {
    componentDidMount() {
    this.props.InitApp()

    }

    render() {
        if (!this.props.init) {

            return <Preloader />
        }

        return (
                <Container fixed className='container'>
                    <Grid container spacing={1} >
                        <Grid item xs={3} className='Navbar'>
                            <Navbar/>
                        </Grid>
                        <Grid className='app-wrapper-content' item xs={7}>
                                <Redirect from={"/"} to={"/profile"} />
                                <Route path='/profile/:userId?'
                                       render={() => <ProfileContainer/>}/>
                                <Route path='/myusers' render={() => <MyUsersContainer/>}/>
                                <Route path='/login'
                                       render={() => <Login/>}/>
                                <Route path='/uploadAvatar'
                                       render={() => <UploadAvatar/>}/>
                                <Route path='/food'
                                       render={() => <FoodContainer />}/>
                                <Route path='/about'
                                       render={() => <About />}/>


                        </Grid>
                        {this.props.burger ? "" : <div className='MobileVersion'><Route path='/profile/:userId?'
                                                              render={() => <MobileVersion />}/></div>}
                        {this.props.burger ? "" : <div className='MobileVersion'><Route path='/myusers'
                                                                                        render={() => <MobileUsersContainer />}/></div>}
                        {this.props.burger ? "" : <div className='MobileVersion'><Route path='/login'
                                                                                        render={() => <MobileLogin />}/></div>}
                        {this.props.burger ? "" : <div className='MobileVersion'><Route path='/about'
                                                                                        render={() => <MobileAbout />}/></div>}


                    </Grid>

                <HeaderContainer/>
                    {this.props.burger ? <div className='MobileVersion'><MobileMenu /></div> : ""}
            </Container>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        init: state.app.init,
        authUserId: state.auth.userId,
        burger: state.app.burger
    }
}

export default compose(
    withRouter, //без него не будет работать переход по ссылкам в случае настройки под gihub.pages
    connect(mapStateToProps, {InitApp, getProfileThunk}))(App)