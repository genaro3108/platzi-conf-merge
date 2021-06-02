import React, { useContext } from 'react';
import Map from "../components/Map";
import useGoogleAddress from "../hooks/useGoogleAddress"
import AppContext from "../context/AppContext";
import '../assets/styles/components/Success.css'


const Success = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state;
    const location = useGoogleAddress(buyer[0].address);

    return (
        <div className="success">
            <div className="success-content">
                <h2>{buyer[0].name} gracias por tu compra!</h2>
                <span>El pedido llegara en:</span>
                <div className="success-map">
                    <Map location={location} />
                </div>
            </div>
        </div>
    )
};

export default Success;