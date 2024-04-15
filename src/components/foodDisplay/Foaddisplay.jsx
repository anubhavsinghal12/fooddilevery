import React, { useContext } from 'react'
import { StoreContext } from '../../context/Storedcontext'
import Fooditem from '../fooditem/Fooditem'
import './Fooddisplay.css'

function Foaddisplay({cotegory}) {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>

      <div className="food-list">
       
        {food_list.map((item,index)=>{
            {console.log(cotegory,item.category);}
            if (cotegory === "All" || cotegory === item.category){
              return (
                <Fooditem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  img={item.image}
                />
              );}
        })}
      </div>
    </div>
  )
}

export default Foaddisplay;
