import React from 'react';

const Comida = ({comidaProp}) => {

    return (
        <div className="text-center">
            <img 
                className="invisible"
                src={comidaProp.strMealThumb}
                alt='imagen de plato'
                width="200"></img><br/>
            
            <h3>{comidaProp.strMeal}  </h3><br/>
            
            <h4 className="invisible" >Receta</h4><br/>
            
            <p>
                {comidaProp.strInstructions}
            </p>

            <p>datos de control. id: {comidaProp.idMeal} - cat: {comidaProp.strCategory}</p>
        </div>
    );
}
 
export default Comida;
