import React from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const AllToys = ({ toy, handleDelete, handleUpdate }) => {
  const { _id, image, title, selleremail, price, rating } = toy;
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
          </div>
        </div>
      </td>
      <td>{selleremail}</td>
      <td>{rating}</td>
      <td>{price}</td>
      <td onClick={() => handleUpdate(_id)}>
        <FaEdit />
      </td>
      <td onClick={() => handleDelete(_id)}>
        <FaTrashAlt />
      </td>
    </tr>
  );
};

export default AllToys;