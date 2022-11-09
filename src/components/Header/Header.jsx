import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";

function Header() {
  const doc = document;
  const menuOpen = doc.querySelector(".menu");
  const menuClose = doc.querySelector(".close");
  const overlay = doc.querySelector(".overlay");

  

  return (
    <>
      <header>
        <a className="logo" href="/">
          <img src="images/logo.svg" alt="logo"></img>{" "}
        </a>
        <nav>
          <ul className="nav__links">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <a className="cta" href="#">
          Contact
        </a>
        <p className="menu cta">Menu</p>
      </header>
      <div id="mobile__menu" class="overlay">
        <a class="close">&times;</a>
        <div class="overlay__content">
          <a href="#">Services</a>
          <a href="#">Hiring</a>
          <a href="#">About</a>
        </div>
      </div>
    </>

    
  );

  
}

export default Header;
