import React from 'react';
import s from './Food.module.css';
import Preloader from "../Preloader/Preloader";
import PizzaImage from "./PizzaImage";


const PizzaItem = (props) => {



    return (





        <div className={s.pizzaImageWindow}>
<PizzaImage image={props.pizzaImage}/>
<div className={s.pizzaNameDescr}>
    <div className={s.pizzaName}>{props.pizza.name}</div>
    <div className={s.pizzaDescription}>{props.pizza.description}
    </div>
</div>


        </div>









    )
}

export default PizzaItem;