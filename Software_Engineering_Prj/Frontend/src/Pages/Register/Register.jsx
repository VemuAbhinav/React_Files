import React from 'react'
import LoginPopUp from '../../Components/LoginPopUp/LoginPopUp'
import './Register.css'

const Register = () => {
  return (
    <div className="regBody">
        <LoginPopUp route="/base/user/register/" method="register" />
    </div>
    
  )
}

export default Register