import React, {useEffect, useContext} from 'react';
import {ShopContext} from "../store/context";

const Alert = () => {

    const { alertName, closeAlert } = useContext(ShopContext)

    useEffect(() => {
        const timer = setTimeout(closeAlert, 1500)
        return () => clearTimeout(timer)
        //eslint-disable-next-line
    }, [alertName])

    return (
        <div className="toast-container">
            <div className="toast">{alertName} добавлен в корзину</div>
        </div>
    );
};

export default Alert;