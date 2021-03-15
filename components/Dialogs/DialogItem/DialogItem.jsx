import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import dia from './dia.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div id={s.testbutton}><div id="testbutton"></div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;