import React, {useContext} from 'react';
import {ShopContext} from "../store/context";

const Card = () => {

    const { order, handleBasketShow } = useContext(ShopContext)

    return (
        <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
            <i className="material-icons">shopping_cart</i>
            {order.length ? <span className="cart-quantity">{order.length}</span> : null}
        </div>
    );
};

export default Card;