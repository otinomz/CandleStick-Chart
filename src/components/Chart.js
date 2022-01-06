// import React from "react";
// import PropTypes from "prop-types";
// import { scaleTime } from "d3-scale";
// import MadeData from "./Data";
// import { ChartCanvas, Chart } from "react-stockcharts";
// import { CandlestickSeries } from "react-stockcharts/lib/series";
// import { XAxis, YAxis } from "react-stockcharts/lib/axes";
// import { utcDay } from "d3-time";
// import { fitWidth } from "react-stockcharts/lib/helper";
// import { timeIntervalBarWidth } from "react-stockcharts/lib/utils";

// let ChartJS = (props) => {
//   const { type, width, ratio } = props;
//   const data = MadeData;
//   const xAccessor = (d) => d.date;

//   // xAccessor={d => d.date} xScaleProvider={discontinuousTimeScaleProvider}

//   return (
//     <div className="ChartJS">
//       <ChartCanvas
//         height={400}
//         ratio={ratio}
//         width={width}
//         //  as stated in the documentaion
//         margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
//         type={type}
//         data={data}
//         xAccessor={xAccessor}
//         seriesName="MSFT"
//         xScale={scaleTime()}
//         // this xExtents would carry the range you
//         // want the date to start at
//         // from the datas, date starts at january 2020 to feb
//         //
//         xExtents={[new Date(2020, 0, 30), new Date(2020, 1, 16)]}
//       >
//         <Chart id={1} yExtents={[(d) => [d.high, d.low]]}>
//           <XAxis axisAt="bottom" orient="bottom" ticks={6} />
//           <YAxis axisAt="left" orient="left" ticks={5} />
//           {/* <MouseCoordinateY
//             at="right"
//             orient="right"
//             displayFormat={format(".2f")}
//           /> */}
//           <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
//           {/* <OHLCTooltip origin={[-40, 0]} /> */}
//         </Chart>
//       </ChartCanvas>
//     </div>
//   );
// };

// ChartJS.prototype = {
//   data: PropTypes.array.isRequired,
//   width: PropTypes.number.isRequired,
//   ratio: PropTypes.number.isRequired,
//   type: PropTypes.oneOf(["svg", "hybrid"]).isRequired
// };

// ChartJS.defaultProps = {
//   type: "svg"
// };

// ChartJS = fitWidth(ChartJS);

// export default ChartJS;

import React from "react";
import PropTypes from "prop-types";
import { scaleTime } from "d3-scale";
import MadeData from "./Data";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { utcDay } from "d3-time";
import { fitWidth } from "react-stockcharts/lib/helper";
import { timeIntervalBarWidth } from "react-stockcharts/lib/utils";

let ChartJS = (props) => {
  const { type, width, ratio } = props;
  const data = MadeData;
  const xAccessor = (d) => {
    return d.date;
  };
  return (
    <div className="ChartJS">
      <ChartCanvas
        height={400}
        ratio={ratio}
        width={width}
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        type={type}
        data={data}
        seriesName="MSFT"
        xAccessor={xAccessor}
        xScale={scaleTime()}
        xExtents={[new Date(2020, 0, 30), new Date(2020, 1, 16)]}
      >
        <Chart id={1} yExtents={(d) => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={6} />
          <YAxis axisAt="left" orient="left" ticks={5} />
          <CandlestickSeries width={timeIntervalBarWidth(utcDay)} />
        </Chart>
      </ChartCanvas>
    </div>
  );
};

ChartJS.prototype = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["svg", "hybrid"]).isRequired
};

ChartJS.defaultProps = {
  type: "svg"
};

ChartJS = fitWidth(ChartJS);

export default ChartJS;
