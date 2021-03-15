import React from "react";
import styles from './users.module.css'
import userPhoto from '../../img/userlogo.jpg'
import {NavLink} from "react-router-dom";
import * as axios from "axios";



let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);


    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div className={styles.pagination}>{pages.map(p => {
            return <span><a className={props.currentPage == p && styles.active}
                            onClick={(e) => {
                                props.onPageChanged(p);
                            }}>{p}</a></span>
        })}
        </div>


        {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={styles.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials: true,
                                    headers: {"API-KEY": "e51fd1f5-d832-4d10-9585-fb574c384dda"}
                                }).then(response => {if (response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }}>Unfollow</button>
                            : <button onClick={() => {axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {"API-KEY": "e51fd1f5-d832-4d10-9585-fb574c384dda"}
                                }).then(response => {if (response.data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                })


                            }}>Follow</button>}

                    </div>
                </span>
            <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.id}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
        </div>)
        }
    </div>

}
export default Users;