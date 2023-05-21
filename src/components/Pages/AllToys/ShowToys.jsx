import React from 'react';
import { Link } from 'react-router-dom';

const ShowToys = ({ toy, handleToyDetails }) => {
  const { _id, image, title, subcategory, price, quantity, sellername } = toy;
  return (
    <tr>
      <th></th>
      <td>
        <div>
          <div className="font-bold">{sellername}</div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{title}</div>
        </div>
      </td>
      <td>{subcategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>

      <td>
        <Link to={`/toydetails/${_id}`}>
          <button className="px-4 py-2 bg-blue-700 text-white rounded-md">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default ShowToys;