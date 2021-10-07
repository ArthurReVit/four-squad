// Load styles
import "./formfields.css";

const TextArea = (props) => {
  return (
    <textarea
      className="textarea"
      name={props.name}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></textarea>
  );
};

export default TextArea;
