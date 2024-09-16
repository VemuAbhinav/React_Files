import React from 'react'
import LoginPopUp from '../../Components/LoginPopUp/LoginPopUp'
import './Login.css'

const Login = () => {
  return (
    <LoginPopUp route="/base/token/" method="login" />
  )
}

export default Login