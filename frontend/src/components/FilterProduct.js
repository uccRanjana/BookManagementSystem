import React from "react";
import { MdMenuBook } from "react-icons/md";
const FilterProduct = ({ category, onClick, isActive }) => {
  return (
    <div onClick={onClick}>
      <div
        className={`text-3xl p-5  rounded-full cursor-pointer ${
          isActive ? "bg-amber-600 text-white" : "bg-amber-400"
        }`}
      >
        <MdMenuBook />
      </div>
      <p className="text-center font-medium my-1 capitalize w-10 ">
        {category}
      </p>
    </div>
  );
};

export default FilterProduct;
