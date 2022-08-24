import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL} from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Card from "./Card";
import BasketList from "./BasketList";
import Alert from "./Alert";

const Shop = () => {

    const [goods, setGoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    const [isBasketShow, setBasketShow] = useState(false)
    const [alertName, setAlertName] = useState('')

    const addToBasket = (item) => {

        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

        if (itemIndex < 0) {
            const newItem = {
                ...item, quantity: 1
            }

            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                  return {
                      ...orderItem,
                      quantity: orderItem.quantity + 1
                  }
                } else {
                    return orderItem
                }
            })

            setOrder(newOrder)
        }
        setAlertName(item.name)
    }

    const removeFromBasket = (id) => {
        const newOrder = order.filter(el => el.id !== id)
        setOrder(newOrder)
    }

    const incQuantity = (id) => {
        const newOrder = order.map(el => {
            if (el.id === id) {
                const newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity: newQuantity
                }
            }
            return el
        })
        setOrder(newOrder)
    }

    const decQuantity = (id) => {
        const newOrder = order.map(el => {
            if (el.id === id) {
                const newQuantity = el.quantity - 1
                return {
                    ...el,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            }
            return el
        })
        setOrder(newOrder)
    }

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow)
    }

    const closeAlert = () => {
        setAlertName('')
    }

    useEffect(() => {
        fetch(API_URL, {
            headers: {
                Authorization:API_KEY
            }
        })
            .then(data => data.json())
            .then(data => {
                data.featured && setGoods(data.featured)
                setLoading(false)
            })
            .catch(err => console.error('ERROR: ' . err))
    }, [])

    return (
        <main className="container content">
            <Card quantity={order.length} handleBasketShow={handleBasketShow} />
            {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />}
            {isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity} />}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    );
};

export default Shop;