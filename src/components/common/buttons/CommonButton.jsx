// Load styles
import "./buttons.css";

const CommonButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      value={props.value}
      className={`common-button ${props.variant}`}
    >
      {props.text.toUpperCase()}
    </button>
  );
};

export default CommonButton;
