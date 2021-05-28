import React from 'react';
import s from './Food.module.css';


const Order = (props) => {



let basket = props.basket.map(b => <div>- {b}</div>)


    return (<div className={s.orderWindow}>
<div>
    <div className={s.constDescrTitle}>
        Ваш заказ:
    </div>

        <div className={s.pizzaDescription}>
            {props.basket.length>0 ? <div>{basket}</div> : ""}
        </div>
    <div className={s.foodBasket}>
        Сумма итого: {props.totalPrice.toFixed(2)} руб.
    </div>

</div>


        </div>









    )
}

export default Order;