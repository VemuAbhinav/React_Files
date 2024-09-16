import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We ensure better usage of power</h1>
            <p>Sustainable energy is power that can be replenished within a human lifetime without damaging the environment in the long term. It comes from resources 
                that can maintain current operations without compromising 
                the energy needs of future generations.</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Hero