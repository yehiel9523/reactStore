import './App.css';
import { useEffect, useRef, useState, useRouteMatch } from "react";
import Products from './Products';
import { fireEvent } from '@testing-library/react';
import Product from './Product';
import CatalogProvider from './CatalogContext';
import Cart from './Cart';
import CartProvider from './CartContext';
import useScreenSize from './useScreenSize';
import useFetchUser from './useFetchUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";




function App() {
  // const screen = useScreenSize();
  // const posts = useFetchUser(1);
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();



  const addProduct = () => {
    const data = {
      id: idRef.current.value,
      title: titleRef.current.value,
      price: priceRef.current.value,
      image: imageRef.current.value
    };
    fetch('/products', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    console.log(data)
  }

  return (
    <Router>
      <CatalogProvider>
        <CartProvider>
          <input ref={idRef} title='id' placeholder='id' />
          <input ref={titleRef} title='title' placeholder='title' />
          <input ref={priceRef} title="price" placeholder='price' />
          <input ref={imageRef} title='imageURL' placeholder='imageURL' />
          <button onClick={() => addProduct()}>add product</button>

          <Route path='/' exact>

            <div id="myApp">

              <Products />
            </div>
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>


        </CartProvider>
      </CatalogProvider>

    </Router>
  );
}
export default App;
