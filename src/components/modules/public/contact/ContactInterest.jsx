// Load common components
import TabButton from "../../../common/buttons/TabButton";
import SolidInfoPanel from "../../../common/infopanels/SolidInfoPanel";
import Doodle from "../../../common/pictures/Doodle";
import MainHeading from "../../../common/headings/MainHeading";
import MainDivider from "../../../common/dividers/MainDivider";
import CommonTextbox from "../../../common/textboxes/CommonTextbox";

// Load images
import Coding from "../../../../img/coding.png";
import Design from "../../../../img/ui-design.png";

// Load styles
import "./contact.css";

const DevInfoPanel = () => {
  return (
    <SolidInfoPanel variant="full">
      <Doodle doodle={Coding} alt="Web Development" />
      <MainHeading variant="margin-top" text="Desarrollo Web" />
      <MainDivider />
      <CommonTextbox
        variant="margin-bottom"
        text="Desde páginas web simples hasta aplicaciones que muestren datos de forma geográfica, podemos desarrollar una solución que ayude a cumplir los requerimientos de su negocio."
      />
    </SolidInfoPanel>
  );
};

const UIInfoPanel = () => {
  return (
    <SolidInfoPanel variant="full">
      <Doodle doodle={Design} alt="UI Design" />
      <MainHeading variant="margin-top" text="Diseño UX/UI" />
      <MainDivider />
      <CommonTextbox
        variant="margin-bottom"
        text="Ya cuenta con una aplicación y quiere escalar? Podemos hacerlo! Optimizando y añadiendo funcionalidad a su servicio, podemos mejorar la experienica de sus usuarios."
      />
    </SolidInfoPanel>
  );
};

const ContactInterest = (props) => {
  const { interest } = props;

  return (
    <div className="contact-interest-wrapper">
      <nav className="interest-navbar">
        <TabButton
          active={
            interest === "development" ? "tab-button-active" : "tab-button"
          }
          value="development"
          onClick={props.handleServiceInterest}
          text="Desarrollo Web"
        />
        <TabButton
          active={interest === "design" ? "tab-button-active" : "tab-button"}
          value="design"
          onClick={props.handleServiceInterest}
          text="Diseño UX/UI"
        />
      </nav>
      {interest === "development" ? <DevInfoPanel /> : <UIInfoPanel />}
    </div>
  );
};

export default ContactInterest;
