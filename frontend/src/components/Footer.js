import React from "react";
import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div classNameName="w-full flex justify-center items-center p-5 bg-indigo-50 shadow-lg">
      <Link to={"/"}>
        <div classNameName="logo">
          <span classNameName="text-black-200 text-2xl font-bold flex justify-start items-center">
            <ImBooks />
            BookManagementSystem
          </span>
        </div>
      </Link>

      <div classNameName="flex">
        <span className="text-xl cursor-pointer text-grey-200 font-bold m-3 hover: underline hover:text-gray-600">
          <FaFacebookSquare />
        </span>
        <span className="text-xl cursor-pointer text-grey-200 font-bold m-3 hover: underline hover:text-gray-600">
          <FaLinkedin />
        </span>
        <span className="text-xl cursor-pointer text-grey-200 font-bold m-3 hover: underline hover:text-gray-600">
          <FaInstagramSquare />
        </span>
        <span className="text-xl cursor-pointer text-grey-200 font-bold m-3 hover: underline hover:text-gray-600">
          <FaWhatsappSquare />
        </span>
        <span className="text-xl cursor-pointer text-grey-200 font-bold m-3 hover: underline hover:text-gray-600">
          <IoMdMail />
        </span>
      </div>
    </div>
  );
};
