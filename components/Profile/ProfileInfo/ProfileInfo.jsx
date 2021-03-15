import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import {NavLink} from "react-router-dom";
import ProfileData from "./ProfileData";
import ProfileDataEditMode from "./ProfileDataEditMode";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    const ShowUploadPhoto = () => {
        return (<NavLink className={s.second_block} to="/uploadAvatar">Обновить фотографию</NavLink>)
    }

    return (
        <div className={s.profileWrapper}>

            <div>
                <div className={s.first_block}><img src={props.profile.photos.large}/>{props.paramsUserId ? "" :
                    <ShowUploadPhoto/>}</div></div>
            <div className={s.descriptionBlock}>

                <div>
                <div><span className={s.profilename}>{props.profile.fullName}</span> <span> (id: {props.profile.userId})</span></div>
                    <div>
                        <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/>
                    </div>
                <div>
                    {props.paramsUserId ? "" :
                    <a className={s.editMode} onClick={() => props.setEditMode(true)}>Изменить информацию</a>}
                    {props.profileDataEditMode ? <a className={s.editMode} onClick={() =>
                    {props.setEditMode(false)
                    props.setSuccess("")}}>Выйти</a> : ""}
                    {props.profileDataEditMode ? <ProfileDataEditMode profile={props.profile}
                                                                      updateStatusThunk={props.updateStatusThunk}
                                                                      status={props.status}/> :
                        <ProfileData profile={props.profile}
                                     updateStatusThunk={props.updateStatusThunk}
                                     status={props.status}/>

                    }
                </div>
                </div>
            </div>
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