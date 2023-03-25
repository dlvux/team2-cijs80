import React from 'react'
import "./style.css"
const Item = ({element, handleClick}) => {
  
  
  return (
    <div id="product">
        <img src={element.image} alt=""></img>
        <h3>{element.title}</h3>
        <i>{element.price}</i>
        <button onClick={() => handleClick(element.title, element.price)}>
            Add to Cart
        </button>
    </div>
  )
}

export default Item