import React from 'react'

import Card from './Components/Card/Card'
import profilePic2 from './assets/profilePic2.jpg'
import profilePic from './assets/profilePic.png'
import profilePic3 from './assets/profilePic3.png'
import profilePic4 from './assets/profilePic4.png'



const App = () => {
  return (
    <>
      <Card img={profilePic} sno={1} name="Asthetic Girl" text="Smoking Cigeratte"/>
      <Card img={profilePic2} sno={2} name="Tony Stark" text="Working"/>
      <Card img={profilePic3} sno={3} name="Bumblebee" text="Autobots"/>
      <Card img={profilePic4} sno={4} name="KRATOS" text="Killing Gods"/>
    </>
    
  )
}

export default App