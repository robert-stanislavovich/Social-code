import React from 'react';
import s from './Food.module.css';
import Preloader from "../Preloader/Preloader";
import PizzaItem from "./PizzaItem";
import Price from "./Price";
import fungi from "../../img/pizza-2.png";
import hamMushroom from "../../img/pizza-3.png";
import mushroom from "../../img/pizza-1.png";


const PizzaFrame = (props) => {






    return (<div>
            <div className={s.pizzaFrame}>
                <PizzaItem pizza={props.mushroom}
                           ingredients={props.ingredients}
                           pizzaPrice={props.pizzaPrice}
                           pizzaImage={mushroom}

                />
                <Price price={props.mushroom.price31}/>
                <a onClick={() => {
                    props.setHideWindow(true)
                props.setCurrentPizza("1")
                props.setPizzaPrice(props.mushroom.price31)
                props.setSize31(true)}} className={s.orderButton}>Заказать</a>
            </div>
            <div className={s.pizzaFrame}>
                <PizzaItem pizza={props.fungi}
                           ingredients={props.ingredients}
                           pizzaPrice={props.pizzaPrice}
                           pizzaImage={fungi}

                />
                <Price price={props.fungi.price31}/>
                <a onClick={() => {
                    props.setHideWindow(true)
                    props.setCurrentPizza("2")
                    props.setPizzaPrice(props.fungi.price31)
                    props.setSize31(true)
                }} className={s.orderButton}>Заказать</a>
            </div>
            <div className={s.pizzaFrame}>
                <PizzaItem pizza={props.hamMushroom}
                           ingredients={props.ingredients}
                           pizzaPrice={props.pizzaPrice}
                           pizzaImage={hamMushroom}

                />
                <Price price={props.hamMushroom.price31}/>
                <a onClick={() => {
                    props.setHideWindow(true)
                    props.setCurrentPizza("3")
                    props.setPizzaPrice(props.hamMushroom.price31)
                    props.setSize31(true)
                }} className={s.orderButton}>Заказать</a>
            </div>

        </div>









    )
}

export default PizzaFrame;