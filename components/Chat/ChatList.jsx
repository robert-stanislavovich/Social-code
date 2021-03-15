import {NavLink} from "react-router-dom";
import React from "react";
import userPhoto from '../../img/userlogo.jpg'
import s from './chat.module.css'


let ChatList = (props) => {



    return <div> <div>{
        props.users.map(u =>
            <div> {u.status ? <div className={s.users}><div>
                <span><NavLink className={s.userPhoto} to={'/profile/' + u.id}>
                    <img className={s.userPhoto}src={u.photos.small != null ? u.photos.small : userPhoto}/></NavLink>
                </span>
                <span></span>



            </div>
                <div className={s.message}>
                <div>
                    <div className={s.userName}>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
                </div>
            </div>
            </div> : ""}</div>


    )
    }</div>

    </div>

}
export default ChatList