import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import profileimg from '../../img/iconfinder_simpline_27_2305630.png';
import messagesimg from '../../img/iconfinder_Icon_Doublle_Circle_Messages_3319481 (1).png';
import usersimg from '../../img/iconfinder_team-people-group_2932353.png';
import filmsimg from '../../img/iconfinder_film_477140.png';
import food from '../../img/pizza.png';
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import {compose} from "redux";
import {connect} from "react-redux";
import {followThunk, getUsersThunkCr, setcurrentPage, unfollowThunk} from "../../redux/myusers-reducer";


const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <Paper variant="outlined">
                <MenuList>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/profile">
                        <MenuItem className={s.menuItem}>
                            Профиль
                        </MenuItem>
                    </NavLink>
                    <NavLink style={{textDecoration: 'none', color: 'black'}} to="/myusers">
                        <MenuItem className={s.menuItem}>
                            Пользователи
                            <span className={s.usersCount}>
                                {props.totalUsersCount ? <div>({props.totalUsersCount})</div> : ""}
                            </span>
                        </MenuItem>
                    </NavLink>
                </MenuList>
            </Paper>

        </nav>
    )
}

let mapStateToProps = (state) => {
    return {

        totalUsersCount: state.myUsersPage.totalUsersCount,

    }
}
export default connect(mapStateToProps,{})(Navbar)



/*
<div className={s.item}>
                <img src={profileimg}/><NavLink to="/profile" activeClassName={s.activeLink}>Профиль</NavLink>
            </div>
            <div className={s.item}>
                <img src={usersimg}/><NavLink to="/myusers" activeClassName={s.activeLink}>Пользователи</NavLink>
            </div>
 */