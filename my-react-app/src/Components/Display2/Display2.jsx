import React, { useState } from 'react'
import './Display2.css'
import { FaRegStar, FaStar } from 'react-icons/fa';

const Display2 = () => {
  const [ratecount,setRatecount]=useState(0);
  const [hovercount, sethovercount] = useState(0);

  return (
    <div className='display2'>
      <div className="rateCard">
        <p>Rating</p>
        <div className="stars">

          {/* {[...Array(5)].map((_,index)=>{
            return (
              <FaStar className={`${index<ratecount?'custom-full-icon':'custom-icon'} ${index<hovercount?'custom-full-icon':'custom-icon'}`} onClick={()=>{setRatecount(index+1)}} 
              onMouseOver={()=>{sethovercount(index+1)}}
              onMouseDown={()=>{sethovercount(0)}}/>
            )
          })} */}

          {[...Array(5)].map((_,index)=>{
            return (
              <FaStar className={`${(index+1)%ratecount===0?'custom-full-icon':'custom-icon'} ${index<hovercount?'custom-full-icon':'custom-icon'}`} onClick={()=>{setRatecount(index+1)}} 
              />
            )
          })}
          
          
          {/* {ratecount===1?<FaStar className='custom-full-icon'/>:<FaRegStar className='custom-icon' onClick={()=>{setRatecount(1)}}/>}
          {ratecount===2?<FaStar className='custom-full-icon'/>:<FaRegStar className='custom-icon' onClick={()=>{setRatecount(2)}}/>}
          {ratecount===3?<FaStar className='custom-full-icon'/>:<FaRegStar className='custom-icon' onClick={()=>{setRatecount(3)}}/>}
          {ratecount===4?<FaStar className='custom-full-icon'/>:<FaRegStar className='custom-icon' onClick={()=>{setRatecount(4)}}/>}
          {ratecount===5?<FaStar className='custom-full-icon'/>:<FaRegStar className='custom-icon' onClick={()=>{setRatecount(5)}}/>} */}
          
        </div>
        <p>Rating given:{ratecount}</p>
      </div>
    </div>
  )
}

export default Display2