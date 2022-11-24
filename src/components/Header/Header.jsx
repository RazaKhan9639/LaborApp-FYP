import React from "react";
import "./header.css";
import logo_image from "./Labour_App_Logo.png";

function Header() {
  // const doc = document;
  // const menuOpen = doc.querySelector(".menu");
  // const menuClose = doc.querySelector(".close");
  // const overlay = doc.querySelector(".overlay");

  return (
    <>
      <header>
        <a className="logo" href="/#">
          <img src={logo_image} className="Logo" alt="logo"></img>
        </a>
        <nav>
          <ul className="nav__links">
          <li>
              <a href="/home">Home</a>
            </li>
            <li>
              {/* <a href="#">Services</a> */}
              <span class="dropdown">
                <a href="/#" class="dropbtn">Services</a>
                <span class="dropdown-content">
                  <a href="/home">Link 1</a>
                  <a href="/home">Link 2</a>
                  <a href="/home">Link 3</a>
                </span>
              </span>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/home">Blog</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="/#">
          Login/SignUp
        </a>
        <p className="menu cta">Menu</p>
      </header>
      <div id="mobile__menu" class="overlay">
        <a href="/#" class="close">&times;</a>
        <div class="overlay__content">
          <a href="/#">Services</a>
          <a href="/#">Hiring</a>
          <a href="/#">About</a>
        </div>
      </div>
    </>


  );


}

export default Header;
