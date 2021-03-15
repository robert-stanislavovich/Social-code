import React from 'react';
import s from './Films.module.css';
import {NavLink, Route} from "react-router-dom";


const Films = () => {
    return (<div>
            <NavLink to="/films/1"><img className={s.poster} src={"https://static.hdrezka.ac/i/2020/6/4/n2f00943dc815rq13i50k.png"}/></NavLink>
           <NavLink to="/films/2"><img src={"https://d2lhpxxb8i4w72.cloudfront.net/movie/300/1639143.jpg?1601328903"}/></NavLink>
            <NavLink to="/films/3"><img className={s.poster} src={"https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/60d4be86-6fdc-4f29-82da-9476d654f4af/600x900"}/></NavLink>

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
    )
}

export default Films;