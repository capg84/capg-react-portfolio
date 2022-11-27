import React from "react";

function Navbar({ currentPage, pageChange }) {
  return (
    <div className="navbar">
      <a
        className="item-link hide"
        href="#Home"
        onClick={() => pageChange("Home")}
      >
        Home
      </a>
      <a
        className="item-link"
        href="#Portfolio"
        onClick={() => pageChange("Portfolio")}
      >
        Portfolio
      </a>
      <a
        className="item-link"
        href="#Experience"
        onClick={() => pageChange("Resume")}
      >
        Resume
      </a>
      <a
        className="item-link"
        href="#Contact"
        onClick={() => pageChange("Contact")}
      >
        Contact
      </a>
    </div>
  );
}

export default Navbar;
