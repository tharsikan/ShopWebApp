import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: false,
    },
  },
};

const labels = ["1950", "1960", "1970", "1980", "1990", "2000", "2010", "2020"];

export const data = {
  labels,
  datasets: [
    {
      label: "Product 1",
      data: [100, 60, 40, 20, 30, 20, 40, 50],
      borderColor: "#F2994A",
      backgroundColor: "#F2994A",
    },
    // {
    //   label: "Product 2",
    //   data: [-20, -60, -20, -60, -100, -60, -20],
    //   borderColor: "#9B51E0",
    //   backgroundColor: "#9B51E0",
    // },
    // {
    //   label: "Product 3",
    //   data: [-60, -20, -60, 60, 0, 20, -60],
    //   borderColor: "#219653",
    //   backgroundColor: "#219653",
    // },
  ],
};

export default function App() {
  return <Line options={options} data={data} />;
}
