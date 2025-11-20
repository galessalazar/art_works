import React from "react";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container-newsletter">
        <div className="newsletter">
          <h2>Sign Up for the ArtWorks Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter email" required />
            <button type="submit" className="btn-newsletter">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="container">
        <div>
          <ul className="footer-left">
            <li>
              <a href="" className="logo">
                <span>ART</span>WORKS
              </a>
            </li>
            <li>
              <i className="fa-regular fa-phone"></i>
              <a href="tel:2414838264">241.482.8264</a>
            </li>
            <li>
              <i className="fa-regular fa-envelope"></i>
              <a href="mailto:artworks@gmail.com">artworks@gmail.com</a>
            </li>
            <li>
              <i className="fa-regular fa-location-dot"></i>

              <span>
                <div>100 West River Ave</div>
                <div>San Antonio, TX 78366</div>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <ul className="footer-right">
              <li>
                <Link to="/about">About </Link>
              </li>
              <li>
                <a href="">Hours</a>
              </li>
              <li>
                <a href="">Purchase Tickets</a>
              </li>
              <li>
                <a href="">Volunteer & Donate</a>
              </li>
              <li>
                <a href="">Artworks Newsletter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Artworks & Gallery of Art. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
