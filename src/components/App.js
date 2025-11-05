import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <Tooltip text="This is a tooltip for Button">
        <button>Hover over me</button>
      </Tooltip>

      <Tooltip text="Tooltip for text example">
        <p>Hover over this paragraph</p>
      </Tooltip>

      <Tooltip text="Tooltip for link">
        <a href="#">Hover over this link</a>
      </Tooltip>
    </div>
  );
};

export default App;

