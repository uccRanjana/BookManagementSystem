import React from "react";
import guestwall from "../images/wal-book.jpg";
import { Link } from "react-router-dom";
import marrie from "../images/8630.jpg";
import osce from "../images/oscar.jpg";
import elbert from "../images/elbert.jpg";
import hand from "../images/hand.jpg";
import mark from "../images/mark.jpg";
import gandhi from "../images/gandhi.jpg";
import frost from "../images/frost.jpg";
import Lottie from "lottie-react";
import animate from "../images/womenonbooks.json";
import animattion from "../images/womenReading.json";
import animationdel from "../images/delivery.json";

export const Guest = () => {
  return (
    <div className="flex-col">
      <div
        className="relative -mt-4 opacity-100 h-[400px] z-0 shadow-2xl"
        style={{
          backgroundImage: `url(${guestwall})`,
          backgroundSize: "cover", // Optional: Adjust to your preference
          backgroundPosition: "center", // Optional: Adjust to your preference
        }}
      >
        <p
          className="absolute bottom-0 left-0 right-0 text-center text-white font-bold shadow-2xl text-5xl mb-20 p-4 opacity-100"
          style={{ zIndex: 1 }} // Ensure the text appears above the background image
        >
          Discover readers' most anticipated new releases this season.
          <br />
        </p>
      </div>
      <div className="flex justify-between p-8 items-center">
        <Lottie
          className="w-full max-w-sm rounded-full "
          animationData={animate}
        />
        <Link to={"/login"}>
          <p className="underline text-amber-700 text-center justify-center text-3xl font-bold">
            Login to explore <br />
            amazing offers
          </p>
        </Link>
        <Lottie
          className="w-full max-w-sm rounded-full "
          animationData={animattion}
        />
      </div>
      <div className="flex-col">
        <div className="flex p-4 mt-3">
          <p className="text-3xl font-bold ">Quotes...</p>
        </div>
        <div className="flex p-7">
          <div className="flex gap-3 bg-amber-300 w-[200px] px-2 mt-2 ml-2 items-center rounded-">
            <img src={hand} className="h-14 w-14 rounded-full ml-2" />
            <p className="text-sm font-medium text-slate-900 m-2">
              “So many books, so little time.” ― Frank Zappa
            </p>
          </div>
          <div className="flex gap-3 bg-amber-300 w-[200px] px-2 mt-2 ml-2 items-center rounded-">
            <img src={osce} className="h-14 w-14 rounded-full ml-2" />
            <p className="text-sm font-medium text-slate-900 m-2">
              “Always forgive your enemies; nothing annoys them so much.” ―
              Oscar Wilde
            </p>
          </div>
          <div className="flex gap-3 bg-amber-300 w-[200px] px-2 mt-2 ml-2 items-center rounded-">
            <img src={elbert} className="h-14 w-14 rounded-full ml-2" />
            <p className="text-sm font-medium text-slate-900 m-2">
              “A friend is someone who knows all about you and still loves you.”
              ― Elbert Hubbard
            </p>
          </div>
          <div className="flex gap-3 bg-amber-300 w-[200px] px-2 mt-2 ml-2 items-center rounded-">
            <img src={osce} className="h-14 w-14 rounded-full ml-2" />
            <p className="text-sm font-medium text-slate-900 m-2">
              “Be yourself; everyone else is already taken.” ― Oscar Wilde
            </p>
          </div>
          <div className="flex gap-3 bg-amber-300 w-[200px] px-2 mt-2 ml-2 items-center rounded-">
            <img src={mark} className="h-14 w-14 rounded-full ml-2" />
            <p className="text-sm font-medium text-slate-900 m-2">
              “If you tell the truth, you don't have to remember anything.” ―
              Mark Twain
            </p>
          </div>
          <div className="flex gap-3 bg-amber-300 w-[200px] px-2 mt-2 ml-2 items-center rounded-">
            <img src={frost} className="h-14 w-14 rounded-full ml-2" />
            <p className="text-sm font-medium text-slate-900 m-2">
              “In three words I can sum up everything I've learned about life:
              it goes on.” ― Robert Frost
            </p>
          </div>
          <div className="flex gap-3 bg-amber-300 w-[200px] px-2 mt-2 ml-2 items-center rounded-">
            <img src={gandhi} className="h-14 w-14 rounded-full ml-2" />
            <p className="text-sm font-medium text-slate-900 m-2">
              “Be the change that you wish to see in the world.” ― Mahatma
              Gandhi
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col justify-start">
        <p className="font-bold text-3xl p-4">Features...</p>
        <p className="text-xl p-4 ml-4">
          <strong>Wide Selection:</strong> A vast catalog of books across
          various genres ensures that customers can easily find the titles they
          are looking for.
        </p>
        <p className="text-xl p-4 ml-4">
          <strong>User-Friendly Interface:</strong> An intuitive and
          easy-to-navigate website or app makes browsing and purchasing books
          hassle-free.
        </p>
        <p className="text-xl p-4 ml-4">
          <strong>Search and Filter Options:</strong> Robust search
          functionality and filters allow users to quickly find books by title,
          author, genre, or keywords.
        </p>
        <p className="text-xl p-4 ml-4">
          <strong>Detailed Book Descriptions:</strong> Comprehensive book
          descriptions, including summaries, author bios, and reader reviews,
          help you make informed purchasing decisions.
        </p>
        <p className="text-xl p-4 ml-4">
          <strong> Fast and Reliable Shipping:</strong> Efficient order
          processing and reliable shipping services ensure timely delivery of
          books to customers' doorsteps.
        </p>
        <p className="text-xl p-4 ml-4">
          <strong>Mobile Compatibility:</strong> Mobile-responsive websites and
          dedicated mobile apps enable users to shop for books conveniently on
          their smartphones or tablets.
        </p>
      </div>
      <div className="flex-col">
        <p className="p-4 text-3xl font-bold">Fast Delivery... </p>
        <Lottie
          className="w-full max-w-sm rounded-full "
          animationData={animationdel}
        />
      </div>
    </div>
  );
};
