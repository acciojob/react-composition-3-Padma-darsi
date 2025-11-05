import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <Tooltip text="This is a tooltip">
        <p>Hover over this text to see the tooltip</p>
      </Tooltip>

      <Tooltip text="React is awesome!">
        <button>Hover over this button</button>
      </Tooltip>
    </div>
  );
};

export default App;
