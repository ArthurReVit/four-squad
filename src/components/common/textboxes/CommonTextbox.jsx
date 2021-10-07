// Load styles
import "./textboxes.css";

const CommonTextbox = (props) => {
  return <p className={`common-textbox ${props.variant}`}>{props.text}</p>;
};

export default CommonTextbox;
