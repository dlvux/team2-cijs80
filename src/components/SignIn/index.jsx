import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  
  const onClick = () => {
    if (username.trim() === '' || password.trim() === '') return toast.error("Please fill out the fields")

    const users = JSON.parse(localStorage.getItem('users'))

    if (!users) {
      toast.error("No users found!")
      return
    }

    const validUser = users.find((user) => user.username === username && user.password === password)

    if (!validUser) {
      toast.error('Invalid username or password!');
      return;
    }

    navigate("/")
  }

  return (
    <div id='sign-in'>
      <h1>Sign In</h1>
      <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
      <br />
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <br />
      <button onClick={onClick}>Sign In</button>
      <h4>Don't have an account yet? <Link to={'/sign-up'}>Sign up now</Link></h4>
    </div>
  )
}

export default SignIn