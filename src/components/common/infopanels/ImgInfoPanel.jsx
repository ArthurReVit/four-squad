// Load styles
import "./infopanels.css";

const ImgInfoPanel = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.background})`,
      }}
      className={`img-info-panel ${props.variant}`}
    >
      {props.children}
    </div>
  );
};

export default ImgInfoPanel;
