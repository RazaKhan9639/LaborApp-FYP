import React from "react";
import image from "./ContactUs.png";
import "./contact.css";
import phone from "./SVGs/phone.svg";
import email from "./SVGs/email.svg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <>
      <div>
        <Header />
        <section className="contact-us">
          <div className="upperSection">
            <div className="ImageSection">
              <img src={image} alt="Contact Us" width={600} height={600} />
            </div>
            <div className="Text">
              <h2 className="Title text-center">Contact Us</h2>
              <p className="Paragraph-Text text-center">
                Labor App provides you with the{" "}
                <strong style={{ color: "#ac2132" }}>
                  best handyman services
                </strong>{" "}
                at your doorstep. We offer you a very simple way of contacting
                us. One of the easiest ways is just to dial our number which is
                mentioned on our site and get in touch with us. Another method
                to contact us is to email us at our{" "}
                <strong style={{ color: "#ac2132" }}>email address</strong>{" "}
                which is mentioned underneath and we respond to you as soon as
                possible.Labor App gives you the best handyman services at
                affordable rates with 24/7 assistance. You can avail of all
                these services by contacting us or simply filling out the form
                below.
              </p>
            </div>
          </div>
          <div className="LowerSection">
            <div className="ContactForm">
              <h2 className="contact-form-title text-center">
                Write about Us!
              </h2>
              <form>
                <div className="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label for="PhoneNumber">Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="email"
                    placeholder="Enter your Phone Number"
                    min={0}
                  />
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="Button">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="CardsSection">
            <div className="Card">
              <div className="CardText text-center">
                <a href="/home">
                  <img src={email} alt="Email" className="EPhone-image" />
                  <h4 className="EmailNumber">help@LaborApp.com</h4>
                </a>
              </div>
              <div className="CardText text-center">
                <a href="/home">
                  <img src={phone} alt="Phone" className="EPhone-image" />
                  <h4 className="EmailNumber">+92314567267</h4>
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Contact;