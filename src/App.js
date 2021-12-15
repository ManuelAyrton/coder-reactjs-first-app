import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { CartProvider } from './components/context/CartContext/CartContext';
import { DarkModeProvider } from './components/context/DarkModeContext/DarkModeContext.js';



function App() {


  return (
    <DarkModeProvider>
      <CartProvider>

        <BrowserRouter>
          <div className="app">
            <NavBar />
            <AppRouter />
          </div>
        </BrowserRouter>

      </CartProvider>
    </DarkModeProvider>
  );
}

export default App;
