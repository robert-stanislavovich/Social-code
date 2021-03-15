import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import profileimg from '../../img/iconfinder_simpline_27_2305630.png';
import messagesimg from '../../img/iconfinder_Icon_Doublle_Circle_Messages_3319481 (1).png';
import usersimg from '../../img/iconfinder_team-people-group_2932353.png';
import filmsimg from '../../img/iconfinder_film_477140.png';
import food from '../../img/pizza.png';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <img src={profileimg}/><NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
            </div>
            <div className={s.item}>
                <img src={usersimg}/><NavLink to="/myusers" activeClassName={s.activeLink}>Пользователи</NavLink>
            </div>
            <div className={s.item}>
                <img src={food}/><NavLink to="/food" activeClassName={s.activeLink}>Доставка еды</NavLink>
            </div>

        </nav>
    )
}

export default Navbar;