import './App.css';
import { useEffect, useState } from "react";
import Products from './Products';
import { fireEvent } from '@testing-library/react';
import Product from './Product';
import CatalogProvider from './CatalogContext';
import Cart from './Cart';
import CartProvider from './CartContext';

function App() {
  return (
    <CatalogProvider>
      <CartProvider>
        <div id="myApp">
          <Products />
        </div>
        <Cart />
      </CartProvider>
    </CatalogProvider>

  );
}

export default App;
