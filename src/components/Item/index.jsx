import React from 'react'
import "./style.css"
const Item = ({element}) => {
  return (
    <div id="product">
        <img src={element.image} alt=""></img>
        <h3>{element.title}</h3>
        <i>{element.price}</i>
    </div>
  )
}

export default Item