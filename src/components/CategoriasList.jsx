import React, { useState } from 'react';
import { Fragment } from 'react';
import BtnConsulta from './BtnConsulta';

export function CategoriasList({categorias}) {

    const [activeCategories, setActiveCategories] = useState([]);
    const [idConsulta, setIdConsulta] = useState(0);
 /*
    var idConsulta = 0;

    const setIdConsulta = (id) => {
        idConsulta = id;
    }
*/
// funciones que agregan y eliminan categorias a la lista de activas   
    const addCategory = (cat) => {
        setActiveCategories([...activeCategories, cat]);
        
    };    

    const removeCategory = (cat) => {
        const newActiveCategories = activeCategories.filter((c) => c !== cat);
        setActiveCategories(newActiveCategories);

    };

//funcion para limpiar la lista de categorias, pone id en random, y desactiva botones
    const clearCategories = () => {
        setActiveCategories([]);
        setIdConsulta(0);
        if (document.getElementsByClassName('active').length) {
            clearButtons();
        }
        
    }

// limpia los botones
    const clearButtons = () => {
        var buttons = document.getElementsByClassName('active');
        buttons[0].classList.remove('active')
        if (buttons[0]) clearButtons();
    }



// funcion para activar o desactivar las categorias en donde se realiza la busqueda
    function toggle(cat, callback) {
        activeCategories.includes(cat) ? removeCategory(cat) : addCategory(cat);
        callback();
    }

// consulta un id random de las categorias o pone el id en 0
    function getId() {
        activeCategories.length > 0 ? consultarEn(activeCategories) : setIdConsulta(0);

    }


        

//recibe una cat y setea el estado con un id al azar
    const consultarEn = async (activeCategories) => {
        var cat = activeCategories[Math.floor(Math.random() * activeCategories.length)];
        try {
            const api = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+ cat);
            const comida = await api.json();
            setIdConsulta(comida.meals[Math.floor(Math.random() * comida.meals.length)].idMeal);
            } catch (error) {
            console.log(error);
        }
    }



    function check() {
        console.log("categorias activadas",activeCategories);
        console.log("id para consultar" , idConsulta);
    }

    return (
    <Fragment>
        <div style={{padding:"0 0 40px"}}>
            <p className="px-2 lead">
            Seleccione alguna categoría, o déjelo a la suerte. &#127869;
            </p>
            <nav>
                {categorias.map((c) => (
                    <button key={c.strCategory} type="button" 
                        className="btn btn-outline-primary" 
                        data-bs-toggle="button" 
                        onClick={() => toggle(c.strCategory, getId)}

                    >{c.strCategory}
                    </button>      
                ))}
                <button
                    className="btn btn-outline-warning text-danger"
                    onClick={() => clearCategories()}
                >Limpiar seleccion
                </button>
            </nav><br/>

        <BtnConsulta idConsulta = { idConsulta }/>

            <button onClick= {check}>check</button>
        </div>    
    </Fragment>    
    )
}





