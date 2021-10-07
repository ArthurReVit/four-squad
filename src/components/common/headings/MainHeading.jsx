// Load styles
import "./headings.css";

const MainHeading = (props) => {
  return <h1 className={`main-heading ${props.variant}`}>{props.text}</h1>;
};

export default MainHeading;
