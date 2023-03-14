import React from 'react'
import { useState, useEffect } from 'react';
import Item from '../Item'; 
import "./style.css"
const Product=()=> {
    const [products, setProducts] =useState([]);
    useEffect(()=>
    {fetchData();},
    []);
    const fetchData=async()=>{
        const res=await fetch("https://fakestoreapi.com/products")
        const data=await res.json();
        setProducts(data);

    } 
    return(
        <div id="list">
            {products.map((el,index)=>(
                <Item key={index} element={el}></Item>
            ))}
        </div>
    )  
}
  


export default Product