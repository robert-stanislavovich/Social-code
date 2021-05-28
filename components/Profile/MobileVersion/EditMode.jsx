import React from 'react';
import s from './ProfileInfo.module.css';
import {createField, Input, InputProfileData, TextAreaProfileData} from "../../../formcontrols/formControl";
import {reduxForm} from "redux-form";
import {maxLength50, required} from "../../../validators/validators";
import {connect} from "react-redux";
import {saveProfile, setEditMode, setSuccess} from "../../../redux/profile-reducer";
import SmallPreloader from "../../Preloader/SmallPreloader";






const ProfileDataEditModeM = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                   <span className={s.profiledata}>
                       Полное имя:</span>{createField("","fullName",[maxLength50, required], InputProfileData,"",)}


            </div>


            <div>
                <div><span
                    className={s.profiledata}>Ищу работу:{createField("","lookingForAJob",[],InputProfileData, {type: "checkbox"})}


                </span>
                </div>
            </div>
            <div>
                <div><span
                    className={s.profiledata}>Проф. навыки работы:
                    {createField("Проф. навыки работы","lookingForAJobDescription",[required,maxLength50], TextAreaProfileData)}</span>
                </div>

            </div>
            <div>
                <div><span
                    className={s.profiledata}>Обо мне:
                    {createField("Обо мне","aboutMe",[maxLength50, required], TextAreaProfileData)}</span>
                </div>

            </div>
            <div className={s.profiledata}>Контакты:</div>

            <div>
                <div><span className={s.contacts}>Вконтакте:
                    {createField("Вконтакте","contacts.vk",[maxLength50], InputProfileData)}</span><br/> </div>
            </div>
            <div>
                <div><span className={s.contacts}>Инстаграмм:
                    {createField("Инстаграмм","contacts.instagram",[maxLength50], InputProfileData)}</span><br/> </div>
            </div>
            <div>
                <div><span className={s.contacts}>Своя страница:
                    {createField("Своя страница","contacts.mainLink",[maxLength50], InputProfileData)}</span><br/> </div>
            </div>
            <div>
                <div><span className={s.contacts}>Веб сайт:
                    {createField("Веб сайт","contacts.website",[maxLength50], InputProfileData)}</span><br/> </div>
            </div>
            <div>
                <div><span className={s.contacts}>YouTube:
                    {createField("YouTube","contacts.youtube",[maxLength50], InputProfileData)}</span><br/></div>
            </div>
            <div>
                <div><span className={s.contacts}>Твиттер:
                    {createField("Твиттер","contacts.twitter",[maxLength50], InputProfileData)}
                </span><br/> </div>
            </div>
            <div>
                <div><span className={s.contacts}>Facebook:
                    {createField("Facebook","contacts.facebook",[maxLength50], InputProfileData)}</span><br/></div>
            </div>
            <div>
                <div><span className={s.contacts}>Гитхаб:
                    {createField("Гитхаб","contacts.github",[maxLength50], InputProfileData)}</span><br/> </div>
            </div>
            {props.smallFetching ? <div><SmallPreloader /></div> : ""}
            {props.error && <div className={s.error}>{props.error}</div>}
            {props.success ? <div>{props.success}</div> : ""}
            <div><button className={s.editMode}>Сохранить</button></div>
        </form>

    )
}
const ReduxEditModeForm = reduxForm({ form: "profileDataEditMode" })(ProfileDataEditModeM)

const EditFormM = (props) => {
    const onSubmit = (formData) => {
        props.saveProfile(formData)
        //props.setSuccess("s")
        console.log(formData)
        //props.setEditMode(false)


    }

    return <ReduxEditModeForm
        success={props.success}
        setSuccess={props.setSuccess}
        error={props.error}
        initialValues={props.profile}
        profile={props.profile}
        onSubmit={onSubmit}
        smallFetching={props.smallFetching}/>
}

const mapStateToProps = (state) => (
    {
        profile: state.profilePage.profile,
        isFetching: state.usersPage.isFetching,
        status: state.profilePage.status,
        authUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        profileDataEditMode: state.profilePage.profileDataEditMode,
        success: state.profilePage.success,
        smallFetching: state.profilePage.smallFetching
    })

export default connect (mapStateToProps,{saveProfile, setEditMode, setSuccess})(EditFormM);