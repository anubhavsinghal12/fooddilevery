// Import React library
import React, { useState } from 'react';

// Import Navbar component from './components/Navbar' file
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Cart from './pages/cart/cart';
import Placeholder from './pages/placeholder/placeholder';
import Footer from './components/footer/Footer';
import Loginpopup from './components/loginpopup/loginpopup';


function App() {
   const [showLogin, setshowLogin] = useState(false);
  const [showSignup, setshowSignup] = useState(false);

  return (
    <>
      {showLogin ? (
        <Loginpopup
          setshowLogin={setshowLogin}
          setshowSignup={setshowSignup} // Pass setshowSignup to Loginpopup
        />
      ) : null}
      {showSignup ? (
        <SignupPopup
          setshowSignup={setshowSignup}
          setshowLogin={setshowLogin} // Pass setshowLogin to SignupPopup
        />
      ) : null}
      <div className='App'>
        <Navbar setshowLogin={setshowLogin} setshowSignup={setshowSignup} /> {/* Pass setshowSignup to Navbar */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Placeholder' element={<Placeholder />} />
        </Routes>
      </div>
     
    </>
  );
}

export default App;