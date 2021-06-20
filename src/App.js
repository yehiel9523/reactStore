import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Products from './Products';
function App() {
  console.log()
  const [products, setProdacts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProdacts(data));
    console.log(products);
  }, []);

  return (
    <div id="myApp">
      {

        products.map(product => <Products{...product} />)

      }
    </div>
  );
}

export default App;
