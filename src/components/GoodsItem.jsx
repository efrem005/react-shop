import React, {useContext} from 'react';
import {ShopContext} from "../store/context";

const GoodsItem = ({id, name, description, price, full_background}) => {

    const { addToBasket } = useContext(ShopContext)

    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name}/>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBasket({id, name, price})}>Купить</button>
                <span className="right" style={{fontSize: '1.8rem'}}>{price} Руб.</span>
            </div>
        </div>
    );
};

export default GoodsItem;