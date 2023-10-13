import React from "react";
import Summery from "../components/Summery";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import TableData from "../components/TableData";

const Home = () => {
  return (
    <div>
      <div>
        <Summery />
      </div>
      <div className="mt-5 mx-4 grid grid-rows-3 grid-flow-col gap-4">
        <div className="bg-white rounded-lg md:row-span-3">
          <BarChart />
        </div>
        <div className="bg-white rounded-lg md:row-span-3 justify-self-center self-center">
          <PieChart />
        </div>
      </div>
      <div className="m-5 bg-white rounded-lg">
        <TableData />
      </div>
    </div>
  );
};

export default Home;
