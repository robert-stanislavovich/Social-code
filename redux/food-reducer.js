import React from "react";

const SET_CURRENT_PIZZA = 'SET_CURRENT_PIZZA';
const HIDE_WINDOW = 'HIDE_WINDOW';
const SET_COST_MUSHROOM = 'SET_COST_MUSHROOM';
const SET_COST_FUNGI = 'SET_COST_FUNGI';
const SET_COST_HAMMUSHROOM = 'SET_COST_HAMMUSHROOM';
const SET_CHEESE_BOARD = 'SET_CHEESE_BOARD';
const SET_MEAT_BOARD = 'SET_MEAT_BOARD';
const SET_PIZZA_PRICE = 'SET_PIZZA_PRICE';
const SET_CHECK_BOARD = 'SET_CHECK_BOARD';
const SET_SIZE_31 = 'SET_SIZE_31';
const SET_SIZE_41 = 'SET_SIZE_41';
const SET_BACON_COUNT = 'SET_BACON_COUNT';
const SET_TOMATO_COUNT = 'SET_TOMATO_COUNT';
const SET_LUK_COUNT = 'SET_LUK_COUNT';
const SET_MUSHROOMS_COUNT = 'SET_MUSHROOMS_COUNT';
const SET_OLIVE_COUNT = 'SET_OLIVE_COUNT';
const SET_CHEESE_COUNT = 'SET_CHEESE_COUNT';
const SET_PEPPER_COUNT = 'SET_PEPPER_COUNT';
const SET_SAUCE_COUNT = 'SET_SAUCE_COUNT';
const SET_HAM_COUNT = 'SET_HAM_COUNT';
const CLEAR_ALL_INGR = 'CLEAR_ALL_INGR';
const ADD_TO_BASKET = 'ADD_TO_BASKET';
const SET_ORDER_CHECK = 'SET_ORDER_CHECK';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';


let initialState = {
    mushroom: {
        id: 1,
        name: "Пицца Грибная",
        weight: "",
        price31: 16.50,
        price31CheeseMeatBoard: 18,
        price41: 19.50,
        price41CheeseMeatBoard: 21,

        description:
            "31 см - 585 гр; 41 см - 935 гр. Соус томатный, сыр, лук репчатый свежий, маслины, томат свежий, пряности, перец свежий, шампиньоны."
    },
    fungi: {
        id: 2,
        name: "Прошутто фунги",
        weight: "",
        price31: 17.50,
        price31CheeseMeatBoard: 19,
        price41: 20.5,
        price41CheeseMeatBoard: 22,
        board:
            {cheese: false, bacon: false}
        ,
        description:
            "31 см - 530 гр; 41 см - 915 гр. Соус томатный, сыр моцарела, ветчина, маслины, пряности, шампиньоны."
    },
    hamMushroom: {
        id: 3,
        name: "Ветчина и грибы",
        weight: "",
        price31: 18,
        price31CheeseMeatBoard: 19.5,
        price41: 21,
        price41CheeseMeatBoard: 22.5,
        board:
            {cheese: false, bacon: false}
        ,
        description:
            "31 см - 590 гр; 41 см - 975 гр. Соус томатный, ветчина, бекон сыр, лук репчатый свежий, маслины, томат свежий, пряности, перец свежий, шампиньоны."
    },

    ingredients: [
        {name: "Бекон", cost: 1.2, count: 0}, {name: "Томат", cost: 1.1, count: 0},
        {name: "Лук", cost: 1.5, count: 0}, {name: "Грибы", cost: 1.7, count: 0},
        {name: "Оливки", cost: 1.1, count: 0}, {name: "Сыр", cost: 2.2, count: 0},
        {name: "Ветчина", cost: 2.5, count: 0}, {name: "Перец", cost: 1.2, count: 0}, {name: "Соус", cost: 1.1, count: 0}
    ],
    board:
        {checkBoard: false, cheese: false, bacon: false},
    bacon: {name: "Бекон", cost: 1.2, count: 0},
    tomato: {name: "Томат", cost: 1.1, count: 0},
    luk: {name: "Лук", cost: 1.5, count: 0},
    mushrooms: {name: "Грибы", cost: 1.7, count: 0},
    olive: {name: "Оливки", cost: 1.1, count: 0},
    cheese: {name: "Сыр", cost: 2.2, count: 0},
    ham: {name: "Ветчина", cost: 2.5, count: 0},
    pepper: {name: "Перец", cost: 1.2, count: 0},
    sauce: {name: "Соус", cost: 1.1, count: 0},
    pizzaPrice: null,
    hideWindow: false,
    currentPizza: "",
    size31: false,
    size41: false,
    ingrCount: null,
    basket: [],
    orderCheck: false,
    totalPrice: null

};




