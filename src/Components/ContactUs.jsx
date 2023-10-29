import React from "react";

const ContactUs = () => {
  return (
    <footer className="footer-container">
      <div className="footer-contact">
        <h3 className="footer-heading">CONTACT US</h3>
        <p className="footer-description">
          Pepcreations A Unit of Guires - www.guires.com
          <br />
          <i class="fa-solid fa-house"></i>
          Address: No. 10, Kutty Street, Nungambakkam, Chennai
          <br />
          Tamil Nadu, India - 600034
          <br />
          <i class="fa-solid fa-phone"></i>
          Phone Number:{" "}
          <a href="tel:+919384806335" className="footer-link">
            +91 9384806335
          </a>
          <br />
          <i class="fa-solid fa-envelope"></i>
          Email:{" "}
          <a href="mailto:info@pepcreations.com" className="footer-link">
            Info@pepcreations.com
          </a>
        </p>
      </div>
      <div className="footer-contact">
        <h3 className="footer-heading">QUICK LINKS</h3>
        <div className="footer-description">
          <p className="text-green"> About Us</p>
          <p className="text-green"> Career</p>
          <p className="text-green"> Home</p>
        </div>
      </div>

      <div className="footer-contact">
        <h3 className="footer-heading">CUSTOMER EMAIL</h3>

        <p
          href="mailto:info@pepcreations.com"
          className=" footer-description text-green"
        >
          Support
        </p>
      </div>
      <div className="footer-contact">
        <h3 className="footer-heading">PHONE NUMBER</h3>
        <p className="footer-description">
          <p href="tel:+919384806335" className="text-green">
            +91 9384806335
          </p>
        </p>
      </div>
    </footer>
  );
};

export default ContactUs;
