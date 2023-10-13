import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        barParcentage: 0.5,
        label: "Overview",
        data: [3, 2, 2, 1, 5, 6, 7, 8, 9, 8, 3, 6],
        backgroundColor: "#b7b2b2",
        hoverBackgroundColor: "#331abd",
        borderWidth: 2,
        borderRadius: 7,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="">
      <Bar className="bg-white rounded-md" data={data} options={options}></Bar>
    </div>
  );
};

export default BarChart;
