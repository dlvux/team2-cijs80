import { useEffect, useState } from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"
import Listproduct from "./components/ListProduct";
import Product from "./components/Product"



function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={ <Listproduct></Listproduct>}/>
            <Route path="/sign-in" element={<SignIn />}/>
            <Route path="/sign-up" element={<SignUp />}/>
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
     
    </>
  );
}

export default App;
