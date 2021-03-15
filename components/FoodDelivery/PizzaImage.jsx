import React from 'react';
import s from './Food.module.css';



const PizzaImage = (props) => {



    return (

<div className={s.pizzaImage}>


<img src={props.image}/>

</div>





    )
}

export default PizzaImage;