import React, { useContext } from 'react'
import { useParams } from 'react-router'
import APIContext from '../contexts/APIContext'


function SpecificProduct() {
    const {product}  = useContext(APIContext)

    return (
        <div>
            {product.category}
            {product.description}
            {/* <img src={product.image} alt="" /> */}
            {/* <h1>PRODUCT TITLE: {product.title}</h1>
            <h1>PRODUCT ID: {product.id}</h1>
            <h1>PRODUCT description: {product.description}</h1>
            <h1>PRODUCT price: {product.price}</h1> */}
        </div>
    )
    
}

export default SpecificProduct
