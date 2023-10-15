import React from "react";
import { BsSearch } from "react-icons/bs";
import macbook from "../assets/img/macbook.webp";
import iphone15 from "../assets/img/iphone15.webp";

const TableData = () => {
  return (
    <div className="p-5">
      <div className="flex flex-row mx-4">
        <div className="flex-none">
          <p className="text-2xl font-bold">Product Sell</p>
        </div>
        <div className="flex-auto"></div>
        <div className="rounded-2xl p-2 ml-4 border-2 ">
          <div className="flex items-center rounded-sm ">
            <BsSearch className="text-gray-500 text-lg block float-left cursor-pointer mr-2" />
            <input
              type={"search"}
              placeholder="Search"
              className="text-base bg-transparent w-full text-gray-600 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="my-5">
        <TableUi />
      </div>
    </div>
  );
};

const TableUi = () => {
  const tableData = [
    {
      productName: {
        imgSrc: macbook,
        name: "Apple MacBook Pro 17",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. ",
      },
      stock: "10",
      price: "$ 2999",
      totalSales: "20",
    },
    {
      productName: {
        imgSrc: iphone15,
        name: "Iphone 15",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      stock: "20",
      price: "$ 5999",
      totalSales: "90",
    },
  ];

  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left ">
          <thead class="text-xs text-gray-500 uppercase ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Stock
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Total Sales
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => {
              return (
                <tr class="border-b">
                  <td class="px-6 py-4">
                    <div className="flex flex-row">
                      <div>
                        <img
                          src={item.productName.imgSrc}
                          alt=""
                          className="object-contain p-1 h-12 w-12"
                        />
                      </div>
                      <div className="flex flex-col justify-center px-2">
                        <div>
                          <p
                            className="text-sm font-bold"
                            style={{ fontFamily: "'Exo 2', sans-serif" }}
                          >
                            {item.productName.name}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">
                            {item.productName.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4  font-mono text-lg">{item.stock}</td>
                  <td class="px-6 py-4  font-mono text-lg font-bold">
                    {item.price}
                  </td>
                  <td class="px-6 py-4  font-mono text-lg">
                    <p className="">{item.totalSales}</p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
