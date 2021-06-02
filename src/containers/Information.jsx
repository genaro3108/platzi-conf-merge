import React, { useContext, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom'
import AppContext from "../context/AppContext";
import '../assets/styles/components/Information.css';


const Information = () => {
    const { state, addToBuyer } = useContext(AppContext);
    const { cart } = state;
    const history = useHistory();
    const form = useRef(null);

    const handleSubmit = () =>{
        const formData = new FormData(form.current);
        const buyer = {
            'name':formData.get('name'),
            'email':formData.get('email'),
            'address':formData.get('address'),
            'int':formData.get('int'),
            'city':formData.get('city'),
            'country':formData.get('country'),
            'state':formData.get('state'),
            'zip':formData.get('zip'),
            'phone':formData.get('phone')
        }
        addToBuyer(buyer);
        history.push('/checkout/payment')
    }

    return (
        <div className="information">
            <div className="information-content">
                <div className="informatio-head">
                    <h2>Información de contacto</h2>
                </div>
                <div className="information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre completo" name="name" />
                        <input type="text" placeholder="Correo electroncio" name="email" />
                        <input type="text" placeholder="Dirección" name="address" />
                        <input type="text" placeholder="Interior" name="int" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="Pais" name="country" />
                        <input type="text" placeholder="Estado" name="state" />
                        <input type="text" placeholder="Codigo postal" name="zip" />
                        <input type="text" placeholder="Telefono" name="phone" />
                    </form>
                </div>
                <div className="information-buttons">
                    <div className="information-back">
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                    <div className="information-next">
                        <button type="button" onClick={handleSubmit}>Pagar</button>
                    </div>
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


export default Information;