import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">

          {/* Column 1: Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/survey" className="text-light text-decoration-none">Survey</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 2: Contact Info */}
          <div className="col-md-4 mb-3">
            <h5>Contact Info</h5>
            <p className="mb-1">Email: support@surveyform.com</p>
            <p className="mb-1">Phone: +880 123 456 789</p>
            <p className="mb-0">Address: Uttara sector 10, Dhaka</p>
          </div>

          {/* Column 3: Social Media */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaTwitter />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center pt-3 border-top mt-3">
          <small>© 2025 Online Survey Form. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
