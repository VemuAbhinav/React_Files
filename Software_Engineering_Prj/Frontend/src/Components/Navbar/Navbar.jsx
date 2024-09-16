import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/ecoalert.png'
/* { Link } from 'react-scroll';*/
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

  const [sticky,setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50? setSticky(true):setSticky(false);
    })
  },[]);

  const [mobileMenu,setMobileMenu]=useState(false);

  const toggleMenu = ()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true);

  }

  


  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
        <Link to='/'><img className='logo' src={logo} alt="" /></Link>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            {/*<li><Link to='/'><div className='h' href="">Home</div></Link></li>
            <li><div className='h' href="">Program</div></li>
            <li><div className='h' href="">About us</div></li>
            <li><div className='h' href="">Testimonials</div></li>
  <li><div className='h' href="">Contact Us</div></li>*/}
            <li><Link to='/logout'><button className='btn'>LogOut</button></Link></li>
            
        </ul>
        <img className='menu-icon' src={menu_icon} alt="" onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar