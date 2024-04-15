import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";
export const StoreContext=createContext(null)


const StoreContextProvider=(props)=>{
    const [cartItem,setcartItem]=useState({})
    const addTocart=(itemid)=>{
        if (!cartItem[itemid]) {
            setcartItem((prev)=>({...prev,[itemid]:1}))
    }else{
        setcartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    }}
    const removeFromCart=(itemid)=>{
        setcartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }
    const removeAllFromCart = () => {
        setcartItem({});
    };
    const GettotalAmount=()=>{
     let totalAmount=0;
     for (const item in cartItem) {
        if (cartItem[item]>0) {
            let iteminfo=food_list.find((product)=>product._id===item)
            totalAmount +=iteminfo.price * cartItem[item];  
        }  
     }
     return totalAmount;
    }
    const contextValue={
     food_list,
     cartItem,
     setcartItem,
     addTocart,
     removeFromCart,
     GettotalAmount,
     removeAllFromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;