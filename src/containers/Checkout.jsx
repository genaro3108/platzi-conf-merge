import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext';
import '../assets/styles/components/Checkout.css'

const Checkout = () => {
    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;

    // Si se quiere mandar llamar la funcion explicita desde JSX
    /* const handleRemoveFromCart = product => () => {
        removeFromCart(product)
    } */
    const handleRemoveFromCart = (product,index) => {
        removeFromCart(product,index)
    }

    return (
        <div className="checkout">        
            <div className="checkout-content">
                <h3>{cart.length > 0 ? 'Lista de pedidos' : 'Sin pedidos'}</h3>
                {
                    cart.map((p , index) => (
                        <div className="checkout-item" key={p.id + index}>
                            <div className="checkout-element">
                                <h4>{p.title}</h4>
                                <span>${p.price}</span>
                                <button type="button" onClick={() => handleRemoveFromCart(p,index)}>
                                    <i className="fas fa-trash-alt" />
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            {cart.length > 0 && (
                <div className="checkout-sidebar">                   
                    <h3>Precio total: $ {cart.reduce( (a, b) => a + b.price, 0 ) }</h3> 
                    <Link to="/checkout/information">
                        <button type="button">Continuar</button>
                    </Link>
                </div>
            )}

        </div>
    )
};

export default Checkout;