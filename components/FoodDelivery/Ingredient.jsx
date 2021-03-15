import React, {useEffect} from 'react';
import s from './Food.module.css';
import sous from "../../img/sous.jpg"
import tomato from "../../img/tomato.jpg"
import mushroom from "../../img/mushroom.jpg"
import luk from "../../img/luk.jpg"
import peper from "../../img/peper.jpg"
import olive from "../../img/olive.jpg"
import cheese from "../../img/cheese.jpg"
import bacon from "../../img/bacon.jpg"
import ham from "../../img/ham.jpg"


const Ingredient = (props) => {

    let imageIngr
    let plusCount
    let minusCount
    let count
    let ingrPrice


    if (props.name === "Бекон") {
        imageIngr = bacon
        plusCount = props.setBaconCount
        minusCount = props.setBaconCount
        count = props.bacon.count
        ingrPrice = props.bacon.cost
    }
    if (props.name === "Томат") {
        imageIngr = tomato
        plusCount = props.setTomatoCount
        minusCount = props.setTomatoCount
        count = props.tomato.count
        ingrPrice = props.tomato.cost
    }
    if (props.name === "Лук") {
        imageIngr = luk
        plusCount = props.setLukCount
        minusCount = props.setLukCount
        count = props.luk.count
        ingrPrice = props.luk.cost
    }
    if (props.name === "Грибы") {
        imageIngr = mushroom
        plusCount = props.setMushroomCount
        minusCount = props.setMushroomCount
        count = props.mushrooms.count
        ingrPrice = props.mushrooms.cost
    }
    if (props.name === "Оливки") {
        imageIngr = olive
        plusCount = props.setOliveCount
        minusCount = props.setOliveCount
        count = props.olive.count
        ingrPrice = props.olive.cost
    }
    if (props.name === "Сыр") {
        imageIngr = cheese
        plusCount = props.setCheeseCount
        minusCount = props.setCheeseCount
        count = props.cheese.count
        ingrPrice = props.cheese.cost
    }
    if (props.name === "Ветчина") {
        imageIngr = ham
        plusCount = props.setHamCount
        minusCount = props.setHamCount
        count = props.ham.count
        ingrPrice = props.ham.cost
    }
    if (props.name === "Соус") {
        imageIngr = sous
        plusCount = props.setSauceCount
        minusCount = props.setSauceCount
        count = props.sauce.count
        ingrPrice = props.sauce.cost
    }
    if (props.name === "Перец") {
        imageIngr = peper
        plusCount = props.setPepperCount
        minusCount = props.setPepperCount
        count = props.pepper.count
        ingrPrice = props.pepper.cost
    }


    return (
        <div className={s.ingredientsText}>
            <img src={imageIngr} />
            <div>
                <a className={s.ingrButton} onClick={() => {
                    if (count>0) {
                        minusCount(count - 1)
                        props.setPizzaPrice(props.pizzaPrice - ingrPrice)
                    }
                }}>-</a>
                <span className={s.ingrCount}>{count ? count  : "0"}</span>
                <a className={s.ingrButton} onClick={() => {
                    plusCount(count + 1)
                    props.setPizzaPrice(props.pizzaPrice + ingrPrice)
                }}>+</a>
            </div>

            <div className={s.ingrName}>{props.name}</div>
            <div className={s.ingrPrice}>{props.cost} руб</div>
        </div>












    )
}

export default Ingredient;