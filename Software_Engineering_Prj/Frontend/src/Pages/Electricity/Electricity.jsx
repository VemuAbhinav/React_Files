import React from 'react'
import './Electricity.css'
import dark_arrow from '../../assets/dark-arrow.png'
import All_title from '../../Components/All_Title/All_title'
import Slabs from '../../Components/slabs/slabs'
import PowerAly from '../../Components/PowerAly/PowerAly'
import Predictpower from '../../Components/Predictpower/Predictpower'
import ElectricityBillForm from '../../Components/ElectricityBillForm/ElectricityBillForm'

const Electricity = () => {
  return (
    <>
    <div className='heroE container'>
        <div className="hero-text">
            <h1>Electricity</h1>
            <p>A Sustainable way to use Electricity is to monitor our usage and trying to minimize the consumption</p>
            
        </div>
    </div>
    <div className="container">
      <All_title subTitle='Enter your Bill Info' title='Let us handle your Data'/>
      <ElectricityBillForm/>
      <All_title subTitle='Electricity Slabs' title='Check your current Slab'/>
      <Slabs/>
      <All_title subTitle='Power Analysis' title='Analyze your Usage'/>
      <PowerAly/>
      <All_title subTitle='Power Prediction' title='Your next bill could be'/>
      <Predictpower/>
    </div>
    
    
    </>
  )
}

export default Electricity