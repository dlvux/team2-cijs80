import React from 'react';
import './styles.css'
const Cart = ({cart}) => {
    
    //  cart = {pant: {price: 12, quantity: 1},
    //   hat:  {price: 11, quantity: 5}
    //  }

    // get an array of item in cart
    const cartArray = Object.keys(cart);
    //expect cartArray : [pant, hat] 
    let TotalPrice = 0 ;


    for (let item in cart) {
        let itemPrice = cart[item].price;
        let itemQuantity = cart[item].quantity;
        let itemTotalPrice = itemPrice * itemQuantity;

        TotalPrice += itemTotalPrice;
    }

    return (  
        <div className='cartDetail'>

            <h2>Cart</h2>
            
            {cartArray.map(el => {
                return (
                    <li>
                        <p>{el} :  {cart[el].quantity}</p>
                    </li>
                )
            })}
            <p>Total Price</p>    
            {/* rounded number to 2 decimal */}
            <h3>{TotalPrice.toFixed(2)}    </h3>     

        </div>
    );
}
 
export default Cart;