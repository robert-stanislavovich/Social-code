import React from 'react';
import s from './Login.module.css';
import {NavLink} from "react-router-dom";


const Registration = () => {

    return <div>
        <div className={s.loginpage}>
            <div className={s.form}>
                <div>Регистрация</div>
                <form className={s.registerform}>
                    <input type="text" placeholder="Почта"/>
                    <input type="password" placeholder="Пароль"/>
                    <button>Создать аккаунт</button>
                    <p className={s.message}>Уже есть аккаунт? <NavLink to="/login">Войти</NavLink></p>
                </form>
            </div>
        </div>
    </div>
}

export default Registration;