import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <hl></hl>
        <a
          href="https://www.linkedin.com/in/cyprian-gomes-314b4939/"
          target="_blank"
          className="icon fa-lg fa fa-linkedin footer-icon"
        >
          linkedIn
        </a>
        <a
          href="https://github.com/capg84"
          target="_blank"
          className="icon fa-lg fa fa-github footer-icon"
        >
          GitHub
        </a>
        <a
          href="mailto:cyprian.gomes@live.co.uk"
          target="_blank"
          className="icon fa-regular fa-at footer-icon"
        >
          Email
        </a>
        <a
          href="tel:+447545839711"
          className="icon fa-solid fa-phone footer-icon"
        >
          Mobile
        </a>
      </div>
      <div className="copyright">&copy; 2022 Cyprian Gomes</div>
    </footer>
  );
};

export default Footer;
