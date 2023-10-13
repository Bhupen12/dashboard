import React from "react";
import { Pie } from "react-chartjs-2";

// resgister
import { Chart as ChartJS, PieController, ArcElement, Tooltip } from "chart.js";
ChartJS.register(PieController, ArcElement, Tooltip);

const data = {
  labels: ["Pink", "Blue", "Gray"],
  datasets: [
    {
      data: [20, 50, 30],
      backgroundColor: ["#FFC0CB", "#ADD8E6", "#D3D3D3"],
    },
  ],
};

const PieChart = () => {
  return (
    <div className="">
      {/* size of pie chart */}
      <Pie className="bg-white rounded-md h-36 p-2" data={data} />
    </div>
  );
};

export default PieChart;
