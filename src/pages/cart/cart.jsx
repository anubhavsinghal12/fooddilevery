import React, { useContext } from 'react'
import './cart.css'
import { food_list } from '../../../assets/assets'
import { StoreContext } from '../../context/Storedcontext'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const {cartItem,addTocart,removeFromCart,GettotalAmount}=useContext(StoreContext)
  const navigate =useNavigate()
  return (
    <div className='cart'>
<div className="cart-items">
<div className="cart-items-tittle">
<p>Items</p>
<p>Title</p>
<p>Price</p>
<p>Quantity</p>
<p>Total</p>
<p>Remove</p>
</div>
<br />
<hr />
{
  food_list.map((item,index)=>{
    if(cartItem[item._id]>0){
      return(
        <>
        <div className='cart-items-tittle cart-items-item'>
          <img src={item.image} alt="" />
          <p>{item.name}</p>
          <p>Rs{item.price*20}</p>
          <p>{cartItem[item._id]}</p>
          <p>Rs{item.price*cartItem[item._id]*20}</p>
          <p className='cross' onClick={()=>removeFromCart(item._id)} >x</p>
        </div>
          <hr />
          </>
      )
    }
  })
}
</div>
<div className="cart-bottom">
  <div className="cart-total">
    <h2>Cart totals</h2>
    <div className="cart-total-details">
    <p>SubTotal</p>
    <p>Rs{GettotalAmount()*20}</p>
    
    </div>
    <div className="cart-total-details">
      <p>Dilevery Fee</p>
      <p>Rs{GettotalAmount()===0?0:60}</p>
    </div>
      <hr />
    <div className="cart-total-details">
      <b>Total</b>
      <b>Rs{GettotalAmount()===0?0:(GettotalAmount()*20)+60}</b>
    </div>
    
<button onClick={()=>navigate('/Placeholder')}>PROCEED TO CHECKOUT</button>
 </div>

<div className="cart-promocode">
<div>
<p>If you have a promo code, Enter it here</p>
<div className='cart-promocode-input'> 
<input type="text" placeholder='promo code' />
<button>Submit</button>
  </div>
</div>
</div>
</div>
</div>
  )
}

export default Cart