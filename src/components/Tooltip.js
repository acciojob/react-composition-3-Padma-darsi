
import React, { useState } from "react";

const Tooltip = (props) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {props.children}
      {visible && <span className="tooltiptext">{props.text}</span>}
    </div>
  );
};

export default Tooltip;
