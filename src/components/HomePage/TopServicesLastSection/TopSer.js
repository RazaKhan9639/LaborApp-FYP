import React from "react";
import "./TopSer.css";
import Data from "./ServiceData.json";

const TopServices2 = () => {
  return (
    <>
      <section className="top-services greyed-box mb-4">
        <h2 className="section-title mb-3">Top Services</h2>
        {Data &&
          Data.map((item) => {
            return (
              <div className="top-services-inner" key={item.id}>
                <ul className="topservices-ul no-disc" key={item.id}>
                  <li className="tsu-item">
                    <a href="/home">{item.ServiceName}</a>
                  </li>
                </ul>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default TopServices2;
