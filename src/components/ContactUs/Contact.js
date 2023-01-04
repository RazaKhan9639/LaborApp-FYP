import React from "react";
import image from "./ContactUs.png";
import "./contact.css";
import phone from "./SVGs/phone.svg";
import email from "./SVGs/email.svg";

const Contact = () => {
  return (
    <>
      <div>
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
                </strong>
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
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108613.79943666911!2d73.94094595149696!3d31.710944006496835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918c28a688b5b1f%3A0x80b1b64a08cfde2!2sSheikhupura%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1672857010974!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
          <div className="LowerSection">
            <div className="ContactForm">
              <h2 className="contact-form-title text-center">
                Write about Us!
              </h2>
              <form action="https://formspree.io/f/mbjejolq" method="POST">
                <div className="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <label for="PhoneNumber">Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="email"
                    name="number"
                    placeholder="Enter your Phone Number"
                    min={0}
                  />
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Enter your message"
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
      </div>
    </>
  );
};

export default Contact;
