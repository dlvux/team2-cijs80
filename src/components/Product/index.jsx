import React from 'react'
import { useState, useEffect } from 'react';
import Item from '../Item'; 
import "./style.css"
const Product=(props)=> {
    const [products, setProducts] = useState([]);
    // Fetch data
    useEffect(() => 
     {fetchData();}
    ,[]);

    const fetchData=async()=>{
        const res=await fetch("https://fakestoreapi.com/products")
        const data=await res.json();
        setProducts(data);

    }
    const handleClick = props.handleClick; 
    return(
        <div id="list">
            {products.map((el,index)=>(
                <Item 
                    key={index} 
                    element={el}
                    handleClick = {handleClick}
                
                />
            ))}
        </div>
    )  
}
  


export default Product