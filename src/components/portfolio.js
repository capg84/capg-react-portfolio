import { useState } from "react";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const portfolioPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Projects />;
  };

  const pageChange = (page) => setCurrentPage(page);
  return (
    <div className="container">
      <Navbar currentPage={currentPage} pageChange={pageChange} />
      {portfolioPage()}
      <Footer />
    </div>
  );
};

export default Portfolio;
