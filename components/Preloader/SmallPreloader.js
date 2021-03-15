import preload from "../../img/Curve-Loading.gif";
import React from "react";
import pre from './Preloader.module.css';



let SmallPreloader = (props) => {
    return <div className={pre.smallpreloader}>
        <img src={preload}/>
        </div>
}


export default SmallPreloader;