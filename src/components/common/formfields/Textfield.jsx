// Load styles
import "./formfields.css";

const TextField = (props) => {
  return (
    <input
      className="textfield"
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      onChange={props.onChange}
    />
  );
};

export default TextField;
