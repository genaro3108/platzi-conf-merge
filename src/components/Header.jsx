import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../assets/styles/components/Header.css';
import gimsaLogo from '../assets/images/gimsa-logo.png'

const Header = () => {
    const {state} = useContext(AppContext);     
    return (
        <div className="header">
            <Link to="/">
                <p className="headerTitle">Panel de control del asistente GIMSA</p>                
            </Link>           
            <img src={gimsaLogo} alt="log" />
        </div>
    )
};

export default Header;