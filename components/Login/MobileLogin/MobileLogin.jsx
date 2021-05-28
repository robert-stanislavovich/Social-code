import React from 'react';
import s from '.././Login.module.css';
import {NavLink, Redirect} from "react-router-dom";
import {loginThunk} from "../../../redux/auth-reducer";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {maxLength10, maxLength50, required} from "../../../validators/validators";
import {Input} from "../../../formcontrols/formControl";
import Button from "@material-ui/core/Button";


const MobileLoginForm = (props) => {


    return <div>
        <div className={s.Mobileloginpage}>
            <div className={s.form}>
                <div className={s.mainlogin}>
                    Вход
                </div>
                <form onSubmit={props.handleSubmit}>
                    <span>
                        <Field
                            component={Input}
                            name={"email"}
                            placeholder={"Почта"}
                            validate={[required, maxLength50]}/>
                    </span>
                    <span>
                        <Field
                            component={Input}
                            name={"password"}
                            placeholder={"Пароль"}
                            type={"password"}
                            validate={[required, maxLength10]}/></span>

                    <span className={s.rememberme}>
                        Запомнить меня
                        <div>
                            <Field
                                component={"input"}
                                name={"rememberMe"}
                                type={"checkbox"}/>
                        </div>
                    </span>
                    {props.captchaUrl
                        ? <span>
                            <img src={props.captchaUrl}/>
                            <Field
                                component={Input}
                                name={"captcha"}
                                validate={[required]}/>
                    </span>
                        : ""
                    }


                    <div>
                        <button>Войти</button>
                    </div>
                    <p className={s.message}>
                        Email: free@samuraijs.com
                        Password: free
                    </p>
                </form>
            </div>
        </div>
    </div>
}


const ReduxLogin = reduxForm({ form: "login" })(MobileLoginForm)

const MobileLogin = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return <ReduxLogin captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})


export default connect (mapStateToProps, {loginThunk})(MobileLogin);