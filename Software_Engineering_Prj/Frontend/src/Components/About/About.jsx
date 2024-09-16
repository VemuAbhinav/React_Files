import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT WEBSITE</h3>
            <h2>Creating sustainable Environment</h2>
            <p>Sustainable development is an organizing principle that aims to meet human development 
                goals while also enabling natural systems to provide necessary natural resources 
                and ecosystem services to humans.[2] The desired result is a society where 
                living conditions and resources meet human needs without 
                undermining the planetary integrity and stability of the natural system.</p>

        </div>
    </div>
  )
}

export default About