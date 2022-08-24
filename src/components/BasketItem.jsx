import React from 'react';

const BasketItem = ({id, name, price, quantity, removeFromBasket, incQuantity, decQuantity}) => {
    return (
        <li className="collection-item">
            {name}
            <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>remove</i>
            X {quantity}
            <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>add</i>
            = {price} Руб.
            <span className="secondary-content cursor" onClick={() => removeFromBasket(id)}>
                <i className="material-icons">close</i>
            </span>
        </li>
    );
};

export default BasketItem;