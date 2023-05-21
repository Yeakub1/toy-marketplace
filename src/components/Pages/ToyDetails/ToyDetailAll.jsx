import React from 'react';

const ToyDetailAll = ({ data }) => {
  const { _id, image, title, subcategory, price, quantity, sellername } = data;
  return (
    <div>
      <h1>name: {title}</h1>
    </div>
  );
};

export default ToyDetailAll;