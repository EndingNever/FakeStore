// import Profile from './components/Profile'
// import { LoginContext } from './contexts/LoginContext'
import React, { Fragment, useState, useEffect } from 'react'
import './App.css'
import ApiComponent from './components/apiComponent'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom"
import APIContext from './contexts/APIContext'
import fakestore from './utils/utils'
import SpecificProduct from './components/SpecificProduct'
import Cart from './components/Cart'
import Checkout from './components/Checkout'




function App() {
  const [fake, setFake] = useState([])

  const [cart, setCart] = useState([])
  const [counts, setCounts] = useState([]);

  
  const [product, setProduct] = useState(
    {
      id: undefined,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      rating: {
        rate: 3.9,
        count: 120
      }
    }
    )

    // console.log(checkProductCount(cart, counts))

  useEffect(() => {
    fakestore(setFake)
  }, [])


  return (
    <Router >
      <h2>Fake Store</h2>
      {/* <LoginContext.Provider value={{ username, setUsername }}>
       {<Profile/>}
      </LoginContext.Provider> */}
      <nav>
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Product">Product</Link></li>
          <li><Link to="/Cart">Cart</Link></li>
        </ul>
      </nav>
      <div>
        <APIContext.Provider value={{ fake, product, cart, counts, setCounts, setProduct, setCart }}>
          {/* <Route path="/" exact component = {ApiComponent} /> */}
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route exact path="/Home" component={ApiComponent} />
          <Route exact path="/Product" component={SpecificProduct} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Checkout" component={Checkout} />

          {/* <SpecificProduct /> 
          <ApiComponent /> */}
          {/** TODO <CartComponent/> */}
          {/** TODO <CheckoutComponent/> */}
        </APIContext.Provider>
      </div>
    </Router>
  )
}

export default App
