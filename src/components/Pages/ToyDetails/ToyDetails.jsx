import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ToyDetails = () => {
    const news = useLoaderData();
     const { _id, image, title, subcategory, price, quantity, sellername } =news;

    return (
      <div className="max-w-7xl px-4 mx-auto">
            <h1>name: { title}</h1>
      </div>
    );
};

export default ToyDetails;