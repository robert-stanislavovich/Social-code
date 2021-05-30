import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';



const Header = (props) => {

    let burgerClick = () => {
        if (props.burger) return props.openBurger(false)
        if (!props.burger) return props.openBurger(true)
    }


    return <AppBar
        color="inherit"
        position="fixed"
        className={s.appBar}>
        <Toolbar>



            {props.isAuth
            ? <div className={s.emailHead}>
                {props.email}
            </div>
            : <div className={s.loginblock}>
                    <NavLink style={{textDecoration: 'none', color: 'black'}}
                             to={'/login'}>
                <Button>
                    Войти
                </Button>
            </NavLink></div>}
            {props.isAuth
                ? <div className={s.loginblock}>
                    <Button
                        position="right"
                        onClick={props.logout}>
                        Выйти
                    </Button>
                </div>
                : ""}
            <div>
                <Button>
                    <NavLink
                        style={{textDecoration: 'none', color: 'black'}}
                        to="/about"
                        className={s.about}>
                        О проекте
                    </NavLink>
                </Button>
            </div>
            <div className={s.burger}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={s.burger}>
                    <MenuIcon onClick={() => burgerClick()}/>
                </IconButton>
            </div>
        </Toolbar>
    </AppBar>

}

export default Header;