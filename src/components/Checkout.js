import { useContext } from 'react'
import React from 'react'
import APIContext from '../contexts/APIContext'
import Cart from './Cart'


function Checkout() {
    const { cart } = useContext(APIContext)
    return (
        <>
            <div>
                {cart.map((values) => {
                    return (
                        <>
                            <div className="checkout-product-container">
                                <img className="checkout-image" src={values.image} alt={values.title} />
                                <h2 className="checkout-title">
                                    {values.title}
                                </h2>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Checkout
