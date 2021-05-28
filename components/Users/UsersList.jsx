import {NavLink} from "react-router-dom";
import React from "react";
import userPhoto from '../../img/userlogo.jpg'
import green from '../../img/greengalka.png'
import red from '../../img/redkrest.png'
import s from './users.module.css'
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";


let UsersList = (props) => {



    return (<>
        {props.users.map(u =>
            <Paper className={s.user}>
                <div className={s.leftBlock}>
                <div className={s.userPhoto}><NavLink to={'/profile/' + u.id}>
                <img className={s.userPhoto}
                     src={u.photos.small != null ? u.photos.small : userPhoto}/></NavLink>
            </div></div>
                <div>
                <div className={s.userName}>{u.name}</div>
                <div className={s.userdata}>{u.status}</div>

                <div className={s.userdata}>{u.status
                    ? <div><img className={s.greenorred} src={green}/></div>
                    : <div><img className={s.greenorred} src={red}/></div>}
                <div>id: {u.id}</div>
                <div>
                    {u.followed
                        ? <div className={s.followed}>У вас в друзьях</div>
                        : <div>Не в друзьях</div>}</div>
                <div>
                    {u.followed
                        ? <Button size="small" className={s.buttonfollow} variant="outlined" color="secondary" disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.unfollowThunk(u.id)
                                  }}>Удалить из друзей</Button>
                        : <Button size="small" className={s.buttonfollow} variant="outlined" color="primary" disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.followThunk(u.id)
                                  }}>Добавить в друзья</Button>}
                </div>
                </div>
            </div>
            </Paper>)}</>)

}
export default UsersList