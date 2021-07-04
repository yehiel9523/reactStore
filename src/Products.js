// import './Product.css';
import { CatalogContext } from './CatalogContext';
import { useContext } from 'react';
import { useEffect, useState } from "react";
import Product from './Product';

function Products() {

    const { products } = useContext(CatalogContext);
    return (
        <>{Array.isArray(products) && products.length > 0 ?

            products.map(product => <Product {...product} />)
            :
            'louding...'}
            {/*            
            <div className='products' >
                
                <img src={image} />
               
                <button onClick={() => on(id)}>{price} $</button>
                <button onClick={() => setOnePage = true}>deatales</button>
            </div> */}




        </>
    )

}
export default Products;
