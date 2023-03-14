import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const Header = () => {
  return (
    <div className="header">
      <div id="img"><img src= "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/fashion-logo-design.jpg" alt="logo" width="100px" he ></img></div>
      <div id="index">
      <div id="item"> <Link to={"/"}> <h3>Home</h3></Link></div>
<div id="item"><Link to={"/about-me"}><h3> About me</h3></Link></div>
 <div id="item">  <Link to={"/sign-in"}> <h3> Sign in</h3></Link></div>
 <div id="item"><Link to={"/sign-up"}><h3> Sign up</h3></Link></div>
        

      </div>
    </div>
      
  )
}

export default Header