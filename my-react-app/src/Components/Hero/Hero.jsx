import React, { useState } from 'react'
import './Hero.css'

const Hero = ({heroData,heroCount,setHeroCount}) => {

  

  return (
    <div className='hero-section'>
      <div className='hero-text'>
        <h1>{heroData.text1}</h1>
        <p>{heroData.text2}</p>
      </div>
      {/* <div className='explore-features'>
        <p>Explore Features</p>
        <button className='feature-go'>Go</button>
      </div> */}
      <div >
        <ul className='hero-dots'>
          <li className={heroCount===0?"hero-dot orange":"hero-dot"} onClick={()=>{setHeroCount(0)}}></li>
          <li className={heroCount===1?"hero-dot orange":"hero-dot"} onClick={()=>{setHeroCount(1)}}></li>
          <li className={heroCount===2?"hero-dot orange":"hero-dot"} onClick={()=>{setHeroCount(2)}}></li>
          <li className={heroCount===3?"hero-dot orange":"hero-dot"} onClick={()=>{setHeroCount(3)}}></li>
        </ul>

      </div>
    </div>
  )
}

export default Hero