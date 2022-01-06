import React, { useEffect, useState } from "react";
import "./styles.css";
import ChartJS from "./components/Chart";
import MadeData from "./components/Data";

const App = () => {
  const [chartsToDisplay, setChartsToDisplay] = useState([]);

  const getData = async () => {
    const charts = [];
    charts.push(<ChartJS key={1} data={MadeData} />);
    setChartsToDisplay(charts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>CandleStick Stock Chart</h1>
      <ChartJS />
    </div>
  );
};

export default App;
