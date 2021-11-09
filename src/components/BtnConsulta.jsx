import React from 'react'
import { Fragment, useState } from 'react';
import Comida from './Comida';

const BtnConsulta = ({idConsulta}) => {

    const [comidaState, setComida] = useState({});

    
// recibe un id y pone el plato como state => cambiar a lista de ids
    const consultarPorId = async (id) => {
        try {
            const api = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ id);
            const comida = await api.json();
            setComida(comida.meals[0]);
        } catch (error) {
            console.log(error);
        }
    }

// consulta plato random
    const consultarRandom = async () => {
        try {
            const api = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const comida = await api.json();
            setComida(comida.meals[0]);
        } catch (error) {
            console.log(error);
        }
    }
  
// si el id no es cero hace el pedido por id
    function consultar() {
        idConsulta !== 0 ? consultarPorId(idConsulta) : consultarRandom();
        if (document.getElementsByClassName('invisible').length) {
            mostrarElementos();
        }
    }

// activa los elementos invisibles
    const mostrarElementos = () => {
        var elementos = document.getElementsByClassName('invisible');
        elementos[0].classList.remove('invisible')
        if (elementos[0]) mostrarElementos();
    }

    return (
        <Fragment>
            <div className="text-center">
                <button
                    type="button" className="text-uppercase btn-lg text-align:center btn btn-success rounded-pill bg-gradient shadow"
                    onClick = {() => consultar()}
                >Consultar
                </button>
            </div><br/>

            <Comida comidaProp={comidaState}/>
        </Fragment>
    )   
}
 
export default BtnConsulta;