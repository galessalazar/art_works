import React from "react";
import Menu from "./Menu";
import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <div>
            <Link to='/'>
            ART<span>WORKS</span>
            </Link></div>
          <small>Gallery of Arts</small>
        </div>
        <div className="nav-right">
         <Menu />
        </div>
       
      </nav>
    </header>
  );
};

export default Header;
