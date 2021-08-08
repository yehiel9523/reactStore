import './App.css';
import Products from './Products';
import CatalogProvider from './CatalogContext';
import Cart from './Cart';
import CartProvider from './CartContext';
import Input from './Input';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import styled from 'styled-components';


const Header = styled.header`
        background-color: black;
        position: sticky;`


function App() {

  return (
    <Router>
      <CatalogProvider>
        <CartProvider>
          <Switch>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/addProduct'>
              <Input />
            </Route>
            <Route path='/'  >
              <div id="myApp">
                <Products />
              </div>
            </Route>
          </Switch>
        </CartProvider>
      </CatalogProvider>
    </Router>
  );
}
export default App;
