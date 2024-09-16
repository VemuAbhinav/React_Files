import React from 'react'
import './All_title.css'

const All_title = ({subTitle,title}) => {
  return (
    <div className='title'>
       <p>____ {subTitle} _____</p>
       <h2>{title}</h2> 
    </div>
  )
}

export default All_title