import React from 'react';
import s from './Food.module.css';
import Preloader from "../Preloader/Preloader";
import PizzaFrame from "./PizzaFrame";
import cn from "classnames"
import PizzaConstructor from "./PizzaConstructor";
import fungi from "../../img/pizza-2.png";
import hamMushroom from "../../img/pizza-3.png";
import mushroom from "../../img/pizza-1.png";
import {setOrderCheck} from "../../redux/food-reducer";



const Food = (props) => {


    let currentPizza = null
    if (props.currentPizza === "1") {
        currentPizza = mushroom
    }
    if (props.currentPizza === "2") {
        currentPizza = fungi
    }
    if (props.currentPizza === "3") {
        currentPizza = hamMushroom
    }
    let basket = props.basket.map(b => <div>- {b}</div>)

    return (


        <div className={s.foodWindow}>
            <div>
                {props.hideWindow ? <PizzaConstructor
                    setHideWindow={props.setHideWindow}
                    pizzaImage={currentPizza}/> : ""}

                <div className={s.foodList}>
                    <PizzaFrame pizza={props.pizza}
                                ingredients={props.ingredients}
                                pizzaPrice={props.pizzaPrice}
                                mushroom={props.mushroom}
                                fungi={props.fungi}
                                hamMushroom={props.hamMushroom}
                                setHideWindow={props.setHideWindow}
                                hideWindow={props.hideWindow}
                                setCurrentPizza={props.setCurrentPizza}
                                setPizzaPrice={props.setPizzaPrice}
                                setSize31={props.setSize31}
                                setSize41={props.setSize41}
                    />
                </div>
            </div>


            <div className={s.foodBasket}>КОРЗИНА:
                <div className={s.foodBasketList}>
                    {props.basket.length>0 ? <div>{basket}</div> : ""}
                </div>
                <div>
                    {props.basket.length>0
                        ? <div>
                            Итого: {props.totalPrice.toFixed(2)} руб.
                        </div>
                        : ""}
                </div>
                <div className={s.foodBasketList}>
                    {props.basket.length>0
                        ? <a className={s.orderButton} onClick={() => {
                        props.setOrderCheck(true)
                        }
                        }>
                        Оформить заказ
                    </a>
                        : ""}
                </div>

            </div>



        </div>









    )
}

export default Food;