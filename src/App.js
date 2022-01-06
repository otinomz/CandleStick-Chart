import "./styles.css";
import ChartJS from "./components/Chart";

const App = () => {
  return (
    <div className="App">
      <h1>CandleStick Stock Chart</h1>
      <ChartJS />
    </div>
  );
};

export default App;
