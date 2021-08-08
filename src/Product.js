import './Product.css';
import { CartContext } from './CartContext';
import { useContext, useEffect, useState } from 'react';
import { CatalogContext } from './CatalogContext';

// import Cart from './Cart';

export default function ({
    category,
    description,
    id,
    image,
    title,
    price,

}) {
    const { cart, setCart } = useContext(CartContext);
    const [onClick, setOnclick] = useState(false);
    let lastCartLength = cart.length;
    useEffect(() => {
        if (onClick) {
            fetch(`/products/${id}`)
                .then(res => res.json())
                .then(data => setCart([...cart, data]))
            console.log(cart)
            setOnclick('flase')
        }

    }, [onClick])
    return (
        <div className='product' >
            <h2>{category}</h2>
            <img src={image} />
            <div>{price} $</div>
            <button onClick={() => setOnclick(true)}>Add to crat </button>

        </div>
    )
}