import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemCounter } from './components/ItemCounter/ItemCounter.js'
import { useState } from 'react';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {



  const [mostrarClicker, setMostrarClicker] = useState(true)

  const handleMostrar = () => {
    setMostrarClicker(!mostrarClicker)
  }

  return (
    <>

      <div className="app">

        <NavBar/>

        <ItemListContainer greeting="BIENVENIDO AL HOME" />

        <button onClick={handleMostrar}>Mostrar</button>

        {mostrarClicker && <ItemCounter producto="Producto 1" stock="10"/>}

      </div>

    </>
  );
}

export default App;
