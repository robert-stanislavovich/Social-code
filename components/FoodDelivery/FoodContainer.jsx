import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Food from "./Food";
import {
    setCurrentPizza,
    setHideWindow,
    setOrderCheck,
    setPizzaPrice,
    setSize31,
    setSize41
} from "../../redux/food-reducer";
import Order from "./Order";


class FoodContainer extends React.Component {


    componentDidMount() {


    }

    componentDidUpdate(prevProps, prevState, snapshot) {



    }


    render () {
        return <>{this.props.orderCheck
            ? <Order
                basket={this.props.basket}
                totalPrice={this.props.totalPrice}
            />
            : <Food ingredients={this.props.ingredients}
                                                     pizzaPrice={this.props.pizzaPrice}
                                                     mushroom={this.props.mushroom}
                                                     fungi={this.props.fungi}
                                                     hamMushroom={this.props.hamMushroom}
                                                     setHideWindow={this.props.setHideWindow}
                                                     hideWindow={this.props.hideWindow}
                                                     setCurrentPizza={this.props.setCurrentPizza}
                                                     currentPizza={this.props.currentPizza}
                                                     setPizzaPrice={this.props.setPizzaPrice}
                                                     size31={this.props.size31}
                                                     size41={this.props.size41}
                                                     setSize31={this.props.setSize31}
                                                     setSize41={this.props.setSize41}
                                                     board={this.props.board}
                                                     basket={this.props.basket}
                                                     setOrderCheck={this.props.setOrderCheck}
                                                     totalPrice={this.props.totalPrice}
        />}


        </>
    }
}

let mapStateToProps = (state) => ({
    ingredients: state.foodPage.ingredients,
    pizzaPrice: state.foodPage.pizzaPrice,
    fungi: state.foodPage.fungi,
    hamMushroom: state.foodPage.hamMushroom,
    mushroom: state.foodPage.mushroom,
    hideWindow: state.foodPage.hideWindow,
    currentPizza: state.foodPage.currentPizza,
    size31: state.foodPage.size31,
    size41: state.foodPage.size41,
    board: state.foodPage.board,
    basket: state.foodPage.basket,
    orderCheck: state.foodPage.orderCheck,
    totalPrice: state.foodPage.totalPrice,




})



export default compose(
    withRouter,
    connect(mapStateToProps, {setHideWindow, setCurrentPizza,
        setPizzaPrice, setSize31, setSize41,
        setOrderCheck
    })
) (FoodContainer);