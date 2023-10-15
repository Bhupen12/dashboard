import React from "react";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="flex flex-row mx-4">
        <div className="flex-none">
          <p
            className="text-2xl font-bold"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            Hello Fitpeo✋,
          </p>
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
    </>
  );
};

export default Header;
