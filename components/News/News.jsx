import React from 'react'
import s from "../Dialogs/Dialogs.module.css";
import DialogItem from "../Dialogs/DialogItem/DialogsItem";
import Message from "../Dialogs/Message/Message";
import Post from "./Posts/Post";


const News = () => {
    return <div>
        <div>
            <Post name='Первый пост' id='1'/>
            <Post name='Второй пост' id='2'/>
            <Post name='Третий пост' id='3'/>
            <Post name='Четвертый пост' id='4'/>
        </div>


    </div>


}
export default News;