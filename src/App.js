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
  const [name, setName] = useState("")
  const [users, setUsers] = useState([])

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser])
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={ <Listproduct></Listproduct>}/>
            <Route path="/sign-in" element={<SignIn setName={setName} users={users}/>}/>
            <Route path="/sign-up" element={<SignUp handleAddUser={handleAddUser}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
     
    </>
  );
}

export default App;
