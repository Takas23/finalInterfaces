import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { CategoriasList } from './components/CategoriasList';




function App() {

  const [categoriasState, setCategorias] = useState([]);

// funcion para cargar la lista de categorias disponibles en la api al iniciar la app  
  const fetchCategories = async () => {
    const api = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const categorias = await api.json();
    setCategorias(categorias.categories);
  }

  useEffect(() => {
    fetchCategories()
  }, [])


  return (
    <Fragment >
      <div>  
        <Header />

        <CategoriasList categorias={categoriasState}/>  

      </div>
    </Fragment>
  );
}

export default App;
