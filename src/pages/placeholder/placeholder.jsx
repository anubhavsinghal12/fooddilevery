import React, { useContext } from 'react'
import { StoreContext } from '../../context/Storedcontext'
import './placeholder.css'
function Placeholder() {
  const {GettotalAmount}=useContext(StoreContext)
  return (
    
      <form className='place-order'>
<div className="place-order-left">
<p className="title">Delivery Information</p>
<div className="multi-fields">
<input type="text" placeholder='First name' />
<input type="text" placeholder='Last name'/>
</div>
<input type="email" placeholder='Email address'/>
<input type="text" placeholder='Street' />
<div className="multi-fields">
<input type="text" placeholder='City' />
<input type="text" placeholder='State' />
</div>
<div className="multi-fields">
<input type="text" placeholder='Zip code' />
<input type="text" placeholder='Country' />
</div>
<input type="text" placeholder='Phone'/>
</div>
<div className="place-order-right">

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

</div>
    </form>
  )
}

export default Placeholder