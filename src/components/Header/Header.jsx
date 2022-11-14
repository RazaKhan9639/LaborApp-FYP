import React from "react";
import "./header.css";

function Header() {
  // const doc = document;
  // const menuOpen = doc.querySelector(".menu");
  // const menuClose = doc.querySelector(".close");
  // const overlay = doc.querySelector(".overlay");



  return (
    <>
      <header>
        <a className="logo" href="/#">
          <img src="images/logo.svg" alt="logo"></img>
        </a>
        <nav>
          <ul className="nav__links">
            <li>
              {/* <a href="#">Services</a> */}
              <span class="dropdown">
                <a href="/#" class="dropbtn">Services</a>
                <span class="dropdown-content">
                  <a href="/#">Link 1</a>
                  <a href="/#">Link 2</a>
                  <a href="/#">Link 3</a>
                </span>
              </span>
            </li>
            <li>
              <a href="/#">Projects</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="/#">
          Contact
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
