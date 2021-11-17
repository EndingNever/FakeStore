import React, { useContext } from 'react'
import APIContext from '../contexts/APIContext'


function SpecificProduct() {
    const { product, cart, setCart, values } = useContext(APIContext)

    return (
        <div>
            {/* <h1>{product.id}</h1> */}
            <div className="product-container">
                <div className="product-image-container">
                    <img className="product-image" src={product.image} alt="" style={{ width: "350px" }} />
                </div>
                <div className="product-text-container">
                    <h1 className="product-title">{product.title}</h1>
                    <h1>{product.description}</h1>
                    <h1>${product.price.toFixed(2)}</h1>
                    <p>{product.category}</p>
                    <button onClick={() => {
                                setCart([...cart, product])
                            }
                            }>Add To Cart</button>
                </div>
            </div>
        </div>
    )

}

export default SpecificProduct
