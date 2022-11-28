function Navbar({ currentPage, pageChange }) {
  return (
    <div className="navbar">
      <div className="my-bio">
        <h1>Cyprian Gomes</h1>
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
