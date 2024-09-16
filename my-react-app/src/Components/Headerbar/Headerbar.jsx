import React from 'react'
import './Headerbar.css'

const Headerbar = () => {
  return (
    <div>
        <header id="myHeader">
            <h1>AVENGERS</h1>
            <nav>
                <ul className='navMenu'>
                    <li>Ironman</li>
                    <li>Captain America</li>
                    <li>Thor</li>
                    <li>Hulk</li>
                </ul>
            </nav>
        </header>
        
    </div>
  )
}

export default Headerbar