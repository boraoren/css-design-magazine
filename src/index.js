import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="_1" />
        <div className="_2">
          <div className="_2_1">DESIGN</div>
          <div className="_2_2">Magazine</div>
        </div>
        <div className="_3">
          <div className="_3_1">
            <h1>PRODUCT INSPIRATION</h1>
          </div>
          <h2 className="_3_2">
            Effect if in up no depend seemed. Ecstatic elegance
          </h2>
        </div>
        <img
          src="https://github.com/boraoren/css-design-magazine/blob/master/src/yourMagazine.png?raw=true"
          alt="your magazine"
          className="_4"
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
