import React, { useState } from 'react';
import { Fragment } from 'react';
import BtnConsulta from './BtnConsulta';

export function CategoriasList({categorias}) {

    const [activeCategories, setActiveCategories] = useState([]);
    const [idConsulta, setIdConsulta] = useState(0);


// funciones que agregan y eliminan categorias a la lista de activas   
    const addCategory = (cat) => {
        setActiveCategories([...activeCategories, cat]);
        
    };    

    const removeCategory = (cat) => {
        const newActiveCategories = activeCategories.filter((c) => c !== cat);
        setActiveCategories(newActiveCategories);

    };

    //falta desactivar los botones
    const clearCategories = () => {
        var selecciones = document.querySelectorAll('button');
        setActiveCategories([]);
        setIdConsulta(0);
    }

// no carga el id al tocar la primer categoria
// funcion para activar o desactivar las categorias en donde se realiza la busqueda
    function toggle(cat) {
        activeCategories.includes(cat) ? removeCategory(cat) : addCategory(cat);
        getId();
    };

    function getId() {
        activeCategories.length > 0 ? consultarEn(activeCategories) : setIdConsulta(0);
        
    }


        

//recibe una cat y setea el estado con un id al azar
    const consultarEn = async (activeCategories) => {
        var cat = activeCategories[Math.floor(Math.random() * activeCategories.length)];
   //     var idConsulta = 0;
        try {
            const api = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+ cat);
            const comida = await api.json();
            setIdConsulta(comida.meals[Math.floor(Math.random() * comida.meals.length)].idMeal);
   //         idConsulta = comida.meals[Math.floor(Math.random() * comida.meals.length)].idMeal;
   //         console.log(idConsulta);
            } catch (error) {
            console.log(error);
        }
    //return idConsulta   
    }



    function check() {
        console.log("categorias activadas",activeCategories);
        console.log("id para consultar" , idConsulta);
    }

    return (
    <Fragment>
        <nav>
            {categorias.map((c) => (
                <button key={c.strCategory} type="button" id={c.strCategory}
                    className="btn btn-outline-primary" 
                    data-bs-toggle="button" 
                    onClick={() => toggle(c.strCategory)}
                >{c.strCategory}
                </button>      
            ))}
            <button
                onClick={() => clearCategories()}
            >Limpiar seleccion
            </button>
        </nav>

       <BtnConsulta idConsulta = { idConsulta }/>

        <button onClick= {check}>check</button>
    </Fragment>    
    )
}





