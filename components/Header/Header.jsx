import React from 'react';
import s from './Header.module.css';
import headerimg from '../../img/social-venture-network-logo.png'
import {NavLink} from "react-router-dom";




const Header = (props) => {
    return <header className={s.header}>






            <div className={s.loginblock}>{props.isAuth ? props.email :
                <NavLink className={s.loginbutton}  to={'/login'}>Войти</NavLink>}
                {props.isAuth ? <span > <button className={s.loginbutton} onClick={props.logout}>Выйти</button></span> : ""}
            <span><NavLink to="/about" className={s.loginbutton}>О проекте</NavLink></span>


            </div>



    </header>
}

export default Header;