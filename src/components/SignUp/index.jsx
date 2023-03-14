import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const defaultValue = {
  username: "",
  password: "",
  confirmPassword: ""
}

const SignUp = ({handleAddUser}) => {
  const [person, setPerson] = useState(defaultValue)
  const {username, password, confirmPassword} = person
  const navigate = useNavigate()

  const handleClick = () => {
    if (!username || !password || !confirmPassword) return toast.error("Please fill out all the fields!")
    if (confirmPassword !== password) return toast.error("Please double check the password!")
    handleAddUser({
      username, 
      password
    })
    setPerson(defaultValue)
    toast.success("Sign up successfully!")
    navigate("/sign-in")
  }

  return (
    <div id='sign-up'>
      <h1>Sign Up</h1>
      <input type="text" placeholder='Username' value={username} onChange={(e) => setPerson({...person, username: e.target.value})}/>
      <input type="text" placeholder='Password' value={password} onChange={(e) => setPerson({...person, password: e.target.value})}/>
      <input type="text" placeholder='Confirm password' value={confirmPassword} onChange={(e) => setPerson({...person, confirmPassword: e.target.value})}/>
      <button onClick={handleClick}>Sign Up</button>
      <h4>Already have an account? <Link to={'/sign-in'}>Sign in now</Link></h4>
    </div>
  )
}

export default SignUp