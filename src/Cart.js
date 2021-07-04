import Product from "./Product";
import { useContext } from "react"
import { CartContext } from "./CartContext"

export default function Cart() {
    const { cart } = useContext(CartContext);
    return (
        <>
            <h2>The cart</h2>
            <div className='cart'>

                {cart.length > 0 ? cart.map(product => <Product{...product} />)
                    : null}
            </div>
        </>
    )
}