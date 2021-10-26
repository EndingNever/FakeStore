// import Profile from './components/Profile'
// import { LoginContext } from './contexts/LoginContext'
import React, { Fragment, useState, useEffect } from 'react'
import './App.css'
import ApiComponent from './components/apiComponent'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import APIContext from './contexts/APIContext'
import fakestore from './utils/utils'
import SpecificProduct from './components/SpecificProduct'






function App() {
  const [fake, setFake] = useState([])
  const [product, setProduct] = useState(
    {
      category: "men's clothing",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",

    }
)

  // let baseURL = "https://fakestoreapi.com/products"

  // async function fakestore() {
  //   const response = await fetch(baseURL)
  //   const data = await response.json();
  //   setFake(data)
  // }

  // (5 + 3).toFixed(2);


  useEffect(() => {
    fakestore(setFake)
  }, [])
  // console.log("product " + product)

  return (
    <Router >
      <h2>Fake Store</h2>
      {/* <LoginContext.Provider value={{ username, setUsername }}>
       {<Profile/>}
      </LoginContext.Provider> */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <Route path="/" exact render={() => <h1>Welcome!</h1>} />   {/* this line will only render if the path is an exact match */}
        </ul>
      </nav>
      <div>
        <APIContext.Provider value={{ fake, product, setProduct }}>
          {/* <Route path="/" exact component = {ApiComponent} /> */}
          <Route exact path="/" path="*">
            <Redirect to="/Products" />
          </Route>
          {/* <Route exact path="/Products" component = {ApiComponent}  />
          <Route exact path="/Product/" component={SpecificProduct} /> */}
          <SpecificProduct />
          <ApiComponent />
          {/** TODO <CartComponent/> */}
          {/** TODO <CheckoutComponent/> */}
        </APIContext.Provider>
      </div>
    </Router>
  )
}

export default App
