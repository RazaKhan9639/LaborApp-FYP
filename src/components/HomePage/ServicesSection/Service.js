import React from "react";
import img from "./assets/AC_Services.png";
import "./services.css";

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
                  <a href="#">
                    <img
                      loading="lazy"
                      src={img}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Ac Services</p>
                  </a>
                </li>
                <li className="sc-item">
                  <a href="#">
                    <img
                      loading="lazy"
                      src={img}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Plumber</p>
                  </a>
                </li>
                <li className="sc-item">
                  <a href="#">
                    <img
                      loading="lazy"
                      src={img}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Car</p>
                  </a>
                </li>
                <li className="sc-item">
                  <a href="#">
                    <img
                      loading="lazy"
                      src={img}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Electrician</p>
                  </a>
                </li>
                <li className="sc-item">
                  <a href="#">
                    <img
                      loading="lazy"
                      src={img}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Handyman</p>
                  </a>
                </li>
                <li className="sc-item">
                  <a href="#">
                    <img
                      loading="lazy"
                      src={img}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Painter</p>
                  </a>
                </li>
                <li className="sc-item">
                  <a href="#">
                    <img
                      loading="lazy"
                      src={img}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Carpenter</p>
                  </a>
                </li>
                <li className="sc-item">
                  <a href="#">
                    <img
                      loading="lazy"
                      src={img}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Home Appliances</p>
                  </a>
                </li>
                <li className="sc-item">
                  <a href="#">
                    <img
                      loading="lazy"
                      src={img}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Geyser</p>
                  </a>
                </li>
                <li className="sc-item">
                  <a href="#">
                    <img
                      loading="lazy"
                      src={img}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">PestControl</p>
                  </a>
                </li>
                <li className="sc-item">
                  <a href="#">
                    <img
                      loading="lazy"
                      src={img}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Car Detailing</p>
                  </a>
                </li>
                <li className="sc-item">
                  <a href="#">
                    <img
                      loading="lazy"
                      src={img}
                      alt="Ac_Services"
                      height={69}
                      width={69}
                    />
                    <p className="li_Class">Cleaning</p>
                  </a>
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
