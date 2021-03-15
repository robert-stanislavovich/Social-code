import {NavLink} from "react-router-dom";
import React from "react";
import userPhoto from '../../img/userlogo.jpg'
import green from '../../img/greengalka.png'
import red from '../../img/redkrest.png'
import s from './users.module.css'


let UsersList = (props) => {



    return <div> <div>{props.users.map(u =>
            <div className={s.user}>
                <div>
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
                <div>№:{u.id}</div>
                <div>
                    {u.followed
                        ? <div className={s.followed}>У вас в друзьях</div>
                        : <div>Не в друзьях</div>}</div>
                <div>
                    {u.followed
                        ? <button className={s.iksweb} disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.unfollowThunk(u.id)
                                  }}>Удалить из друзей</button>
                        : <button className={s.iksweb} disabled={props.followingInProgress.some(id => id === u.id)}
                                  onClick={() => {
                                      props.followThunk(u.id)
                                  }}>Добавить в друзья</button>}
                </div></div>
            </div></div>)}</div>

    </div>

}
export default UsersList