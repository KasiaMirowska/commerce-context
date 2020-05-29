import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/providers/cart.provider';
import './index.css';
import App from './App';

ReactDOM.render(

  <CartProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </CartProvider>,
  document.getElementById('root')
);
