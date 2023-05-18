import React from 'react';
import logo from "../../../assets/logo.png";

const Home = () => {
    return (
      <div className="w-full">
        <div className="lg:max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="">
            <button className="px-4 py-2 bg-fuchsia-400 text-white rounded-md mb-4">
              New Arrival
            </button>
            <h1 className="lg:text-7xl font-bold ">One Box Toy</h1>
            <p className="text-lg">Flat 10% Off On Order Above $29.99</p>
            <button className="px-4 py-2 bg-cyan-400 text-white rounded-full mt-8">
              Shop Now
            </button>
          </div>
          <div className="">
            <img src={logo} alt="" draggable="false" />
          </div>
        </div>
      </div>
    );
};

export default Home;