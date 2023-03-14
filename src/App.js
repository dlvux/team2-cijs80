import { useEffect, useState } from "react";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        <Routes>
          <Route path="/" element={<Home name={name}/>}/>
          <Route path="/sign-in" element={<SignIn setName={setName} users={users}/>}/>
          <Route path="/sign-up" element={<SignUp handleAddUser={handleAddUser}/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
