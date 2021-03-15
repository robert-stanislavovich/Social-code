import React from 'react';
import s from './Food.module.css';
import PizzaImage from "./PizzaImage";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import mushroom from "../../img/pizza-1.png";
import fungi from "../../img/pizza-2.png";
import hamMushroom from "../../img/pizza-3.png";
import Ingredient from "./Ingredient";
import {
    addToBasket,
    clearAllIngrCount,
    setBaconCount,
    setCheckBoard, setCheeseBoard, setCheeseCount,
    setCostMushroom, setHamCount, setLukCount, setMeatBoard, setMushroomCount, setOliveCount, setPepperCount,
    setPizzaPrice, setSauceCount, setSize31, setSize41, setTomatoCount, setTotalPrice
} from "../../redux/food-reducer";
import cn from "classnames";


const PizzaConstructor = (props) => {

    let currentPizzaImage = null
    let currentPizza = null
    let pizzaPrice = props.pizzaPrice.toFixed(2)




    if (props.currentPizza === "1") {
        currentPizzaImage = mushroom
        currentPizza = props.mushroom

    }

    if (props.currentPizza === "2") {
        currentPizzaImage = fungi
        currentPizza = props.fungi
    }

    if (props.currentPizza === "3") {
        currentPizzaImage = hamMushroom
        currentPizza = props.hamMushroom
    }
    let ingredients =
        props.ingredients.map( p => <Ingredient
            name={p.name}
            cost={p.cost}
            bacon={props.bacon}
            tomato={props.tomato}
            luk={props.luk}
            mushrooms={props.mushrooms}
            olive={props.olive}
            cheese={props.cheese}
            ham={props.ham}
            pepper={props.pepper}
            sauce={props.sauce}

            setBaconCount={props.setBaconCount}
            setTomatoCount={props.setTomatoCount}
            setLukCount={props.setLukCount}
            setMushroomCount={props.setMushroomCount}
            setOliveCount={props.setOliveCount}
            setCheeseCount={props.setCheeseCount}
            setHamCount={props.setHamCount}
            setPepperCount={props.setPepperCount}
            setSauceCount={props.setSauceCount}
            setPizzaPrice={props.setPizzaPrice}
            pizzaPrice={props.pizzaPrice}
            ingrCount={props.ingrCount}

        /> )

    return (


        <div className={s.shadowBox}>
            <div className={s.constructor}>
                <PizzaImage image={currentPizzaImage}/>
                <div className={s.pizzaName}>{currentPizza.name}</div>
                <div className={s.constructorPizzaDescr}>{currentPizza.description}</div>
<a onClick={() => {
    props.setPizzaPrice(currentPizza.price31)
    props.clearAllIngrCount()

    props.setSize31(true)
    props.setSize41(false)
}}
   className={
       cn({[s.orderButtonActive]: props.size31 === true
    }, s.orderButton)
    }>31 cm</a>
<a onClick={() => {
    props.setPizzaPrice(currentPizza.price41)
    props.clearAllIngrCount()
    props.setSize41(true)
    props.setSize31(false)
}} className={
    cn({[s.orderButtonActive]: props.size41 === true
}, s.orderButton)}>41 cm</a>
                <div>
                    <div className={s.constDescrTitle}>Итого:</div> <span className={s.pizzaPrice}>{pizzaPrice ? pizzaPrice : currentPizza.price31} руб</span>
                </div>
                <div>
                    <div className={s.constDescrTitle}>Края:</div>

                    <div><a onClick={() => {
                        props.setMeatBoard(false)
                        props.setCheeseBoard(false)
                        if (props.board.checkBoard === true) {props.setPizzaPrice(props.pizzaPrice - 1.5) }

                        props.setCheckBoard(false)

                    }} className={cn({
                        [s.boardActive]: props.board.checkBoard === false
                    }, s.board) }> Без борта</a></div>
                    <div><a onClick={() => {
                        props.setMeatBoard(true)
                        props.setCheeseBoard(false)

                        if (props.board.checkBoard === false) {props.setPizzaPrice(props.pizzaPrice + 1.5) }

                    }} className={cn({
                        [s.boardActive]: props.board.meat === true
                    }, s.board) }> Борт мясной</a></div>
                    <div><a onClick={() => {
                        props.setCheeseBoard(true)
                        props.setMeatBoard(false)
                        if (props.board.checkBoard === false) {props.setPizzaPrice(props.pizzaPrice + 1.5) }
                    }}
                            className={cn({
                                [s.boardActive]: props.board.cheese === true
                            }, s.board)}> Борт сырный</a></div>
                </div>
                <div>
                    <div className={s.constDescrTitle}>Ингридиенты:</div>
                    <div className={s.ingredients}>{ingredients}</div>
                </div>
                <div className={s.constButtons}>
                    <div>


                        <a className={s.orderButton} onClick={() => {
                            props.setHideWindow(false)
                            props.setSize31(false)
                            props.setSize41(false)
                            props.addToBasket(currentPizza.name + " " + props.pizzaPrice.toFixed(2) + " руб.")
                            props.setTotalPrice(props.totalPrice + props.pizzaPrice)
                        }}>
                            Добавить в корзину
                        </a>
                    </div>
                    <div>
                        <a className={s.orderButton} onClick={() => {
                            props.setHideWindow(false)
                            props.setSize31(false)
                            props.setSize41(false)
                            props.clearAllIngrCount()
                        }}>
                            Выйти
                        </a>
                    </div>
                </div>

            </div>


        </div>


    )
}

let mapStateToProps = (state) => ({


    //Пиццы
    fungi: state.foodPage.fungi,
    hamMushroom: state.foodPage.hamMushroom,
    mushroom: state.foodPage.mushroom,
    //Параметры
    currentPizza: state.foodPage.currentPizza,
    ingredients: state.foodPage.ingredients,
    pizzaPrice: state.foodPage.pizzaPrice,
    hideWindow: state.foodPage.hideWindow,
    size31: state.foodPage.size31,
    size41: state.foodPage.size41,
    board: state.foodPage.board,
    totalPrice: state.foodPage.totalPrice,
    //Ингридиенты
    bacon: state.foodPage.bacon,
    tomato: state.foodPage.tomato,
    luk: state.foodPage.luk,
    mushrooms: state.foodPage.mushrooms,
    olive: state.foodPage.olive,
    cheese: state.foodPage.cheese,
    ham: state.foodPage.ham,
    pepper: state.foodPage.pepper,
    sauce: state.foodPage.sauce,
    ingrCount: state.foodPage.ingrCount,



})



export default compose(
    withRouter,
    connect(mapStateToProps, {setCostMushroom, setCheeseBoard,
        setMeatBoard, setPizzaPrice,
        setCheckBoard, setSize31, setSize41,
        setBaconCount,
        setTomatoCount,
        setLukCount,
        setMushroomCount,
        setOliveCount,
        setCheeseCount,
        setHamCount,
        setPepperCount,
        setSauceCount,
        clearAllIngrCount,
        addToBasket,
        setTotalPrice
    })
) (PizzaConstructor);

