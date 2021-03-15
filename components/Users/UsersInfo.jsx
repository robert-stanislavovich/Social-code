import React from "react";
import s from "./users.module.css"

let UsersInfo = (props) => {


    return <div>

        <div>Всего пользователей: {props.totalUsersCount}</div>

<div>Показано {props.pageSize} пользователей</div>

        <div>Вы на {props.currentPage}-ой странице</div>



    </div>

}
export default UsersInfo