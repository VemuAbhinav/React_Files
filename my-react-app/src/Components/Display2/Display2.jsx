import React, { useState } from 'react'
import './Display2.css'
import { FaRegStar, FaStar } from 'react-icons/fa';

const Display2 = () => {
  const [ratecount,setRatecount]=useState(0);

  return (
    <div className='display2'>
      <div className="rateCard">
        <p>Rating</p>
        <div className="stars">
          {}
          {ratecount===1?<FaStar className='custom-full-icon'/>:<FaRegStar className='custom-icon' onClick={()=>{setRatecount(1)}}/>}
          {ratecount===2?<FaStar className='custom-full-icon'/>:<FaRegStar className='custom-icon' onClick={()=>{setRatecount(2)}}/>}
          {ratecount===3?<FaStar className='custom-full-icon'/>:<FaRegStar className='custom-icon' onClick={()=>{setRatecount(3)}}/>}
          {ratecount===4?<FaStar className='custom-full-icon'/>:<FaRegStar className='custom-icon' onClick={()=>{setRatecount(4)}}/>}
          {ratecount===5?<FaStar className='custom-full-icon'/>:<FaRegStar className='custom-icon' onClick={()=>{setRatecount(5)}}/>}
          
        </div>
      </div>
    </div>
  )
}

export default Display2