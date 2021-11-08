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

    const consultarRandom = async () => {
        try {
            const api = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const comida = await api.json();
            setComida(comida.meals[0]);
        } catch (error) {
            console.log(error);
        }
    }
  

    function consultar() {
        idConsulta !== 0 ? consultarPorId(idConsulta) : consultarRandom();
        if (document.getElementsByClassName('invisible').length) {
            mostrarElementos();
        }
    }

    const mostrarElementos = () => {
        var elementos = document.getElementsByClassName('invisible');
        elementos[0].classList.remove('invisible')
        if (elementos[0]) mostrarElementos();
    }

    return (
        <Fragment>
            <div className="text-center">
                <button
                    type="button" className="btn-lg text-align:center btn btn-success "
                    onClick = {() => consultar()}
                >Consultar
                </button>
            </div><br/>

            <Comida comidaProp={comidaState}/>
        </Fragment>
    )   
}
 
export default BtnConsulta;