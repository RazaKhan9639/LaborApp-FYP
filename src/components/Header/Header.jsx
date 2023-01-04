import React from "react";
import "./header.css";
import logo_image from "./Labour_App_Logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  // const doc = document;
  // const menuOpen = doc.querySelector(".menu");
  // const menuClose = doc.querySelector(".close");
  // const overlay = doc.querySelector(".overlay");

  return (
    <>
      <header>
        <NavLink className="logo" to="/#">
          <img src={logo_image} className="Logo" alt="logo"></img>
        </NavLink>
        <nav>
          <ul className="nav__links">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              {/* <a href="#">Services</a> */}
              <span class="dropdown">
                <NavLink to="/#" class="dropbtn">
                  Services
                </NavLink>
                <span class="dropdown-content">
                  <NavLink to="/home">Link 1</NavLink>
                  <NavLink to="/home">Link 2</NavLink>
                  <NavLink to="/home">Link 3</NavLink>
                </span>
              </span>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/home">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/faqs">FAQs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
        <NavLink className="cta" to="/#">
          Login/SignUp
        </NavLink>
        <NavLink className="menu cta">Menu</NavLink>
      </header>
      <div id="mobile__menu" class="overlay">
        <NavLink to="/#" class="close">
          &times;
        </NavLink>
        <div class="overlay__content">
          <NavLink to="/#">Services</NavLink>
          <NavLink to="/#">Hiring</NavLink>
          <NavLink to="/#">About</NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
