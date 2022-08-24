import React, {useEffect} from 'react';

const Alert = ({name = '', closeAlert}) => {

    useEffect(() => {
        const timer = setTimeout(closeAlert, 3000)
        return () => clearTimeout(timer)
    }, [name])

    return (
        <div className="toast-container">
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    );
};

export default Alert;