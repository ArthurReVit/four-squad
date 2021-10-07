// Load styles
import "./pictures.css";

const Doodle = (props) => {
  return <img className="doodle" src={props.doodle} alt={props.alt} />;
};

export default Doodle;
