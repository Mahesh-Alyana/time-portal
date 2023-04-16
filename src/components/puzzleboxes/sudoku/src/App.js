import React from "react";
import Game from "./screens/Game/Game";

import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <Game score={props.score}></Game>
    </div>
  );
};

export default App;
