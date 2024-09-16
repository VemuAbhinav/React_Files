// import React, { useState } from 'react'
// import './LoginPopUp.css'
// import cross_icon from '../../assets/cross_icon.png'
// import api from '../../api'
// import { useNavigate } from 'react-router-dom'
// import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../constants";
// import {Link} from "react-router-dom"
// import LoadingIndicator from '../LoadingIndicator/LoadingIndicator'

// const LoginPopUp = ({route, method}) => {

//     /*const [currState,setCurrState]= useState("Login")*/
//     const [username,SetUsername] = useState("")
//     const [password,SetPassword] = useState("")
   
//     const [loading,SetLoading] = useState(false)
//     const navigate = useNavigate()

//     const handleSubmit = async (e) => {
//         SetLoading(true);
//         e.preventDefault()

//         try {
//             const res = await api.post(route, { username, password })
//             if (method === "login") {
//                 localStorage.setItem(ACCESS_TOKEN, res.data.access);
//                 localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
//                 navigate("/")
//             } else {
//                 navigate("/login")
//                 {/*navigate("/register")*/}
//             }
//         } catch (error) {
//             alert(error)
//         } finally {
//             SetLoading(false)
//         }

//     }
//     const name = method === "login" ? "Login" : "Register";
//   return (
//     <div className='login-popup'>
//         <form className="login-popup-container" onSubmit={handleSubmit}>
//             <div className="login-popup-title">
//                 {/*<h2>{currState}</h2>*/}
//                 <h2>{name}</h2>
                
//                 {/*<img onClick={()=>setShowLogin(false)} src={cross_icon}/>*/}
//             </div>
//             <div className="login-popup-inputs">
//                 {/*{method==="login"?<></>:<input type="text" placeholder='Your Name' value={username} onChange={(e)=> SetUsername(e.target.value)} required/>}*/}
//                 <input type="text" placeholder='Your Name' value={username} onChange={(e)=> SetUsername(e.target.value)} required/>
//                 {/*<input type="email" placeholder='Your mail' value={email} onChange={(e)=>SetEmail(e.target.value)} required/>*/}
//                 <input type="password" placeholder='Password' value={password} onChange={(e)=> SetPassword(e.target.value)} required/>
//             </div>
//             {loading && <LoadingIndicator />}
            
//             <button type='submit'>{method==="login"?"Login":"SignUp"}</button>
//             <div className="login-popup-condition">
//                 <input type="checkbox" required/>
//                 <p>By Continuing, I agree to the terms of use & privacy policy</p>
//             </div>
//             {/*{currState==="Login"?<p>Create a new account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:<p>Already have an account??<span onClick={()=>setCurrState("Login")}>Login here</span></p>}*/}
//             {method==="login"?<p>Create a new account?<Link to="/register"><span>Register here</span></Link></p>:<p>Already have an account??<Link to="/login"><span>Login here</span></Link></p>}
            
//         </form>
//     </div>
//   )
// }

// export default LoginPopUp

import React, { useState } from 'react';
import './LoginPopUp.css';
import {Link} from "react-router-dom"
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../../constants";
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

const LoginPopUp = ({ route, method }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    // Function to check if the access token exists
    const checkAccessToken = () => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN);
        console.log(accessToken);
        return !!accessToken; // Returns true if accessToken is not null or undefined
    };

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const res = await api.post(route, { username, password });
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    const name = method === "login" ? "Login" : "Register";
    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{name}</h2>
                </div>
                <div className="login-popup-inputs">
                    <input type="text" placeholder='Your Name' value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {loading && <LoadingIndicator />}
                <button type='submit'>{method === "login" ? "Login" : "SignUp"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By Continuing, I agree to the terms of use & privacy policy</p>
                </div>
                {method === "login" ? <p>Create a new account?<Link to="/register"><span>Register here</span></Link></p> : <p>Already have an account??<Link to="/login"><span>Login here</span></Link></p>}
            </form>
        </div>
    );
};

export default LoginPopUp;
