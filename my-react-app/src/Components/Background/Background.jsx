import React from 'react'
import './Background.css'
import ironman from '../../assets/Ironman.png'
import captain from '../../assets/CaptainAmerica.png'
import thor from '../../assets/Thor.png'
import hulk from '../../assets/Hulk.png'

const Background = ({heroCount}) => {
  if(heroCount===0){
    return (
      <img src={ironman} className='background fade-in'></img>
    )
  }
  else if(heroCount===1){
    return (
      <img src={captain} className='background fade-in'></img>
    )
  }
  else if(heroCount===2){
    return (
      <img src={thor} className='background fade-in'></img>
    )
  }
  else if(heroCount===3){
    return (
      <img src={hulk} className='background fade-in'/>
    )
  }
}

export default Background