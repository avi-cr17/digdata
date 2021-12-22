import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
const [click, setClick] = React.useState(false);

const handleClick = () => setClick(!click);
const Close = () => setClick(false);

const [navstate,Setnavstate]=useState("navbar")


  useEffect(()=>{
     document.addEventListener("scroll", e => {
      
      if (window.scrollY >= 50) {
        if (navstate !== "nav-sticky") {
          Setnavstate("nav-sticky")
        }
      } else {
        if (navstate !== "navbar") {
          Setnavstate("navbar")
        }
      }
    })
   
    
  },[navstate])


return (
  <div>
   <div className={click ? "main-container" : ""} onClick={()=>Close()} />
    <nav className={navstate+" shadow-2xl shadow-black"} onClick={(e)=>e.stopPropagation()}>
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          DigData
          <i class="fa fa-database" aria-hidden="true"></i>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/blog"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              activeClassName="active"
              className="nav-links"
             onClick={click ? handleClick : null}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
      </div>
    </nav>
  </ div>
        
    )
}

export default Nav