const foodReducer = (state = initialState, action) => {

    switch(action.type) {

        case HIDE_WINDOW: {
            return {...state, hideWindow: action.hideWindow}
        }
        case SET_CURRENT_PIZZA: {
            return {...state, currentPizza: action.currentPizza}
        }
        case SET_PIZZA_PRICE: {
            return {...state, pizzaPrice: action.pizzaPrice}
        }
        case SET_COST_MUSHROOM: {
            return {...state, mushroom: {...state.mushroom, price: action.cost}}
        }
        case SET_CHEESE_BOARD: {
            return {...state, board: {...state.board, cheese: action.cheese, checkBoard: true}}
        }
        case SET_MEAT_BOARD: {
            return {...state, board: {...state.board, meat: action.meat, checkBoard: true}}
        }
        case SET_CHECK_BOARD: {
            return {...state, board: {...state.board, checkBoard: action.checkBoard}}
        }
        case SET_COST_FUNGI: {
            return {...state, currentPizza: action.currentPizza}
        }
        case SET_COST_HAMMUSHROOM: {
            return {...state, currentPizza: action.currentPizza}
        }
        case SET_SIZE_31: {
            return {...state, size31: action.size31}
        }
        case SET_SIZE_41: {
            return {...state, size41: action.size41}
        }
        case SET_BACON_COUNT: {
            return {...state, bacon: {...state.bacon, count: action.count}}
        }
        case SET_TOMATO_COUNT: {
            return {...state, tomato: {...state.tomato, count: action.count}}
        }
        case SET_LUK_COUNT: {
            return {...state, luk: {...state.luk, count: action.count}}
        }
        case SET_MUSHROOMS_COUNT: {
            return {...state, mushrooms: {...state.mushrooms, count: action.count}}
        }
        case SET_OLIVE_COUNT: {
            return {...state, olive: {...state.olive, count: action.count}}
        }
        case SET_CHEESE_COUNT: {
            return {...state, cheese: {...state.cheese, count: action.count}}
        }
        case SET_HAM_COUNT: {
            return {...state, ham: {...state.ham, count: action.count}}
        }
        case SET_PEPPER_COUNT: {
            return {...state, pepper: {...state.pepper, count: action.count}}
        }
        case SET_SAUCE_COUNT: {
            return {...state, sauce: {...state.sauce, count: action.count}}
        }
        case CLEAR_ALL_INGR: {
            return {...state,
                sauce: {...state.sauce, count: 0},
                pepper: {...state.pepper, count: 0},
                ham: {...state.ham, count: 0},
                cheese: {...state.cheese, count: 0},
                olive: {...state.olive, count: 0},
                mushrooms: {...state.mushrooms, count: 0},
                luk: {...state.luk, count: 0},
                tomato: {...state.tomato, count: 0},
                bacon: {...state.bacon, count: 0},
                ingrCount: null
            }
        }
        case ADD_TO_BASKET: {
            return {...state, basket: [...state.basket, action.basket + "    "]}
        }
        case SET_ORDER_CHECK: {
            return {...state, orderCheck: action.orderCheck}
        }
        case SET_TOTAL_PRICE: {
            return {...state, totalPrice: action.totalPrice}
        }


        default:
            return state;
    }
}


export const setHideWindow = (hideWindow) => ({type: HIDE_WINDOW, hideWindow})
export const setCurrentPizza = (currentPizza) => ({type: SET_CURRENT_PIZZA, currentPizza})
export const setCostMushroom = (cost) => ({type: SET_COST_MUSHROOM, cost})
export const setCheeseBoard = (cheese) => ({type: SET_CHEESE_BOARD, cheese})
export const setMeatBoard = (meat) => ({type: SET_MEAT_BOARD, meat})
export const setPizzaPrice = (pizzaPrice) => ({type: SET_PIZZA_PRICE, pizzaPrice})
export const setCheckBoard = (checkBoard) => ({type: SET_CHECK_BOARD, checkBoard})
export const setSize31 = (size31) => ({type: SET_SIZE_31, size31})
export const setSize41 = (size41) => ({type: SET_SIZE_41, size41})
export const setBaconCount = (count) => ({type: SET_BACON_COUNT, count})
export const setTomatoCount = (count) => ({type: SET_TOMATO_COUNT, count})
export const setLukCount = (count) => ({type: SET_LUK_COUNT, count})
export const setMushroomCount = (count) => ({type: SET_MUSHROOMS_COUNT, count})
export const setOliveCount = (count) => ({type: SET_OLIVE_COUNT, count})
export const setCheeseCount = (count) => ({type: SET_CHEESE_COUNT, count})
export const setHamCount = (count) => ({type: SET_HAM_COUNT, count})
export const setPepperCount = (count) => ({type: SET_PEPPER_COUNT, count})
export const setSauceCount = (count) => ({type: SET_SAUCE_COUNT, count})
export const addToBasket = (basket) => ({type: ADD_TO_BASKET, basket})
export const clearAllIngrCount = () => ({type: CLEAR_ALL_INGR})
export const setOrderCheck = (orderCheck) => ({type: SET_ORDER_CHECK, orderCheck})
export const setTotalPrice = (totalPrice) => ({type: SET_TOTAL_PRICE, totalPrice})







export default foodReducer;