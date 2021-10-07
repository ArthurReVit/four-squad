import { Link } from "react-router-dom";

//Load styles
import "./buttons.css";

const HeaderLink = (props) => {
  return (
    <Link onClick={props.onClick} className="header-link" to={props.to}>
      {props.text.toUpperCase()}
    </Link>
  );
};

export default HeaderLink;
