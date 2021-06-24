import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Card from '../components/Card';
import '../assets/styles/components/Cards.css';

const Cards = () => {
    const { state } = useContext(AppContext);
    const { cards } = state;
    return (
        <div className='cardsContainer'>
            {cards.map(c => <Card
                                key={c.id}
                                id={c.id}
                                name={c.name}
                                today={c.today || 0}
                                week={c.week || 0}
                                month={c.month || 0}
                            />)}            
        </div>
    );
}

export default Cards;