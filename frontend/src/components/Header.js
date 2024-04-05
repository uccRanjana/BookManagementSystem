import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { MdFavorite } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb";
import { MdAdd } from "react-icons/md";
import { HiOutlineUserAdd } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import toast from "react-hot-toast";


export const Header = () => {

  const navigate = useNavigate();

  const userData = useSelector((state) => state.users);
  console.log(userData);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout Successfully");
    localStorage.removeItem("token");
    navigate("/guest");

  };
  const cartItemNumber = useSelector((state) => state.product.cartItem);

  // console.log(process.env.REACT_APP__ADMIN_EMAIL);
  // console.log(process.env.REACT_APP_SERVER_DOMAIN);
  return (
    <>
      <header className="w-full fixed shadow-md items-center z-50 h-20 text-slate-600  bg-amber-200">
        <div className=" flex justify-between items-center mt-6 ">
          {userData.email ? (
            <Link to={"/"}>
            <div className="ml-4 logo">
              <span className="text-black-200 text-2xl font-bold flex justify-start items-center hover:text-slate-900">
                <ImBooks />
                BookManagementSystem
              </span>
            </div>
          </Link>
          ) : (
            <Link to={"/guest"}>
            <div className="ml-4 logo">
              <span className="text-black-200 text-2xl font-bold flex justify-start items-center hover:text-slate-900">
                <ImBooks />
                BookManagementSystem
              </span>
            </div>
          </Link>
          )}
          <div className="nav-items flex gap-4 items-center  md:gap-7 mr-4">
            {userData.fullname ? (
              <span className="text-xl cursor-pointer text-grey-200 font-bold  hover:text-slate-900">
                Hello! {userData.fullname}
              </span>
            ) : (
              <span className="text-xl cursor-pointer text-grey-200 font-bold  hover:text-slate-900">
                Hello! Guest
              </span>
            )}

            {userData.email ? (
              <>
                <Link to={"cart"}>
                  <div className=" text-2xl cursor-pointer relative text-grey-200 font-bold    hover:text-slate-900">
                    <BsCart4 />
                    <div className="absolute -top-3 -right-2 bg-amber-600 text-sm text-center h-5 w-5 rounded-full m-0 p-0">
                      {cartItemNumber.length}
                    </div>
                  </div>
                </Link>
                <Link to={"/"}>
                  <div className="text-2xl cursor-pointer text-grey-200 font-bold  hover:text-slate-900">
                    <MdFavorite />
                  </div>
                </Link>
                {userData.email === process.env.REACT_APP__ADMIN_EMAIL && (
                  <Link to={"newProduct"}>
                    <div className="text-2xl cursor-pointer text-grey-200 font-bold  hover:text-slate-900">
                      <MdAdd />
                    </div>
                  </Link>
                )}
                <div
                  className="text-2xl cursor-pointer text-grey-200 font-bold  hover:text-slate-900"
                  onClick={handleLogout}
                >
                  <TbLogout2 />
                </div>
              </>
            ) : (
              <>
                <Link to={"register"}>
                  <div className="text-2xl cursor-pointer text-grey-200 font-bold   hover:text-slate-900">
                    <HiOutlineUserAdd />
                  </div>
                </Link>
                <Link to={"login"}>
                  <div className="text-2xl cursor-pointer text-grey-200 font-bold   hover:text-slate-900">
                    <TbLogout />
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
