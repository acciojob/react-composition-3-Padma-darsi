import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <Tooltip text="This is tooltip text">
        <button>Hover over me</button>
      </Tooltip>
    </div>
  );
};

export default App;
