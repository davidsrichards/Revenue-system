import { Line } from "react-chartjs-2";

import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

Chartjs.register({
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
});

import { lineChartData } from "./Data";

function Chart() {
  const option = {};
  return <Line options={option} data={lineChartData} />;
}

export default Chart;
