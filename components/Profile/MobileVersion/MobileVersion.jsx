import React from 'react';
import {connect} from "react-redux";
import {
    getProfileThunk,
    getStatusThunk,
    saveProfile,
    setEditMode,
    setSuccess,
    updateStatusThunk
} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Preloader from "../../Preloader/Preloader";
import Grid from "@material-ui/core/Grid";
import s from "../ProfileInfo/ProfileInfo.module.css";
import Button from "@material-ui/core/Button";
import ProfileStatus from "../ProfileInfo/ProfileStatus";
import Divider from "@material-ui/core/Divider";
import ProfileDataEditModeM from "../ProfileInfo/ProfileDataEditMode";
import ProfileData from "../ProfileInfo/ProfileData";
import {createField, InputProfileData, TextAreaProfileData} from "../../../formcontrols/formControl";
import {maxLength50, required} from "../../../validators/validators";
import SmallPreloader from "../../Preloader/SmallPreloader";
import {reduxForm} from "redux-form";



const MobileProfileData = (props) => {


    return (
        <div className={s.profiledata}>
            <div className={s.profiledataleft}>
                <div style={{margin: 3}}>Ищу работу:</div>
                <div style={{margin: 3}}>Профф. навыки работы:</div>
                <div style={{margin: 3}}>Обо мне:</div>
                <br/>
                <br/>
                <div style={{margin: 3}}>Контакты:</div>
                <div style={{margin: 3}}>Вконтакте:</div>
                <div style={{margin: 3}}>Инстаграмм:</div>
                <div style={{margin: 3}}>Своя страница:</div>
                <div style={{margin: 3}}>Веб сайт:</div>
                <div style={{margin: 3}}>YouTube:</div>
                <div style={{margin: 3}}>Твиттер:</div>
                <div style={{margin: 3}}>Facebook:</div>
                <div style={{margin: 3}}>Гитхаб:</div>
            </div>

            <div className={s.profiledataright}>
                <div style={{margin: 3}}>{props.profile.lookingForAJob ? "Да" : "Нет"}</div>
                <div style={{margin: 3}}>{props.profile.lookingForAJobDescription}</div>
                <div style={{margin: 3}}>{props.profile.aboutMe}</div>
                <br style={{margin: 3}}></br>

                <div style={{margin: 3}}><a href={props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>
                <div style={{margin: 3}}><a href={props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a></div>
                <div style={{margin: 3}}><a href={props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a></div>
                <div style={{margin: 3}}><a href={props.profile.contacts.website}>{props.profile.contacts.website}</a></div>
                <div style={{margin: 3}}><a href={props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a></div>
                <div style={{margin: 3}}><a href={props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a></div>
                <div style={{margin: 3}}><a href={props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a></div>
                <div style={{margin: 3}}><a href={props.profile.contacts.github}>{props.profile.contacts.github}</a></div>

            </div>

        </div>

    )
}

const MobileProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }


    return (
        <Grid container spacing={1}>
            <Grid item>
                <div className={s.Mfirst_block}>
                        <img src={props.profile.photos.large}/>
                        {props.paramsUserId
                            ? ""
                            :
                            <Button href="#/uploadAvatar" variant="contained" className={s.MButton}>
                                Обновить фотографию
                            </Button>
                        }
                </div>
            </Grid>
            <Grid item>
                <div className={s.MdescriptionBlock}>

                    <div className={s.profilename}><span>{props.profile.fullName}</span> <span> (id: {props.profile.userId})</span></div>
                    <div>
                        <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/>
                    </div>
                    <Divider />
                    <div>
                        {!props.paramsUserId && !props.profileDataEditMode
                            ? <a className={s.editMode} onClick={() => props.setEditMode(true)}>Редактировать</a>
                            : ""}
                        {props.profileDataEditMode ? <a className={s.editMode} onClick={() =>
                        {props.setEditMode(false)
                            props.setSuccess("")}}>Выйти</a> : ""}
                        {props.profileDataEditMode ? <ProfileDataEditModeM profile={props.profile}
                                                                          updateStatusThunk={props.updateStatusThunk}
                                                                          status={props.status}/> :
                            <MobileProfileData profile={props.profile}
                                         updateStatusThunk={props.updateStatusThunk}
                                         status={props.status}/>

                        }



                    </div>

                </div>
            </Grid>
        </Grid>
    )
}










class MobileVersion extends React.Component {

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
            <MobileProfileInfo
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatusThunk={this.props.updateStatusThunk}
                paramsUserId={this.props.match.params.userId}
                setEditMode={this.props.setEditMode}
                profileDataEditModeъ={this.props.profileDataEditMode}
                setSuccess={this.props.setSuccess}
                editMode={this.props.editMode}

            />
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

    withRouter,
    connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk, setEditMode, setSuccess})
) (MobileVersion);