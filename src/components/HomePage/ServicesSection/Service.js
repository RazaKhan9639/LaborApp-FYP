import React from "react";
import img from "./assets/AC.png";
import car from "./assets/Car.png";
import plumber from "./assets/Plumber.png";
import electrician from "./assets/electrician.png";
import handyman from "./assets/handyman.png";
import painter from "./assets/painter.png";
import carpenter from "./assets/carpenter.png";
import homeappliance from "./assets/homeApp.png";
import geyser from "./assets/geyser.png";
import pest from "./assets/pest.png";
import cardetail from "./assets/carDetailing.png";
import cleaning from "./assets/cleaning.png";
import "./services.css";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <>
      <section className="service">
        <div className="contained">
          <h2 className="section_title text-center">Services</h2>
          <p className="section_exp text-grey text-center">
            Choose from our wide range of services
          </p>
          <div className="line">
            <div className="cl-12">
              <ul className="services-cards no-disc">
                <li className="sc-item">
                  <NavLink to="/ACcategories">
                    <img
                      loading="lazy"
                      src={img}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Ac Services</p>
                  </NavLink>
                </li>
                <li className="sc-item">
                  <NavLink to="/plumbing">
                    <img
                      loading="lazy"
                      src={plumber}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Plumber</p>
                  </NavLink>
                </li>
                <li className="sc-item">
                  <NavLink to="/carservices">
                    <img
                      loading="lazy"
                      src={car}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Car</p>
                  </NavLink>
                </li>
                <li className="sc-item">
                  <NavLink to="/electrician">
                    <img
                      loading="lazy"
                      src={electrician}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Electrician</p>
                  </NavLink>
                </li>
                <li className="sc-item">
                  <NavLink to="/handyman">
                    <img
                      loading="lazy"
                      src={handyman}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Handyman</p>
                  </NavLink>
                </li>
                <li className="sc-item">
                  <NavLink to="/painting">
                    <img
                      loading="lazy"
                      src={painter}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Painter</p>
                  </NavLink>
                </li>
                <li className="sc-item">
                  <NavLink to="/carpenter">
                    <img
                      loading="lazy"
                      src={carpenter}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Carpenter</p>
                  </NavLink>
                </li>
                <li className="sc-item">
                  <NavLink to="/homeappliance">
                    <img
                      loading="lazy"
                      src={homeappliance}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Home Appliances</p>
                  </NavLink>
                </li>
                <li className="sc-item">
                  <NavLink to="/geyser">
                    <img
                      loading="lazy"
                      src={geyser}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Geyser</p>
                  </NavLink>
                </li>
                <li className="sc-item">
                  <NavLink to="/pestcontrol">
                    <img
                      loading="lazy"
                      src={pest}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">PestControl</p>
                  </NavLink>
                </li>
                <li className="sc-item">
                  <NavLink to="/cardetailing">
                    <img
                      loading="lazy"
                      src={cardetail}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Car Detailing</p>
                  </NavLink>
                </li>
                <li className="sc-item">
                  <NavLink to="/homecleaning">
                    <img
                      loading="lazy"
                      src={cleaning}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Cleaning</p>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
