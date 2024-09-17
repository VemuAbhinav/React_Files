import React, { useState } from 'react'
import './Headerbar.css'

const Headerbar = () => {

  const [menu,setMenu]=useState("Home")
  return (
    <div>
        <div id="myHeader">
            <h1 className='heading' onClick={()=>{setMenu("Home")}}>AVENGERS</h1>
            <nav>
                <ul className='navMenu'>
                    <li onClick={()=>{setMenu("Ironman")}}>About{menu==="Ironman"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Captain America")}}>News{menu==="Captain America"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Thor")}}>Comics{menu==="Thor"?<hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("Hulk")}}>Shows{menu==="Hulk"?<hr/>:<></>}</li>
                </ul>
                <p className='menu-icon'>@</p>
            </nav>
        </div>
        
    </div>
  )
}

export default Headerbar