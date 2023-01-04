import React from "react";
import { FaTiktok, FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Labour App</h4>
            <ul>
              <li>
                <NavLink to="#">about us</NavLink>
              </li>
              <li>
                <NavLink to="#">our services</NavLink>
              </li>
              <li>
                <NavLink to="#">privacy policy</NavLink>
              </li>
              <li>
                <NavLink to="#">affiliate program</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <NavLink to="#">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="#">shipping</NavLink>
              </li>
              <li>
                <NavLink to="#">returns</NavLink>
              </li>
              <li>
                <NavLink to="#">order status</NavLink>
              </li>
              <li>
                <NavLink to="#">payment options</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>online shop</h4>
            <ul>
              <li>
                <NavLink to="#">watch</NavLink>
              </li>
              <li>
                <NavLink to="#">bag</NavLink>
              </li>
              <li>
                <NavLink to="#">shoes</NavLink>
              </li>
              <li>
                <NavLink to="#">dress</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <NavLink to="#">
                <FaGoogle />
              </NavLink>
              <NavLink to="#">
                <FaTiktok />
              </NavLink>
              <NavLink to="#">
                <FaInstagram />
              </NavLink>
              <NavLink to="#">
                <FaFacebook />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
