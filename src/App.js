import { useState } from "react";

// Load styles
import "./App.css";

// Load layout components
import Header from "./components/common/layout/Header";
import Footer from "./components/common/layout/Footer";

// Load route components
import Landing from "./components/modules/public/landing/Landing";
import Services from "./components/modules/public/services/Services";
import Contact from "./components/modules/public/contact/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [currentView, setCurrentView] = useState("landing");
  const [interest, setInterest] = useState("design");
  const themeStyles = {
    header: "site-header=small",
    body: "site-bg-img",
  };

  const onLandingClick = () => {
    setCurrentView("landing");
  };

  const onServicesClick = () => {
    setCurrentView("services");
  };

  const onContactClick = () => {
    setCurrentView("contact");
  };

  const handleServiceInterest = (e) => {
    setInterest(e.target.value);
  };

  switch (currentView) {
    case "landing":
      themeStyles.header = "site-header-small";
      themeStyles.body = "site-bg-img";
      themeStyles.wrapper = "route-wrapper";
      break;
    case "services":
      themeStyles.header = "site-header-small";
      themeStyles.body = "site-bg-solid";
      themeStyles.wrapper = "route-wrapper";
      break;
    case "contact":
      themeStyles.header = "site-header-extended";
      themeStyles.body = "site-bg-solid";
      themeStyles.wrapper = "route-wrapper-min";
      break;
    default:
      themeStyles.header = "site-header-small";
      themeStyles.body = "site-bg-img";
      themeStyles.wrapper = "route-wrapper";
      break;
  }

  return (
    <Router>
      <div className={themeStyles.body}>
        <Header
          headerTheme={themeStyles.header}
          onLandingClick={onLandingClick}
          onServicesClick={onServicesClick}
          onContactClick={onContactClick}
        />
        <div className={themeStyles.wrapper}>
          <Switch>
            <Route exact path="/">
              <Landing
                onServicesClick={onServicesClick}
                onContactClick={onContactClick}
              />
            </Route>
            <Route path="/services">
              <Services
                onServicesClick={onServicesClick}
                onContactClick={onContactClick}
                handleServiceInterest={handleServiceInterest}
              />
            </Route>
            <Route path="/contact">
              <Contact
                interest={interest}
                onServicesClick={onServicesClick}
                onContactClick={onContactClick}
                handleServiceInterest={handleServiceInterest}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
