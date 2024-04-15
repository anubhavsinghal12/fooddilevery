import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import {Link} from 'react-router-dom';
import './Navbar.css'
import { StoreContext } from '../context/Storedcontext';
const Navbar=({setshowLogin})=> {
    const [menu,setmenu]=useState("home")
    const {GettotalAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logo} alt="" className="logo"/></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-Download' onClick={()=>setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setmenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
<img src={assets. search_icon} alt="" />
<div className="navbar-search-icon">
<Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
<div className={GettotalAmount()===0?"":"dot"}></div>
</div> 
<button onClick={()=>setshowLogin(true)}>sign in</button>
</div>
</div>
  );
}

export default Navbar;
