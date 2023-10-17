import React from "react";
import Summery from "../components/Summery";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import TableData from "../components/TableData";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div>
        <Summery />
      </div>
      <div className="mt-5 mx-4 flex flex-col md:flex-row gap-4">
        <div className="md:flex-auto bg-white rounded-lg">
          <BarChart />
        </div>
        <div className="md:flex-auto bg-white rounded-lg justify-self-center self-center">
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
