import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import ProfileData from "./ProfileData";
import ProfileDataEditMode from "./ProfileDataEditMode";
import ProfileStatus from "./ProfileStatus";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }


    return (<div className={s.ProfileWrapper}>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <div className={s.first_block}>
                        <div className={s.second_block}>
                            <img src={props.profile.photos.large}/>
                            {props.paramsUserId
                                ? ""
                                : <Button href="#/uploadAvatar"
                                          variant="contained">
                                    Обновить фотографию
                                </Button>
                            }
                        </div>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className={s.descriptionBlock}>

                        <div className={s.profilename}>
                    <span>{props.profile.fullName}
                    </span>
                            <span> (id: {props.profile.userId})
                    </span>
                        </div>
                        <div>
                            <ProfileStatus status={props.status}
                                           updateStatusThunk={props.updateStatusThunk}/>
                        </div>
                        <Divider/>
                        <div>
                            {!props.paramsUserId && !props.profileDataEditMode
                                ? <a className={s.editMode} onClick={() => props.setEditMode(true)}>Редактировать</a>
                                : ""}
                            {props.profileDataEditMode
                                ? <a className={s.editMode} onClick={() => {
                                    props.setEditMode(false)
                                    props.setSuccess("")
                                }}>
                                    Выйти
                                </a>
                                : ""}
                            {props.profileDataEditMode
                                ? <ProfileDataEditMode profile={props.profile}
                                                       updateStatusThunk={props.updateStatusThunk}
                                                       status={props.status}/>
                                : <ProfileData profile={props.profile}
                                               updateStatusThunk={props.updateStatusThunk}
                                               status={props.status}/>

                            }
                        </div>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
//userId: required(integer)
// lookingForAJob: required(boolean)
// lookingForAJobDescription: required(string)
// fullName: required(string)
// contacts: required(object)
// github: required(string)
// vk: required(string)
// facebook: required(string)
// instagram: required(string)
// twitter: required(string)
// website: required(string)
// youtube: required(string)
// mainLink: required(string)

export default ProfileInfo;