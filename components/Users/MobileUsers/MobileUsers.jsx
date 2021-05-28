import React from "react";
import {Paginator} from "../../Paginator/Paginator";
import UsersList from ".././UsersList";
import Preloader from "../../Preloader/Preloader";
import s from ".././users.module.css"


let MobileUsers = (props) => {


    return <div className={s.MobileUsers}>
        {props.isFetching ? <Preloader/> : <UsersList users={props.users}
                                                      followingInProgress={props.followingInProgress}
                                                      followThunk={props.followThunk}
                                                      unfollowThunk={props.unfollowThunk}/>}



        <div className={s.paginator}>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}/> </div>
    </div>

}
export default MobileUsers