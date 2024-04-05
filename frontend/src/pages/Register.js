import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullname: "",
    email: "",
    number: "",
    password: "",
    city: "",
    pincode: "",
    confirmPassword: "",
  });
  console.log(data);
  console.log(process.env.REACT_APP_SERVER_DOMAIN);

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
    const {
      fullname,
      email,
      number,
      password,
      city,
      pincode,
      confirmPassword,
    } = data;
    if (
      fullname &&
      email &&
      number &&
      city &&
      pincode &&
      password &&
      confirmPassword
    ) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/signup`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const dataRes = await fetchData.json();
      console.log(dataRes);

      toast(dataRes.message);
      if (dataRes.alert) {
        localStorage.setItem("token", dataRes.token);

        navigate("/login");
      }
    } else {
      toast("Please fill all the fields");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="lg:w-3/12 mt-4 p-10 mb-8 shadow-lg mx-auto bg-amber-100">
        <h3 className="text-3xl text-center font-semibold py-5">
          Registration Form
        </h3>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-4 mb-1">
            <input
              type={"text"}
              id="fullname"
              name="fullname"
              onChange={handleOnChange}
              value={data.fullname}
              className="p-2 border bg-amber-50 border-gray-300 rounded"
              placeholder="Your Full Name"
            />
            <span className="text-red-500">
              Name is <strong>required</strong>
            </span>
          </div>
          <div className="flex flex-col mt-4 mb-1">
            <input
              type={"email"}
              id="email"
              name="email"
              onChange={handleOnChange}
              value={data.email}
              placeholder="Your Email ****@example.com"
              className="p-2 border bg-amber-50 border-gray-300 rounded"
            />

            <span className="text-red-500">
              Email is <strong>required</strong>
            </span>
          </div>
          <div className="flex flex-col mt-4 mb-1">
            <input
              id="city"
              name="city"
              onChange={handleOnChange}
              value={data.city}
              className="p-2 border bg-amber-50 border-gray-300 rounded"
              type={"text"}
              placeholder="your city"
            />
            <span className="text-red-500">
              City is <strong>required</strong>
            </span>
          </div>
          <div className="flex flex-col mt-4 mb-1">
            <input
              className="p-2 border bg-amber-50 border-gray-300 rounded"
              type={"number"}
              id="pincode"
              name="pincode"
              placeholder="your city pincode"
              value={data.pincode}
              onChange={handleOnChange}
            />
            <span className="text-red-500">
              Pincode is<strong>required</strong>
            </span>
          </div>
          <div className="flex flex-col mt-4 mb-1">
            <input
              className="p-2 border bg-amber-50 border-gray-300 rounded"
              type={"password"}
              placeholder="Password"
              id="password"
              name="password"
              onChange={handleOnChange}
              value={data.password}
            />

            <span className="text-red-500">
              Password is <strong>required</strong>
            </span>
          </div>
          <div className="flex flex-col mt-4 mb-1">
            <input
              className="p-2 border bg-amber-50 border-gray-300 rounded"
              type={"password"}
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleOnChange}
              value={data.confirmPassword}
            />
            <span className="text-red-500">
              Password didn't <strong>match</strong>
            </span>
          </div>
          <div className="flex flex-col mt-4 mb-1">
            <input
              className="p-2 border bg-amber-50 border-gray-300 rounded"
              type={"number"}
              id="number"
              name="number"
              placeholder="Mobile number"
              value={data.number}
              onChange={handleOnChange}
            />
            <span className="text-red-500">
              number is<strong>required</strong>
            </span>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-amber-600 w-full text-lg font-bold py-2 rounded mt-3 text-white"
          >
            Register
          </button>
            
        </form>
        <span className="flex justify-center mt-2">
          Already have an Account?
          <Link to={"/login"}>
            <span className="text-amber-800 ml-2 cursor-pointer">Login</span>
          </Link>
        </span>
      </div>
    </div>
  );
};
