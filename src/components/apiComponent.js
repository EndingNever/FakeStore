import React, { useState, useEffect, useContext, Consumer } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router';
import APIContext from '../contexts/APIContext';
import SpecificProduct from './SpecificProduct';


function ApiComponent() {
    const { fake, product, counts, setProduct, cart, setCart, setCounts } = useContext(APIContext)


    // console.log('counts ' + counts)
    // console.log('cart ' + cart)
    return (

        <div className="container" >
            {fake.map((values) => {
                return (
                    <>
                        <div className="box" key={values.id} onClick={() => setProduct(values)} >
                            <div className="content" >
                                <h5><Link to="/FakeStore/Product">{values.title}</Link></h5>
                                <p>{values.description}</p>
                            </div>
                            <img src={values.image} alt="" width="250" />
                            <div className="price">
                                ${values.price.toFixed(2)}
                            </div>
                            <button onClick={() => {
                                setCart([...cart, values])

                                setCounts([...counts, values.id])
                            }
                            }>Add To Cart</button>
                        </div>
                    </>
                )
            })}
        </div>

    )
}

export default ApiComponent
