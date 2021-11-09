import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { CategoriasList } from './components/CategoriasList';
import Footer from './components/Footer';




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
      <div style={{position: "relative", minHeight: '100vh'}}>  
        <Header />

        <CategoriasList categorias={categoriasState}/>  

        <Footer />
      </div>
    </Fragment>
  );
}

export default App;



// no carga el id al tocar la primer categoria
// cuando se desactiva una categoria, la proxima busqueda la toma como activa