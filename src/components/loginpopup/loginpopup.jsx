import React, { useContext, useState } from 'react';
import './loginpopup.css';
import { assets } from '../../../assets/assets';
import { StoreContext } from '../../context/Storedcontext';

const Loginpopup = ({ setshowLogin }) => {
  const { removeAllFromCart } = useContext(StoreContext);
  const [currState, setCurrState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Create account logic
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    console.log('Account created successfully');
    setCurrState('Login'); // Open login state after account creation
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.email === email && userData.password === password) {
      console.log('Login successful');
      removeAllFromCart(); // Remove all items from the cart
      setshowLogin(false); // Close login popup after successful login
    } else {
      console.log('Invalid email or password');
    }
  };

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={currState === 'Sign Up' ? handleCreateAccount : handleLogin}>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setshowLogin(false)} src={assets.cross_icon} alt='' />
        </div>
        <div className='login-popup-inputs'>
          {currState === 'Login' ? null : (
            <input type='text' placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} required />
          )}
          <input type='email' placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type='submit' className="login-button">{currState === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        <div className='login-popup-condition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === 'Login' ? (
          <p>
            Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;

