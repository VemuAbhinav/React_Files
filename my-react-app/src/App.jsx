import React, { useState } from 'react'

import Card from './Components/Card/Card'
import profilePic2 from './assets/profilePic2.jpg'
import profilePic from './assets/profilePic.png'
import profilePic3 from './assets/profilePic3.png'
import profilePic4 from './assets/profilePic4.png'
import Headerbar from './Components/Headerbar/Headerbar'
import Hero from './Components/Hero/Hero'
import Background from './Components/Background/Background'
import Display from './Components/Display/Display'
import Display2 from './Components/Display2/Display2'



const App = () => {

  let heroData=[
    {
      text1:"Ironman",
      text2:"The Genius"
    },
    {
      text1:"Captain America",
      text2:"The Leader"
    },
    {
      text1:"Thor",
      text2:"The God"
    },
    {
      text1:"Hulk",
      text2:"The Monster"
    }
  ]

  const [heroCount,setHeroCount]=useState(0);
  return (
    <>
      <Background heroCount={heroCount}/>
      <Headerbar/>
      <Hero  heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount}/>
      <Display/>
      <Display2/>
      
    </>
    
  )
}

export default App