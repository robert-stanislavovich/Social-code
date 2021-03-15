import React from 'react';
import s from './Food.module.css';
import Preloader from "../Preloader/Preloader";
import PizzaFrame from "./PizzaFrame";


const Price = (props) => {



    return (
        <div className={s.pizzaPrice}>
           {props.price} руб
        </div>












    )
}

export default Price;