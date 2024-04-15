import React from 'react'
import './AppDownload.css'
import { assets } from '../../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-Download' id='app-Download'>
    <p>For better Exprience Download 
        <br />Foodie App</p>
        <div className="app-dowonload-platform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload