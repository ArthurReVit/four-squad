import { Link } from "react-router-dom";

// Load common components
import ImgInfoPanel from "../../../common/infopanels/ImgInfoPanel";
import SolidInfoPanel from "../../../common/infopanels/SolidInfoPanel";
import MainHeading from "../../../common/headings/MainHeading";
import MainDivider from "../../../common/dividers/MainDivider";
import CommonTextbox from "../../../common/textboxes/CommonTextbox";
import Doodle from "../../../common/pictures/Doodle";

// Load styles
import "./services.css";

// Load images
import ImgPanelBG from "../../../../img/small-bg1-min.png";
import Coding from "../../../../img/coding.png";
import Design from "../../../../img/ui-design.png";
import CommonButton from "../../../common/buttons/CommonButton";

const Services = (props) => {
  return (
    <div className="services-wrapper">
      <ImgInfoPanel background={ImgPanelBG} variant="third-of-screen">
        <MainHeading text="Servicios" variant="light" />
        <MainDivider />
        <CommonTextbox
          variant="light"
          text="Contamos con amplia experiencia en diseño UX/UI, desarrollo de sitios y aplicaciones web, todo esto usando las últimas tecnologías y lenguajes como React, Node, SQL, C#, entre otros."
        />
      </ImgInfoPanel>
      <SolidInfoPanel variant="third-of-screen">
        <Doodle doodle={Coding} alt="Web Development" />
        <MainHeading variant="margin-top" text="Desarrollo Web" />
        <MainDivider />
        <CommonTextbox
          variant="margin-bottom"
          text="Desde páginas web simples hasta aplicaciones que muestren datos de forma geográfica, podemos desarrollar una solución que ayude a cumplir los requerimientos de su negocio."
        />
        <Link to="/contact" className="button-wrapper">
          <CommonButton
            value={"development"}
            onClick={props.handleServiceInterest}
            text="Más info"
          />
        </Link>
      </SolidInfoPanel>
      <SolidInfoPanel variant="third-of-screen">
        <Doodle doodle={Design} alt="UI Design" />
        <MainHeading variant="margin-top" text="Diseño UX/UI" />
        <MainDivider />
        <CommonTextbox
          variant="margin-bottom"
          text="Ya cuenta con una aplicación y quiere escalar? Podemos hacerlo! Optimizando y añadiendo funcionalidad a su servicio, podemos mejorar la experienica de sus usuarios."
        />
        <Link to="/contact" className="button-wrapper">
          <CommonButton
            value={"design"}
            onClick={props.handleServiceInterest}
            text="Más info"
          />
        </Link>
      </SolidInfoPanel>
    </div>
  );
};

export default Services;
