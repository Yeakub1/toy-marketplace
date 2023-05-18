import React from "react";
import "./Banner.css";
import toys from "../../../assets/images/toys.png";

const Banner = () => {
  return (
    <div className="banner  ">
      <div className=" lg:flex justify-between items-center max-w-7xl max-h-screen px-4">
        <div className="w-6/12 flex justify-center">
          <img className="mt-2 w-[80%]" src={toys} alt="" draggable='false' />
        </div>
        <div className="w-6/12 ">
          <p className="text-xl font-semibold">Your Wow! Store</p>
          <h1 className="md:text-7xl font-bold mt-6 text-[#e0035d] leading-5">
            {" "}
            The Ultimate <br />
            Toy Store
          </h1>

          <p className="mt-5 text-lg">
            Delivering smile with toys. Get your unbeatable fun and learning
            experience with our creative toys.{" "}
          </p>
          <button className="px-6 py-3 mt-5 font-semibold text-xl bg-yellow-500 hover:bg-black hover:text-white rounded-full">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
