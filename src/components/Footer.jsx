import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@kikijewels.com</p>
          <p>Phone: (555) 123-4567</p>
          <p>Address: 123 Luxury Lane, Jewelry District</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#instagram">Instagram</a>
            <a href="#facebook">Facebook</a>
            <a href="#pinterest">Pinterest</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Kiki Jewels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
