import React from 'react'
import "./style.css"
import Product from '../Product'

const Listproduct = ({handleClick}) => {

  
  return (
    <div className='product'>
      <div className='index'>
        <div className="item">
           <p> Sale</p>
           <div id="hide">
            <h5> Sale dưới 49k</h5>
            <h5> Mã giảm giá</h5>
            <h5> Hoàn tiền MAX</h5>
            <h5> Ưu đãi thanh toán </h5>
           </div>
        </div>
        <div className="item"> 
          <p>  Clothes</p>
          <div id="hide">
          <h5> Giày dép</h5>
          <h5> Quần áo nam</h5>
          <h5> Quần áo nữ</h5>
          <h5> Phụ kiện</h5>
          </div>
        </div>
        <div className="item"> 
           <p>Jewelry</p>
           <div id="hide">
           <h5> Dây chuyền</h5>
           <h5> Thắt lưng nam/nữ</h5>
           <h5> Lắc bạc</h5>
           <h5> Túi xách/balo</h5>
           </div>
        </div>
        <div className="item"> 
          <p> Electronic device
          </p>
        </div>
      </div>

      <div className='listproduct'>
      
      {/* show all product */}
      <Product handleClick = {handleClick}/>
      </div>
      
      
     
    </div>
  )
}

export default Listproduct