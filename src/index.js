import React from "react";
import ReactDOM from "react-dom";
import yourMagazine from "./yourMagazine.png";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="_1" />
        <div className="_2">
          <h1>Design</h1>
          <h2>Magazine</h2>
        </div>
        <div className="_3">
          <div className="_3_1">
            <h1>PRODUCT INSPIRATION</h1>
          </div>
          <h2 className="_3_2">
            Effect if in up no depend seemed. Ecstatic elegance
          </h2>
        </div>
        <img src={yourMagazine} alt="your magazine" className="_4" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
