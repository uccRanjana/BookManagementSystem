import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice.js";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // console.log(data);
  const userData = useSelector((state) => state);

  const dispatch = useDispatch();

  // console.log(data);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      try {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(data),
          }
        );
        const dataRes = await fetchData.json();
        console.log(dataRes.token); 

        toast(dataRes.message);

        if (dataRes.alert) {
          localStorage.setItem("token", dataRes.token);
          dispatch(loginRedux(dataRes));
          setTimeout(() => {
            navigate("/");
          }, 500);
          console.log(userData);
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    } else {
      toast("please enter required field");
    }
  };
  return (
    <div className="flex justify-center ">
      <div className="lg:w-3/12 mt-8 mb-8 p-10 shadow-lg mx-auto bg-amber-100">
        <h3 className="text-3xl text-center font-semibold py-5">Login Form</h3>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-4 mb-1">
            <input
              type={"email"}
              id="email"
              name="email"
              onChange={handleOnChange}
              placeholder="your Email ***@example.com"
              className="p-2 border bg-amber-50 border-gray-300 rounded"
            />

            <span className="text-red-500">
              Email is <strong>required</strong>
            </span>
          </div>
          <div className="flex flex-col mt-4 mb-1">
            <input
              className="p-2 border bg-amber-50 border-gray-300 rounded"
              type={"password"}
              id="password"
              onChange={handleOnChange}
              name="password"
              placeholder="Your Password"
            />

            <span className="text-red-500">
              Password is <strong>required</strong>
            </span>
          </div>
          <button
            type="submit"
            className="bg-amber-600 w-full text-lg font-bold py-2 rounded mt-3 text-white"
          >
            Login
          </button>
            
        </form>
        <div className="flex justify-between mt-5">
          <span className="text-amber-800 ml-2 cursor-pointer">
            Forget Password
          </span>
          <Link to={"/register"}>
            <span className="text-amber-800 ml-2 cursor-pointer">Signup</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
