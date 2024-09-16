{/*import React, { useState } from 'react'*/}
import Navbar from './Components/Navbar/Navbar'

import { Link, Route, Routes,Navigate } from 'react-router-dom'

import Home from './Pages/Home/Home'
import { useState } from 'react'
import LoginPopUp from './Components/LoginPopUp/LoginPopUp'
import Electricity from './Pages/Electricity/Electricity'
import ProtectedRoute from './Components/ProtectedRoute'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'


function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <LoginPopUp/>
}

const App = () => {

  {/*const [playState,setPlayState]=useState(false);*/}
  {/*const [showLogin,setShowLogin] = useState(false);*/}

  return (
    <>
    {/*{showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}*/}
    <div>
      {/*<Navbar setShowLogin={setShowLogin}/>*/}
      <Navbar />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} index/>
       
        <Route path="/Electricity" element={<Electricity/>}/> 
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/register" element={<Register/>}></Route>
      </Routes>

    
      {/*<div className="container">
        <All_title subTitle='OUR SERVICES' title='What we Offer'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <All_title subTitle='Articles' title='Photos'/>
        <Campus/>
        <All_title subTitle='Testimonials' title='What Student Says'/>
        <Testimonials/>
        <All_title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>

      </div>
  <VideoPlayer playState={playState} setPlayState={setPlayState}/>*/}
      
      
    </div>
    </>
  )
}

export default App