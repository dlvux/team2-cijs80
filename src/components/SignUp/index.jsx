import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate()

  const handleClick = () => {
    if (username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') return toast.error("Please fill out all the fields!")
    if (confirmPassword !== password) return toast.error("Please double check the password!")
    
    const user = {
      username: username,
      password: password,
    }

    let users = JSON.parse(localStorage.getItem('users')); // get current users from localStorage
    if (!users) {
      users = []; // if there are no users yet, set it to an empty array
    }
    users.push(user); // add new user to array
    localStorage.setItem('users', JSON.stringify(users)); // update localStorage with new array of users
    
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    toast.success("Sign up successfully!")
    navigate("/sign-in")
  }

  return (
    <div id='sign-up'>
      <h1>Sign Up</h1>
      <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
      <br/>
      <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <br/>
      <input type="password" placeholder='Confirm password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
      <br/>
      <button onClick={handleClick}>Sign Up</button>
      <h4>Already have an account? <Link to={'/sign-in'}>Sign in now</Link></h4>
    </div>
  )
}

export default SignUp