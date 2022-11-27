const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <a
          href="https://www.linkedin.com/in/cyprian-gomes-314b4939/"
          className="icon fa-lg fa fa-linkedin"
        ></a>
        <a
          href="https://github.com/capg84"
          className="icon fa-lg fa fa-github"
        ></a>
        <a href="mailto:cyprian.gomes@live.co.uk">
          <i style="font-size:24px" class="fa">
            &#xf0e0;
          </i>
        </a>
        <a href="tel:+447545839711">
          <i class="fa fa-phone" style="font-size:24px"></i>
        </a>{" "}
      </div>
      <div className="copyright">&copy; 2022 Cyprian Gomes</div>
    </footer>
  );
};

export default Footer;
