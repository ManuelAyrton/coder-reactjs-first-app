import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { CartProvider } from './components/context/CartContext/CartContext';



function App() {


  return (
      <CartProvider>

        <BrowserRouter>
          <div className="app">
            <NavBar />
            <AppRouter />
          </div>
        </BrowserRouter>

      </CartProvider>
  );
}

export default App;
