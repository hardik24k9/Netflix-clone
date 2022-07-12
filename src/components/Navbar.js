/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else setShow(false);
  };

  /* to add color to background on scroll and transparent normally */
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    /* cleanup function */
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Navbar;
