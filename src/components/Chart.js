import React from "react";
import PropTypes from "prop-types";
import { scaleTime } from "d3-scale";
import madeData from "./Data";
import { ChartCanvas, Chart } from "react-stockcharts";
import { CandleStickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { utcDay } from "d3-time-format";
import { fitWidth } from "react-stockcharts/lib/helper";
import { timeIntervalBarWidth } from "react-stockcharts/lib/utils";

const ChartJS = () => {
  return <div>Chart Js section</div>;
};

export default ChartJS;
