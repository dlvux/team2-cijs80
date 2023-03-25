import {useState } from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
import Listproduct from "./components/ListProduct";
import Cart from "./components/Cart/Cart.js"



function App() {
  const [cart, setCart] = useState({})
  
  const handleClick = (title, price) => {
    // check if item is on the Cart
    // if the item is not on the cart, add an item
    // if the item is on the cart, plus one on the quantity
    // example cart:
    //  {pant: {price: 12, quantity: 1},
    //   hat:  {price: 11, quantity: 5}
    //  }

    const quantity = cart[title] ?  cart[title].quantity + 1 : 1;

    const newItem = {price, quantity};
    //  {price: 12, quantity: 1}

    setCart(prev => {
      return {...prev, [title]: newItem}
    })

  }

  
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={ <Listproduct handleClick={handleClick}/>}/>

            <Route path="/sign-in" element={<SignIn />}/>
            <Route path="/sign-up" element={<SignUp />}/>
            <Route path="/cart" element={<Cart cart={cart}/>}/>            
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
     
    </>
  );
}

export default App;
