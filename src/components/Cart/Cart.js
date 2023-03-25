import React from 'react';

const Cart = ({cart}) => {
    
    //  cart = {pant: {price: 12, quantity: 1},
    //   hat:  {price: 11, quantity: 5}
    //  }
    let TotalPrice = 0 ;

    for (let item in cart) {
        let itemPrice = cart[item].price;
        let itemQuantity = cart[item].quantity;
        let itemTotalPrice = itemPrice * itemQuantity;

        TotalPrice += itemTotalPrice;
    }

    return (  
        <div>

            <h2>Cart</h2>
            {/* example of cart */}
            {/* { pant: {price: 12, quantity: 1},
              hat:  {price: 11, quantity: 5}
            } */}
            
            {TotalPrice}


        </div>
    );
}
 
export default Cart;