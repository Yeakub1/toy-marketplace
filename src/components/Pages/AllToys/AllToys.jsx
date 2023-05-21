import React, { useEffect, useState } from 'react';
import ShowToys from './ShowToys';

const AllToys = () => {
  const [toyes, setToyes] = useState([]);
  const [searchToy, setSearchToy] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/alltoy")
      .then((res) => res.json())
      .then((data) => {
        setToyes(data);
      });
  },[]);

  // search---
  const handleSerchToy = () => {
    fetch(`http://localhost:5000/toyserch/${searchToy}`)
      .then((res) => res.json())
      .then((data) => setToyes(data));
  };

  const handleToyDetails = (_id) => {
    console.log('details', _id);
  }


  return (
    <div className="max-w-7xl px-4 mx-auto">
      <div className=" p-2 text-center mt-5 mb-8">
        <input
          onChange={(e) => setSearchToy(e.target.value)}
          type="text"
          className="py-2 bg-slate-200 rounded-md"
        />{" "}
        <button
          onClick={handleSerchToy}
          className="px-4 py-2 bg-blue-800 text-white rounded-md"
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto w-full mt-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toyes.map((toy) => (
              <ShowToys
                key={toy._id}
                toy={toy}
                handleToyDetails={handleToyDetails}
              ></ShowToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;