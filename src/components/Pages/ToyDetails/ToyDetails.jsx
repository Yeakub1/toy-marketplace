import React from 'react';
import { useLoaderData } from 'react-router-dom';


const ToyDetails = () => {
    const toys = useLoaderData();
     const { _id, image, title, subcategory, price, quantity, sellername } =toys;

    return (
      <div className="max-w-7xl px-4 mx-auto">
       name: {title}
      </div>
    );
};

export default ToyDetails;