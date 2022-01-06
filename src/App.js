import React, { useState } from "react";
import "./styles.css";
import ChartJS from "./components/Chart";
import MadeData from "./components/Data";

const App = () => {
  const [chartsToDisplay, setChartsToDisplay] = useState([]);
  return (
    <div className="App">
      <h1>CandleStick Stock Chart</h1>
      <ChartJS />
    </div>
  );
};

export default App;
