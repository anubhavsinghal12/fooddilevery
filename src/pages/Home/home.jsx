import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/exploremenu/Exploremenu'
import Foaddisplay from '../../components/foodDisplay/Foaddisplay'
import Footer from '../../components/footer/Footer'
import AppDownload from '../../components/Appdownload/AppDownload'
function Home() {
    const [cotegory,setcotegory]=useState("All")
  return (
    <div>
     <Header/>
     <Exploremenu cotegory={cotegory} setcotegory={setcotegory} /> 
     <Foaddisplay cotegory={cotegory}/> 
     <AppDownload/>
    </div>
  )
}

export default Home