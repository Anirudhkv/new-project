import React from "react";
import Logo from "../images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{

    const [loginButtonText,setloginButtonText] =useState("Login");
    const onlineStatus= useOnlineStatus();

    return(
      <div className="flex justify-between shadow-lg h-28">
        <div className="logo-container">
          
            <img className="w-28 h-28 rounded-md items-center" src={Logo}/>
       
        </div>
        <div className="flex items-center m-2">
            <ul className="flex p-4 m-4">
              <li className="px-4">{onlineStatus?"Online ✅":"Offline 🔴"}</li>
              <li className="px-4 text-green-500"><Link to="/">Home</Link></li>
              <li className="px-4 text-green-500"><Link to="/About" style={{ textDecoration: 'none',color: "#30a671" }}>About Us</Link></li>
              <li className="px-4 text-green-500"><Link to="/Contact" style={{ textDecoration: 'none',color: "#30a671" }}>Contact Us</Link></li>
              <li className="px-4 text-green-500"><Link to="/Grocery" style={{ textDecoration: 'none',color: "#30a671" }}>Grocery</Link></li>
              <li className="px-4 text-green-500">Cart</li>
              <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-6 py-2.5 text-center mb-2 ml-6" onClick={()=>{
                 loginButtonText==="Login"?setloginButtonText("Logout"):setloginButtonText("Login");
              }}>{loginButtonText}</button>
              
            </ul>
  
          </div>
      </div>
    )
  }
  export default Header;