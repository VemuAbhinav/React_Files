import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div>
        <header id="myHeader">
            <h1>Hello World</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>See</li>
                    <li>Dont See</li>
                </ul>
            </nav>
        </header>
        <hr></hr>
    </div>
  )
}

export default Header