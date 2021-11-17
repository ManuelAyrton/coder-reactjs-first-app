import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {



  return (
    <>
      <div className="app">

        <NavBar/>

        <ItemListContainer greeting="BIENVENIDO AL HOME" />

      </div>
    </>
  );
}

export default App;
