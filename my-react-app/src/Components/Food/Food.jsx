import React from 'react'
import './Food.css'

const Food = () => {

    const food1="Orange";
    const food2="Banana";
  return (
    <ul>
        <li>Apple</li>
        <li>{food1}</li>
        <li>{food2}</li>
        <li></li>
        <li></li>
    </ul>
  )
}

export default Food