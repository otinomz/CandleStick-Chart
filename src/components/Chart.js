import React from "react";
import PropTypes from "prop-types";
import { scaleTime } from "d3-scale";
import MadeData from "./Data";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandleStickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { utcDay } from "d3-time-format";
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
        //  as stated in the documentaion
        margin={{ left: 50, right: 50, top: 10, bottom: 30 }}
        type={type}
        xAccessor={xAccessor}
        seriesName="MSFT"
        xScale={scaleTime()}
        // this xExtents would carry the range you
        // want the date to start at
        // from the datas, date starts at january 2020 to feb
        //
        xExtents={[new Date(2020, 0, 30), new Date(2020, 1, 16)]}
      ></ChartCanvas>
    </div>
  );
};

export default ChartJS;
