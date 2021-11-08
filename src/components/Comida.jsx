import React from 'react';

const Comida = ({comidaProp}) => {

    return (
        <div>
            <img 
                src={comidaProp.strMealThumb}
                alt='imagen de plato'
                width="200"></img><br/>
            
            <h3>{comidaProp.strMeal}  {comidaProp.idMeal}</h3><br/>

            
            <h4>Receta</h4><br/>
            
            <p>
                {comidaProp.strInstructions}
            </p>

        </div>
    );
}
 
export default Comida;
