import React from 'react';
import s from './ProfileInfo.module.css';





const ProfileData = (props) => {


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
                <br/>

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

export default ProfileData;