import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state,setState] = useState(initialState);

    const addToCart = payload => {
        setState({
            ...state,
            cart:[...state.cart, payload]
        })
    }

    const removeFromCart = (payload, index) => {
        setState({
            ...state,
            cart:[...state.cart.filter( (i, indexCurrent) => i.id !== payload.id || index !== indexCurrent)]
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer:[...state.buyer,payload]
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            cart:[],
            orders:{...state.orders,payload}
        })
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state
    }
};

export default useInitialState;