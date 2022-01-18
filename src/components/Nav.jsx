import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

import { Link } from 'react-scroll';

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
        <Link exact to="/" className="nav-logo">
          DigData
          <i class="fa fa-database" aria-hidden="true"></i>
        </Link>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              exact
              to="top-div"
              smooth={true}
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="/blog"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link
              exact
              to="fourth"
              activeClassName="active"
              smooth={true}
              className="nav-links"
             onClick={click ? handleClick : null}
            >
              Contact Us
            </Link>
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
