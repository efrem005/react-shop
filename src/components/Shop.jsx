import React, {useContext, useEffect } from 'react';
import {API_KEY, API_URL} from "../config";
import {ShopContext} from '../store/context'
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Card from "./Card";
import BasketList from "./BasketList";
import Alert from "./Alert";

const Shop = () => {

    const { setGoods, loading, isBasketShow, alertName } = useContext(ShopContext)

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization:API_KEY
            }
        })
            .then(data => data.json())
            .then(data => {
                data.featured && setGoods(data.featured)
            })
            .catch(err => console.error(`ERROR: ${err}`))
    }, [setGoods])

    return (
        <main className="container content">
            <Card />
            {loading ? <Preloader /> : <GoodsList />}
            {isBasketShow && <BasketList />}
            {alertName && <Alert />}
        </main>
    );
};

export default Shop;