import React from 'react';

const Card = ({id,name,today,week,month}) => {
    let x = 0;
    return (
       <div className='card'>
           <span>Imagen</span>
           <span>{name}</span>
           <p>
               <span>Hoy</span>
               <span>{today}</span>
           </p>
           <p>
               <span>Semana</span>
               <span>{week}</span>
           </p>
           <p>
               <span>Mes</span>
               <span>{month}</span>
           </p>
           <p>
               <span>Totales</span>
               <span>{today + week + month}</span>
           </p>
       </div>
    );
}

export default Card;