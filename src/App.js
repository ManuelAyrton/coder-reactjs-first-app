import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartView } from './components/CartView/CartView';


function App() {



  return (
    <BrowserRouter>
      <div className="app">

          <NavBar/>

          <Routes>
            <Route path="/" element={ <ItemListContainer greeting="Nuestros Productos" /> } />
            <Route path="/products/:catId" element={ <ItemListContainer/> } />
            <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
            <Route path="/cart" element={ <CartView/> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
          </Routes>

          {/* <Footer/> */}

        </div>
    </BrowserRouter>
  );
}

export default App;
