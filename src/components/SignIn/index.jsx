import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'
import { toast } from 'react-toastify';

const SignIn = ({setName, users}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  
  const onClick = () => {
    if (!username || !password) return toast.error("Please fill out the fields")

    const findUser = users.find((el) => el.username === username && el.password === password)

    if (!findUser) {
      toast.error("Incorrect information. Try again!")
      return
    }

    setName(username)
    navigate("/")
  }

  return (
    <div id='sign-in'>
      <h1>Sign In</h1>
      <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={onClick}>Sign In</button>
      <h4>Don't have an account yet? <Link to={'/sign-up'}>Sign up now</Link></h4>
    </div>
  )
}

export default SignIn