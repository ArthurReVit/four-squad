// Load styles
import "./buttons.css";

const TabButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      value={props.value}
      className={props.active}
    >
      {props.text.toUpperCase()}
    </button>
  );
};

export default TabButton;
