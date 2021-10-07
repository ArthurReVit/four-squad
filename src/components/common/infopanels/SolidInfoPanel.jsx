const SolidInfoPanel = (props) => {
  return (
    <div
      style={{ background: props.background }}
      className={`solid-info-panel ${props.variant}`}
    >
      {props.children}
    </div>
  );
};

export default SolidInfoPanel;
