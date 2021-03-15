import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MyUsersContainer from "./components/Users/MyUsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Films from "./components/Movie/Films";
import Fiveonblood from "./components/Movie/Five on blood";
import Diablo from "./components/Movie/Diablo";
import Prostopomilovat from "./components/Movie/Prosto pomilovat";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
import {compose} from "redux";
import {connect} from "react-redux";
import {InitApp} from "./redux/app-reducer";
import UploadAvatar from "./components/Upload/UploadAvatar";
import Preloader from "./components/Preloader/Preloader";
import ChatContainer from "./components/Chat/ChatContainer";
import {getProfileThunk} from "./redux/profile-reducer";
import FoodContainer from "./components/FoodDelivery/FoodContainer";
import About from "./components/About/About";


class App extends React.Component {
    componentDidMount() {
    this.props.InitApp()

    }

    render() {
        if (!this.props.init) {

            return <Preloader />
        }

        return (
            <div className='all'>
                <HeaderContainer/>
                <div className='app-wrapper'>

                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Redirect from={"/"} to={"/profile"} />                                         
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>                        
                        <Route path='/myusers'
                               render={() => <MyUsersContainer/>}/>                        
                        <Route path='/login'
                               render={() => <Login/>}/>                       
                        <Route path='/uploadAvatar'
                               render={() => <UploadAvatar/>}/>
                        <Route path='/food'
                               render={() => <FoodContainer />}/>
                        <Route path='/about'
                               render={() => <About />}/>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        init: state.app.init,
        authUserId: state.auth.userId
    }
}

export default compose(
    withRouter, //без него не будет работать переход по ссылкам в случае настройки под gihub.pages
    connect(mapStateToProps, {InitApp, getProfileThunk}))(App)