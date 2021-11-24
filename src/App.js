import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {



  return (
    <>
      <div className="app">

        <NavBar/>

        {/* <ItemListContainer greeting="Productos para vos!" /> */}
        <ItemDetailContainer/>
      </div>
    </>
  );
}

export default App;
