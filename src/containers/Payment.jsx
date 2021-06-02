import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { PayPalButton } from "react-paypal-button";
import AppContext from "../context/AppContext";
import '../assets/styles/components/Payment.css'

const Payment = () => {
    const { state, addNewOrder } = useContext(AppContext)
    const { cart, buyer } = state;
    const history = useHistory();
    const paypalOptions = {
        clientId:'sb',
        intent:'capture',
        currency:'USD'

    }
    const paypalButtonStyles = {
        layout:'vertical',
        shape:'rect'
    }

    const handlePaymentSuccess = data => {        
        if(data.status === 'COMPLETED'){
            const newOrder = {
                buyer,
                product:cart,
                payment:data
            }
            addNewOrder(newOrder);  
            history.push('/checkout/success')  
        }
    }

    return (
        <div className="payment">
            <div className="payment-content">
                <h3>Resumen del pedido:</h3>
                {cart.map(p => (
                    <div className="payment-item" key={p.title}>
                        <div className="payment-element">
                            <h4>{p.title}</h4>
                            <span className="item-price">${p.price}</span>
                        </div>
                    </div>
                ))}
                <div className="payment-button">
                    <PayPalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={paypalButtonStyles}
                        amount={cart.reduce( (a,b) => a + b.price, 0)}
                        onPaymentStart={() => console.log('Start payment')}
                        onPaymentSuccess = { data => handlePaymentSuccess(data) }
                        onPaymentError = { () => console.log('Error')}
                        onPaymentCancel = { () => console.log('Cancel')}
                    />
                </div>
            </div>
            <div className="information-sidebar">
                <h3>Pedido:</h3>
                {cart.map(p => (
                    <div className="information-element" key={p.title}>
                        <h4>{p.title}</h4>
                        <span>{p.price}</span>
                    </div>
                ))}
            </div>
        </div>

    )
};

export default Payment;