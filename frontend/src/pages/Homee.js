import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { GrPrevious, GrNext } from "react-icons/gr";
import Lottie from "lottie-react";
import animate from "../images/books-bulb.json";
import womenSitting from "../images/groupAnim.json";

import FilterProduct from "../components/FilterProduct";
import AllProduct from "../components/AllProduct";
import CardFeature from "../components/CardFeature";
import HomeCard from "../components/HomeCard";
import bookswal from "../images/books-wall.jpg";

export const Homee = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 3);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "Fantasy",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        <div className="md:w-1/2">
          <div className="flex gap-3 px-2 items-center justify-center rounded">
            <Lottie
              className="w-full max-w-sm rounded-full "
              animationData={womenSitting}
            />
          </div>

          <div className="flex mt-10 gap-16">
            <div className="ml-20">
              <h2 className="text-3xl md:text-2xl font-bold py-3 text-justify">
                Deciding what to read next?{" "}
                <span className="text-amber-600 text-">
                  You’re in the right place.
                </span>
              </h2>
              <p className="py-3 text-l text-justify">
                Tell us what titles or genres you’ve enjoyed in the past, and
                we’ll give you surprisingly insightful recommendations.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-2xl font-bold py-3 text-justify">
                What are your friends reading?{" "}
                {/* <span className="text-red-600 text-">
                  You’re in the right place.
                </span> */}
              </h2>
              <p className="py-3 text-l text-justify">
                Chances are your friends are discussing their favorite (and
                least favorite) books on B.M.S.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center items-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return (
                  <HomeCard key={index + "loading"} loading={"Loading..."} />
                );
              })}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Now Trending
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id + "Fantasy"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el, index) => (
                <CardFeature loading="Loading..." key={index + "cartLoading"} />
              ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Lottie
          className="w-full max-w-sm rounded-full "
          animationData={animate}
        />
      </div>
      <AllProduct heading={"All Books"} />
    </div>
  );
};
