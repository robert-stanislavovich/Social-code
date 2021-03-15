import React from "react";
import {Paginator} from "../Paginator/Paginator";
import Preloader from "../Preloader/Preloader";
import s from './chat.module.css'
import ChatList from "./ChatList";

import ProfileStatus from "../Profile/ProfileInfo/ProfileStatus";

let Chat = (props) => {
    if (!props.profile) {
        return <Preloader /> //если не сделать такую предзагрузку, то при обновлении страницы profile не будет успевать диспатчиться, и приложение упадёт с ошибкой profile - undefained
    }

    return <div> <div className={s.paginator}><Paginator currentPage={props.currentPage}
                           onPageChanged={props.onPageChanged}
                           totalUsersCount={props.totalUsersCount}
                                                         pageSize={props.pageSize}/></div>
        {props.isFetching ? <Preloader/> : <div>
            <div>
                <div>
                    <div className={s.me}>
                        <span className={s.myPhoto}>
                            <img className={s.userPhoto} src={props.profile.photos.small}/>
                        </span>
                        <div className={s.mymessage}>
                            <div className={s.myName}>
                                {props.profile.fullName}
                            </div>
                            <div>
                                <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.userslist}>
                        <ChatList users={props.users}
                                  followingInProgress={props.followingInProgress}
                                  followThunk={props.followThunk}
                                  unfollowThunk={props.unfollowThunk}/>
                    </div>
                </div>


            </div>
        </div>}














        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>

}
export default Chat