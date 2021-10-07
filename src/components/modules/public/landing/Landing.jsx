import { Link } from "react-router-dom";

// Load common components
import MainHeading from "../../../common/headings/MainHeading";
import CommonTextbox from "../../../common/textboxes/CommonTextbox";
import MainDivider from "../../../common/dividers/MainDivider";
import CommonButton from "../../../common/buttons/CommonButton";

// Load styles
import "./landing.css";

const Landing = (props) => {
  return (
    <div className="landing">
      <div className="landing-textbox">
        <MainHeading text="Bring your idea! We'll turn it into reality..." />
        <MainDivider />
        <CommonTextbox
          variant="margin-bottom"
          text="Página web, e-commerce, Learning Management System... Sí puedes imaginarlo, nosotros lo desarrollamos."
        />
        <CommonTextbox
          variant="margin-bottom"
          text="Dale un vistazo a nuestro portafolio o contáctanos para más información."
        />
        <nav className="landing-nav">
          <Link to="/services">
            <CommonButton onClick={props.onServicesClick} text="Servicios" />
          </Link>
          <Link to="/contact">
            <CommonButton onClick={props.onContactClick} text="Contacto" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Landing;
