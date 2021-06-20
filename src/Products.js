import './Products.css';
import { useEffect, useState } from "react";

function Products({
    category,
    description,
    id,
    image,
    title,
    price }) {
    // const [onePage, setOnePage] = useState(false);
    // const [sProduct, setSProduct] = useState([]);
    // useEffect(() => {
    //     fetch(`https://fakestoreapi.com/products/${id}`)
    //         .then(res => res.json())
    //         .then(data => setSProduct(data));
    //     console.log(sProduct);
    // }, []);

    return (
        <>
            {/* {onePage === false ? */}
            <div className='products'>
                {/* <h2>{category}</h2> */}
                {/* <h4 className="title">{title}</h4> */}
                <img src={image} className="product-image" />
                {/* <h6>{description}</h6> */}
                <button>{price} $</button>
                {/* <button onClick={() => setOnePage = true}>deatales</button> */}
            </div>
            {/* : <img src={sProduct.image} /> */}


            {/* } */}
        </>
    )

}
export default Products;
