import React from "react";
import Summery from "../components/Summery";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import TableData from "../components/TableData";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-row mx-4">
        <div className="flex-none">
          <p className="text-2xl font-bold">Hello Fitpeo✋,</p>
        </div>
        <div className="flex-auto"></div>
        <div className="bg-white rounded-2xl p-2 ml-4">
          <div className="flex items-center rounded-sm bg-light-white ">
            <BsSearch className="text-gray-500 text-lg block float-left cursor-pointer mr-2" />
            <input
              type={"search"}
              placeholder="Search"
              className="text-base bg-transparent w-full text-gray-600 focus:outline-none"
            />
          </div>
        </div>
      </div>
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
