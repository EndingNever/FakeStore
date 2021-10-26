import React, { useState, useEffect, useContext, Consumer } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useParams } from 'react-router';
import APIContext from '../contexts/APIContext';
import SpecificProduct from './SpecificProduct';

function ApiComponent() {
    const {fake, } = useContext(APIContext)


    const handleClick = ()=>{
        console.log(fake);
    }
    return (
        <Router >
            <div className="container">
                {fake.map((values) => {
                    return (
                        <div className="box" key={values.id}>
                            <div className="content" >
                                <h5>{values.title}</h5>

                                <p>{values.description}</p>
                            </div>
                            <img src={values.image} alt="" width="250" />
                            <div className="price">
                                ${values.price}
                            </div>
                        </div>
                    )
                })}
            </div>
        </Router>
    )
}

export default ApiComponent
