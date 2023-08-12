import React from "react";
import "./nav.css";
import logo from "../images/logo.PNG";
import AllImages from "../images/imagemudule";

const Navbar = () => {
  return (
    <nav className="nav_menu">
      <a>
        <img className="page_logo" src={AllImages.logo} />
      </a>
      <div className='menuewrapper'>
        <a href="/" className="menu">
          Home
        </a>
        <a href="/about" className="menu">
          About
        </a>
        <a href="/gallery" className="menu">
          Gallery
        </a>
        <a href="/contact" className="menu">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
