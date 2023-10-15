import React from "react";
import balance from "../assets/img/balance.png";
import dollar from "../assets/img/dollar.png";
import order from "../assets/img/order.png";
import total from "../assets/img/total.png";

const Summery = () => {
  const summeryList = [
    {
      name: "Earning",
      icon: dollar,
      price: "$40k",
      color: "green",
    },
    {
      name: "Orders",
      icon: balance,
      price: "$20k",
      color: "blue",
    },
    {
      name: "Balance",
      icon: order,
      price: "$10k",
      color: "sky",
    },
    {
      name: "Total Sales",
      icon: total,
      price: "$1,600k",
      color: "red",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 justify-between">
      {summeryList.map((item, index) => {
        return <SummeryCard key={index} {...item} />;
      })}
    </div>
  );
};

const SummeryCard = ({ name, icon, price, color }) => {
  return (
    <div className="flex flex-row bg-white my-4 rounded-md h-24 mx-4">
      <div className="flex-1 grid place-content-center my-1 md:my-2 rounded-full w-1/5">
        <img
          className={`object-contain p-1 h-12 w-12 bg-[${color}]`}
          src={icon}
          alt=""
        />
      </div>
      <div className="flex-none"></div>
      <div className="flex-1 grid place-content-center">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="">{name}</h5>
          <p className="">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Summery;
