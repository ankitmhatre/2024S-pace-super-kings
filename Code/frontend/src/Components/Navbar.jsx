import "./nav.css";
import React, { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import profileimg from '../Tv/assets/images/1.png';
import axios from "../network/networkInterceptor";

const Navbar = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;

    const [click, setClick] = useState(false);
  

    const handleClick = () => {
      setClick(!click);
    }
  
    const token = localStorage.getItem('token');




    return (
      <div className="navbar-2">
       <a href="/">
       <div className="logo">
            <div className="img"></div>
            <div className="name"><span style={{fontWeight:'700',fontSize:'1.5rem',color:"#ff8773"}}>InvestMate</span></div>
        </div>
       </a>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* <li>
            <Link to="/dashboard"></Link>
          </li> */}
          {/* <li>
            {" "}
            <Link to="/learningModules">Modules</Link>{" "}

          </li>
          */}
          {token ? (
            <span onClick={handleLogout}>Signout</span>
             
            ) : (
              <Link className="signupLogin" to="/login">Signup / Login</Link>
            )}

          {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}






                         
							
							<li>
								<div class="dropdown header-profile2">
									<a class="nav-link" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										<div class="header-info2 d-flex align-items-center">
											<div class="d-flex align-items-center sidebar-info">
												<div>
													<h4 class="text-white mb-1">Hi, Ankit</h4>
												
												</div>
											</div>
											<img src={profileimg} alt=""/>
										</div>
									</a>
									<div class="dropdown-menu dropdown-menu-end" >
										<a href="app-profile.html" class="dropdown-item ai-icon ">
										
											<span class="ms-2">Profile </span>
										</a>
									
										<a href="javascript:void(0);" class="dropdown-item ai-icon ">											
											<span class="ms-2">Settings </span>
										</a>
										<a href="/dashboard" class="dropdown-item ai-icon">
											<svg class="logout" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fd5353" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
											<span class="ms-2 text-danger">Logout </span>
										</a>
									</div>
								</div>
							</li>
  
        </ul>


















        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#000" }} />
          ) : (
            <FaBars size={30} style={{ color: "#000" }} />
          )}
        </div>
      </div>
  )
}
const handleLogout = () => {
  // Remove token from localStorage or perform any other necessary cleanup
  localStorage.removeItem('token');
  // Redirect or perform other actions after logout if needed
  window.location.href = '/';
};


export default Navbar;