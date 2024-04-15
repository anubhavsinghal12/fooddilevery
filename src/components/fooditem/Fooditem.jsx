import React, { useContext, useState } from 'react'
import './fooditem.css'
import { assets } from '../../../assets/assets'
import { StoreContext } from '../../context/Storedcontext'

function Fooditem({id,name,price,description,img}) {
    
    const {cartItem,addTocart,removeFromCart}=useContext(StoreContext)
  return (
    <div className='food-item'>
 <div className='food-item-img-container'>
    <img className="food-item-image" src={img} alt="" />
    {
      !cartItem[id]?<img onClick={()=>addTocart(id)} className='add' src={ assets.add_icon_white}/>:
      <div className='food-item-counter'>
        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
        <p>{cartItem[id]}</p>
        <img onClick={()=>addTocart(id)} src={assets.add_icon_green} alt="" />
      </div>
    }
    </div>
    <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>Rs{price*20}</p>
        </div>      
    </div>
  )
}

export default Fooditem
