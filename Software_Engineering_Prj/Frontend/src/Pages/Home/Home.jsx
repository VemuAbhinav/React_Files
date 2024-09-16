
import React, { useState } from 'react'
import Programs from '../../Components/Programs/Programs'
import All_title from '../../Components/All_Title/All_title'
import About from '../../Components/About/About'
import Campus from '../../Components/Campus/Campus'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'
import Hero from '../../Components/Hero/Hero'


const Home = () => {
    const [playState,setPlayState]=useState(false);
  return (
    <>
    <Hero/>
    <div className="container">
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
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </>
  )
}

export default Home