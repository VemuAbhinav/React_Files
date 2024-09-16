import React from 'react'
import './Card.css'


const Card = (props) => {
  return (
    <div className="cardBody">
        <img src={props.img} alt="Girl Smoking" id="image"></img>
        <hr></hr>
        <h1 id="sno">{props.sno}</h1>
        <h3>{props.name}</h3>
        <p>{props.text}</p>
    </div>
  )
}

export default Card