import React from 'react';
import BasketItem from "./BasketItem";

const BasketList = ({order, handleBasketShow, removeFromBasket, incQuantity, decQuantity}) => {

    const totalPrice = order.reduce((sum, el) => sum + el.price * el.quantity,0)

    return (
        <div className="basket-cart
        ">
            <ul className="collection basket-list z-depth-5">
                <li className="collection-item active">Корзина</li>
                {order.length ? order.map(item => <BasketItem key={item.id} removeFromBasket={removeFromBasket} {...item} incQuantity={incQuantity} decQuantity={decQuantity} />) : <h3>Корзина пуста..</h3>}
                <li className="collection-item active">
                    Общая стоимость: {totalPrice} Руб.
                </li>
                <div className="collection-item">
                    <button className="btn">Оформить</button>
                </div>
                <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
            </ul>
        </div>
    );
};

export default BasketList;