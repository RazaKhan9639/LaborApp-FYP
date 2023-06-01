import React from "react";
import "./header.css";

import { NavLink, useLocation } from "react-router-dom";
import { FaTools } from "react-icons/fa";

function Header() {
  const location = useLocation();
  const isLoggedIn = location.pathname === "/home";

  return (
    <>
      <header>
        <NavLink className="logo" to="/#">
          <FaTools className="Logo" />
        </NavLink>
        <nav>
          <ul className="nav__links">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              {/* <a href="#">Services</a> */}
              <span className="dropdown">
                <NavLink to="/progressbar" class="dropbtn">
                  Services
                </NavLink>
                <span className="dropdown-content">
                  <NavLink to="/home">Home </NavLink>
                  <NavLink to="/home">Cleaning </NavLink>
                  <NavLink to="/home">Car </NavLink>
                </span>
              </span>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/serviceprovider">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/faqs">FAQs</NavLink>
            </li>
            <li>
              <NavLink to="/orders">Your Order</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
        {isLoggedIn ? (
          <NavLink className="cta" to="/#">
            Logout
          </NavLink>
        ) : (
          <NavLink className="cta" to="/#">
            Login/signUp
          </NavLink>
        )}

        <NavLink to="/#" className="cta">
          Become Labor
        </NavLink>

        <NavLink className="menu cta">Menu</NavLink>
      </header>
      <div id="mobile__menu" className="overlay">
        <NavLink to="/#" className="close">
          &times;
        </NavLink>
        <div className="overlay__content">
          <NavLink to="/#">Services</NavLink>
          <NavLink to="/#">Hiring</NavLink>
          <NavLink to="/#">About</NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
