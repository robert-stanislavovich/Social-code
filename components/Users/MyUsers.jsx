import React from "react";
import {Paginator} from "../Paginator/Paginator";
import UsersList from "./UsersList";
import Preloader from "../Preloader/Preloader";
import s from "./users.module.css"
import UsersInfo from "./UsersInfo";

let MyUsers = (props) => {


    return <div> <div className={s.paginator}><Paginator currentPage={props.currentPage}
                                               onPageChanged={props.onPageChanged}
                                               totalUsersCount={props.totalUsersCount}
                                               pageSize={props.pageSize}/> </div>
                                               <div className={s.users}>
        <div>



            <div className={s.userslist}>
            {props.isFetching ? <Preloader/> : <UsersList users={props.users}
                                                          followingInProgress={props.followingInProgress}
                                                          followThunk={props.followThunk}
                                                          unfollowThunk={props.unfollowThunk}/>}
            </div>
        </div>
        <div >
            <UsersInfo totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}/>
        </div>
                                               </div>
    </div>

}
export default MyUsers