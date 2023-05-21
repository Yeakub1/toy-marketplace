import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ToyDetails = () => {
    const toys = useLoaderData();
     const {
       _id,
       image,
       title,
       subcategory,
       price,
       quantity,
       sellername,
       selleremail,
       rating,
       description,
     } = toys;

    return (
      <div className="max-w-7xl px-4 mx-auto mt-6">
        <h1 className="text-center font-bold text-5xl p-8 bg-red-300 text-white rounded-md mb-10">
          ToyDetails
        </h1>
        <div className="lg:flex justify-center bg-base-100 shadow-xl w-full">
          <div className="w-6/12">
            <figure>
              <img src={image} alt="Album" />
            </figure>
          </div>
          <div className="w-6/12">
            <h2 className="card-title text-2xl">{title}</h2>
            <div className="flex gap-10 mt-5 text-xl">
              <h1>sellername:</h1>
              <h1>{sellername}</h1>
            </div>
            <div className="flex gap-10 mt-3 text-xl">
              <h1>selleremail:</h1>
              <h1>{selleremail}</h1>
            </div>
            <div className="flex gap-10 mt-3 text-xl">
              <h1>price:</h1>
              <h1>{price}</h1>
            </div>
            <div className="flex gap-10 mt-3 text-xl">
              <h1>rating:</h1>
              <h1>{rating}</h1>
            </div>
            <div className="flex gap-10 mt-3 text-xl">
              <h1>quantity:</h1>
              <h1>{quantity}</h1>
            </div>
            <div className="flex gap-10 mt-3 text-xl">
              <h1>description:</h1>
              <h1>{description}</h1>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    );
};

export default ToyDetails;