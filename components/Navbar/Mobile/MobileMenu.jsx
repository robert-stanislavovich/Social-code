import React from 'react';
import s from "../Navbar.module.css";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import {NavLink, withRouter} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {logout} from "../../../redux/auth-reducer";
import {openBurger} from "../../../redux/app-reducer";

const MobileMenu = (props) => {
    return (
        <div className={s.MobileMenu}>
            <nav>
                <Paper variant="outlined">
                    <MenuList>
                        <NavLink style={{textDecoration: 'none', color: 'black'}} to="/profile">
                            <MenuItem onClick={() => props.openBurger(false)}>
                                Профиль
                            </MenuItem>
                        </NavLink>
                        <NavLink style={{textDecoration: 'none', color: 'black'}} to="/myusers">
                            <MenuItem onClick={() => props.openBurger(false)}>
                                Пользователи
                            </MenuItem>
                        </NavLink>
                        <NavLink style={{textDecoration: 'none', color: 'black'}} to="/about">
                            <MenuItem onClick={() => props.openBurger(false)}>
                                О проекте
                            </MenuItem>
                        </NavLink>
                        {props.isAuth
                            ? <div><MenuItem position="right" onClick={() => {
                                props.logout()
                                props.openBurger(false)
                            }}>
                                Выйти
                            </MenuItem></div>
                            : ""}
                        {props.isAuth
                            ? ""
                            : <NavLink style={{textDecoration: 'none', color: 'black'}} to={'/login'}>
                                <MenuItem onClick={() => props.openBurger(false)}>
                                    Войти
                                </MenuItem>
                            </NavLink>}
                    </MenuList>
                </Paper>
            </nav>
        </div>
    );
};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,   login: state.auth.login,
    users: state.myUsersPage.users,
    logout: state.auth.logout,
    authUserId: state.auth.userId,
    email: state.auth.email,
    burger: state.app.burger




})

let withUrlDataContainerComponent = withRouter(MobileMenu)

export default connect(mapStateToProps,{logout, openBurger})(withUrlDataContainerComponent);