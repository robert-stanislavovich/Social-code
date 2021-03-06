import {authThunk} from "./auth-reducer";

const SET_INIT = 'SET_INIT';
const SET_BURGER = 'SET_BURGER';



let initialState = {
    init: false,
    burger: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INIT:
            return {
                ...state,
               init: true
            }
        case SET_BURGER:
            return {
                ...state,
                burger: action.burger
            }
        default:
            return state;
    }
}


export const InitSucces = () =>  ({type: SET_INIT})
export const openBurger = (burger) =>  ({type: SET_BURGER, burger})

export const InitApp = () => (dispatch) =>  {
    let promise = dispatch(authThunk()) //чтобы это сработало, в authThunk должен быть return перед запросом
    //let promise2 = dispatch(что-то())
    //let promise3 = dispatch(что-то())


    Promise.all([promise]).then(()=>{         //если нужно диспатчить несколько экшенов до инитицализации, то их просто можно добавить в массив[promise, promise2, ....]
        dispatch(InitSucces())                      //благодаря этим строкам, приложением не проинитиализируется, пока не придёт ответ от всех запросов в диспатчах до InitSucces
    })                                              //это даёт возможность показать прелоудер вместо всяких морганий пока контент не загрузился
}






export default appReducer;