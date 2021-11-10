import React from 'react';

const Comida = ({comidaProp}) => {

    return (
        <div className="text-center">
            <img 
                className="invisible rounded"
                src={comidaProp.strMealThumb}
                alt='imagen de plato'
                width="200"></img><br/>
            
            <h3 className="display-4">{comidaProp.strMeal}<br/>  
                <small className="text-muted invisible"> ( {comidaProp.strArea} )
                </small>
            </h3><br/>
            
            <h4 className="invisible text-uppercase" >Receta  &#9997;</h4><br/>
            
            <p className="container border bg-secondary bg-opacity-10">
                {comidaProp.strInstructions}
            </p>

            <p>datos de control. id: {comidaProp.idMeal} - cat: {comidaProp.strCategory}</p>
        </div>
    );
}
 
export default Comida;
