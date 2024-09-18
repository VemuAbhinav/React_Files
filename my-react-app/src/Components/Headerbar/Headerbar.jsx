import React, { useState } from 'react'
import './Headerbar.css'

const Headerbar = () => {

  const [menu,setMenu]=useState("Home")
  const [isSidebarOpen,setIsSidebarOpen]=useState(false)
  return (
    <div>
        <div id="myHeader">
            <h1 className='heading' onClick={()=>{setMenu("Home")}}>AVENGERS</h1>
            <nav>
               {/* Hamburger Icon */}
              <div className="hamburger-icon" onClick={()=>{setIsSidebarOpen(!isSidebarOpen)}}>
                {isSidebarOpen ? (
                  <span className="close-icon">&times;</span>
                ) : (
                  <span className="hamburger">&#9776;</span>
                )}
              </div>
                <ul className='navMenu'>
                    <li onClick={()=>{setMenu("Ironman")}}>About{menu==="Ironman"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Captain America")}}>News{menu==="Captain America"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Thor")}}>Comics{menu==="Thor"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Hulk")}}>Shows{menu==="Hulk"?<hr/>:<></>}</li>
                </ul>
                
                <ul className={`sidebar ${isSidebarOpen? "open":""}`}>
                    <li onClick={()=>{setMenu("Ironman")}}>About{menu==="Ironman"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Captain America")}}>News{menu==="Captain America"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Thor")}}>Comics{menu==="Thor"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Hulk")}}>Shows{menu==="Hulk"?<hr/>:<></>}</li>
                </ul>
                
            </nav>
        </div>
        <div>

        </div>
        
    </div>
  )
}

export default Headerbar