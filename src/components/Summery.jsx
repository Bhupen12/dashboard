import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { FiBarChart } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";
import { MdOutlineSupervisorAccount } from "react-icons/md";

const Summery = () => {
  const summeryList = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: "$198K",
      percentage: "-4",
      title: "Earning",
      iconColor: "#03C9D7",
      iconBg: "#E5FAFB",
      pcColor: "red-600",
    },
    {
      icon: <BsBoxSeam />,
      amount: "$2.4K",
      percentage: "+23",
      title: "Order",
      iconColor: "rgb(255, 244, 229)",
      iconBg: "rgb(254, 201, 15)",
      pcColor: "green-600",
    },
    {
      icon: <FiBarChart />,
      amount: "$2.4K",
      percentage: "+38",
      title: "Balance",
      iconColor: "rgb(228, 106, 118)",
      iconBg: "rgb(255, 244, 229)",
      pcColor: "green-600",
    },
    {
      icon: <HiOutlineRefresh />,
      amount: "$89K",
      percentage: "-12",
      title: "Total Sales",
      iconColor: "rgb(0, 194, 146)",
      iconBg: "rgb(235, 250, 242)",
      pcColor: "red-600",
    },
  ];
  return (
    <div className="flex my-3 flex-wrap justify-around gap-1 items-center">
      {summeryList.map((item, index) => {
        return <SummeryCard key={index} {...item} />;
      })}
    </div>
  );
};

const SummeryCard = ({
  icon,
  amount,
  percentage,
  title,
  iconColor,
  iconBg,
  pcColor,
}) => {
  return (
    <div
      key={title}
      className="bg-white h-auto dark:text-gray-200 dark:bg-secondary-dark-bg m-2 p-4 rounded-2xl flex flex-row w-[-webkit-fill-available] md:w-56"
    >
      <div>
        <button
          type="button"
          style={{ color: iconColor, backgroundColor: iconBg }}
          className="text-2xl opacity-0.9 rounded-full  p-4 mx-2"
        >
          {icon}
        </button>
      </div>
      <div>
        <p className=" text-sm text-gray-400">{title}</p>
        <p className="mt-1">
          <span className="font-bold text-black">{amount}</span>
          {percentage > 0 ? (
            <span className={`text-sm text-green-600 ml-2`}>{percentage}%</span>
          ) : (
            <span className={`text-sm text-red-600 ml-2`}>{percentage}%</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Summery;
