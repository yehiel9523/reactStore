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
    //  on 
}) {
    const { cart, setCart } = useContext(CartContext);
    const [onClick, setOnclick] = useState(false);
    let lastCartLength = cart.length;
    useEffect(() => {
        if (onClick) {
            fetch(`/products/${id}`)
                .then(res => res.json())
                .then(data => setCart([...cart, data]))
            setOnclick('flase')
        }

    }, [onClick])
    return (
        <div className='product' >
            <h2>{category}</h2>
            {/* <h4 className="title">{title}</h4> */}
            <img src={image} />
            {/* <h6>{description}</h6> */}
            <div>{price} $</div>
            <button onClick={() => setOnclick(true)}>add to crat </button>
            {/* <button onClick={on()}>go back</button> */}
            {/* <button onClick={() => setOnePage = true}>deatales</button> */}
        </div>
    )
}