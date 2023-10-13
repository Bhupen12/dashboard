import React from "react";
import { BsSearch } from "react-icons/bs";

const TableData = () => {
  return (
    <div className="p-5">
      <div className="flex flex-row mx-4">
        <div className="flex-none">
          <p className="text-2xl font-bold">Product Sell</p>
        </div>
        <div className="flex-auto"></div>
        <div className=" bg-white hover:bg-slate-100 rounded-2xl p-2 ml-4">
          <div className="flex items-center rounded-sm bg-white ">
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
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b ">
              <th scope="row" class="px-6 py-4 font-large whitespace-nowrap ">
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="border-b">
              <th scope="row" class="px-6 py-4 font-large  whitespace-nowrap ">
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="">
              <th scope="row" class="px-6 py-4 font-large whitespace-nowrap ">
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
