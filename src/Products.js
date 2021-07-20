// import './Product.css';
import { CatalogContext } from './CatalogContext';
import { useContext } from 'react';
import { useEffect, useState } from "react";
import Product from './Product';

import {
    Link,
} from "react-router-dom";

function Products() {

    const { products } = useContext(CatalogContext);
    return (
        <>
            <div className='route'>
                <Link to={`/cart`}><button>to the cart</button></Link>
            </div>

            {Array.isArray(products) && products.length > 0 ?
                products.map(product => <Product {...product} />)
                : 'louding...'}
        </>
    )

}
export default Products;
