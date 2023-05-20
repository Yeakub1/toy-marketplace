import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
            setToys(data)
        })
    },[user])


    return (
      <div className="max-w-7xl px-4 mx-auto">
        <div className=" p-2 text-center mt-5 mb-8">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="py-2 bg-slate-200 rounded-md"
          />{" "}
          <button className="px-4 py-2 bg-blue-800 text-white rounded-md">
            Search
          </button>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Photo and Name</th>
                <th>Email</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={toy.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{toy.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{toy.selleremail}</td>
                  <td>{toy.price}</td>
                  <td>{toy.rating}</td>
                  <td>
                    <FaEdit />
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs"><FaTrashAlt/></button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyToys;