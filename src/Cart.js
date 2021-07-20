import Product from "./Product";
import { useContext } from "react"
import { CartContext } from "./CartContext"
import {
    Link,
} from "react-router-dom";

export default function Cart() {
    const { cart } = useContext(CartContext);
    return (
        <>
            <div className='route'>
                <Link to={`/`}><button>to home</button></Link>
            </div>
            <h2>The cart</h2>
            <div className='cart'>

                {cart.length > 0 ? cart.map(product => <Product{...product} />)
                    : null}
            </div>

        </>
    )
}