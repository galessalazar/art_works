import React, { useState } from "react";
import { Link } from "react-router";

const Menu = () => {
  const [active, setActive] = useState(false);
  const toggleMenu = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="hamburger">
        <button
          onClick={toggleMenu}
          type="button"
          id="btn-hamburger"
          className={`btn-hamburger ${active ? 'active' : ''}`}
        >
          <span className="hamburger-line top"></span>
          <span className="hamburger-line middle"></span>
          <span className="hamburger-line bottom"></span>
        </button>
      </div>
      <div className={`hamburger-menu ${active ? 'active' : ''}`}>
        <ul>
          <li className="menu-item">
            <Link to="/about">About</Link>
            
          </li>
          <li className="menu-item">
            <Link to="">Purchase Tickets</Link>

          </li>
          <li className="menu-item">
            <Link to="">Hours</Link>

          </li>
          <li className="menu-item">
            <Link to="">Membership & Community Events</Link>

          </li>
          <li className="menu-item">
            <Link to="">Volunteer & Donate</Link>

          </li>
          <li className="menu-item">
            <Link to="">Artworks & Newsletter</Link>

          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
