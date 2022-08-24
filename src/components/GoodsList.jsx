import React from 'react';
import GoodsItem from "./GoodsItem";

const GoodsList = ({goods, addToBasket}) => {

    if (!goods.length) {
        return <h3>Нечего нет....</h3>
    }
    return (
        <div className="goods">
            {goods.map(item => <GoodsItem key={item.id} addToBasket={addToBasket} {...item} />)}
        </div>
    );
};

export default GoodsList;