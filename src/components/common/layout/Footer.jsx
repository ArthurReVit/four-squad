import Logo from "../../../img/FS-light.png";

// Load styles
import "./layout.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <img className="footer-logo" src={Logo} alt="FourSquad" />
      <p>&copy; {new Date().getFullYear()} FourSquad</p>
    </footer>
  );
};

export default Footer;
