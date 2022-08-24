import React, {useContext} from 'react';
import GoodsItem from "./GoodsItem";
import {ShopContext} from "../store/context";

const GoodsList = () => {

    const { goods } = useContext(ShopContext)

    if (!goods.length) {
        return <h3>Нечего нет....</h3>
    }
    return (
        <div className="goods">
            {goods.map(item => <GoodsItem key={item.id} {...item} />)}
        </div>
    );
};

export default GoodsList;