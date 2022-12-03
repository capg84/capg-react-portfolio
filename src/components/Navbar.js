import React from "react";
import "../styles/Navbar.css";

function Navbar({ currentPage, pageChange }) {
  return (
    <div className="navbar">
      <div className="my-bio">
        <h1 className="title">
          <a className="title" href="#Home" onClick={() => pageChange("Home")}>
            Cyprian Gomes
          </a>
        </h1>
      </div>

      <div className="navbar">
        <a
          className="nav-menu hide"
          href="#Home"
          onClick={() => pageChange("Home")}
        >
          Home
        </a>
        <a
          className="nav-menu"
          href="#Portfolio"
          onClick={() => pageChange("Portfolio")}
        >
          Portfolio
        </a>
        <a
          className="nav-menu"
          href="#Experience"
          onClick={() => pageChange("Resume")}
        >
          Resume
        </a>
        <a
          className="nav-menu"
          href="#Contact"
          onClick={() => pageChange("Contact")}
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
