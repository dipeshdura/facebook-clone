
import Logo from '../assets/img/4lCu2zih0ca.svg';
import { useState } from 'react';
import Signup from './Signup';


export default function Login() {
    const [create,setCreate]=useState(false);
    const toggleCreate =()=>{
      setCreate(!create);
    }
  return (
    <>

    <div className="facebook-app-container">
      {create &&  (
        <div className="signup-toggle-contain">
    <div className="signup-contain"><Signup toggle={toggleCreate}/></div>
        </div>)}
    <div className="facebook-app">
        <div className="facebook-login-info flex">
    <div className="facebook-name">
    <img src={Logo} alt="facebook-logo" className="facebook-logo" />
      <p className="facebook-text">Connect with friends and the world around you on Facebook.</p>
    </div>
    <div className="facebook-login w-390">
      <div className="facebook-login-box">
        <input type="text" placeholder="Email or Phone number " />
        <input type="text" placeholder="Password " />
        <button className="bg-blue-600 text-white p-3 rounded font-bold ">Log In</button>
        <a href="nothing" className="text-center text-blue-600 my-2 hover:cursor-pointer hover:underline">Forgot password ?</a>
        
        <hr className="my-5" />
        <div className="flex justify-center align-baseline">
          
        <button className="bg-green-500 py-3 rounded text-white font-bold p-3" onClick={toggleCreate}>Create new account</button>
        
        </div>
      </div>
      <div className="facebook-login-page my-4 flex flex-col">
        <p className="text-sm text-center"><span className="hover:underline font-bold cursor-pointer">Create a Page</span> for a celebrity, brand or business</p>
      </div>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}
