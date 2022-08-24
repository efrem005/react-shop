import { createContext, useReducer } from 'react';
import { reducer } from './Reducer';

export const ShopContext = createContext()

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
};

export const ContextProvider = ({children}) => {

    const [value, dispatch] = useReducer(reducer, initialState)

    value.setGoods = (data) => {
        dispatch({type: "SET_GOODS", payload: data})
    }

    value.closeAlert = () => {
        dispatch({type: 'CLOSE_ALERT'})
    }

    value.removeFromBasket = (id) => {
        dispatch({type: "REMOVE_FROM_BASKET", payload: id})
    }

    value.addToBasket = (item) => {
        console.log(item)
        dispatch({type: "ADD_TO_BASKET", payload: item})
    }

    value.incQuantity = (id) => {
        dispatch({type: "INC_QUANTITY", payload: id})
    }

    value.decQuantity = (id) => {
        dispatch({type: "DEC_QUANTITY", payload: id})
    }

    value.handleBasketShow = () => {
        dispatch({type: "TOGGLE_BASKET"})
    }

    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}