import { Fragment, useState } from "react";

// Load common components
import HeaderLink from "../buttons/HeaderLink";

// Load images
import FourSquad from "../../../img/FS-light.png";

// Load styles
import "./layout.css";

const MobileHeader = (props) => {
  const [navMenu, setNavMenu] = useState(false);

  const onMenuClick = () => {
    setNavMenu(!navMenu);
  };

  return (
    <header className="mobile-site-header-small">
      <div className="mobile-header-wrapper">
        <img src={FourSquad} alt="Four squad" className="mobile-header-logo" />
        <button
          onClick={onMenuClick}
          className={
            navMenu
              ? "mobile-header-menu-button-active"
              : "mobile-header-menu-button"
          }
        >
          Menú
        </button>
      </div>
      {navMenu && (
        <nav className="mobile-header-menu">
          <HeaderLink onClick={props.onLandingClick} to="/" text="Inicio" />
          <HeaderLink
            onClick={props.onServicesClick}
            to="/services"
            text="Servicios"
          />
          <HeaderLink
            onClick={props.onContactClick}
            to="/contact"
            text="Contacto"
          />
        </nav>
      )}
    </header>
  );
};

const DesktopHeader = (props) => {
  return (
    <header className={`desktop-header ${props.headerTheme}`}>
      <nav className="header-nav">
        <HeaderLink onClick={props.onLandingClick} to="/" text="Inicio" />
        <HeaderLink
          onClick={props.onServicesClick}
          to="/services"
          text="Servicios"
        />
        <HeaderLink
          onClick={props.onContactClick}
          to="/contact"
          text="Contacto"
        />
      </nav>
      <div className="header-logo-wrapper">
        <img src={FourSquad} alt="Four Squad" />
      </div>
    </header>
  );
};

const Header = (props) => {
  return (
    <Fragment>
      <MobileHeader
        onLandingClick={props.onLandingClick}
        onServicesClick={props.onServicesClick}
        onContactClick={props.onServicesClick}
      />
      <DesktopHeader
        headerTheme={props.headerTheme}
        onLandingClick={props.onLandingClick}
        onServicesClick={props.onServicesClick}
        onContactClick={props.onServicesClick}
      />
    </Fragment>
  );
};

export default Header;
