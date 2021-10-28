import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import APIContext from '../contexts/APIContext'



function Cart() {

    const { cart, product, counts, setCounts } = useContext(APIContext)

    useEffect(() => {

            function getOccurance(x, y) {
                return 
            }

            // console.log(getOccurance(cart, counts))
            // console.log(counts)
            console.log(cart)
    }, [])
    return (
        <>
            <p>
                <Link to="/Checkout">checkout</Link>
            </p>
            <div>
                {(cart).length >= 1 ?
                    <div>{cart.map((values) => {

                        return (
                            <>
                                <div className="cart-container" key={values.id} onClick={() => { console.log(values.counts) }}>
                                    <img src={values.image} alt="" style={{ width: "200px" }} />
                                    <div>{values.title}</div>
                                    <div>count </div>
                                </div>
                            </>
                        )
                    })}</div>
                    : "cart empty"}
            </div>
        </>
    )
}

export default Cart
