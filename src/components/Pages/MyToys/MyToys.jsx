import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import UpdateToys from "./UpdateToys";
import AllToys from "./AllToys"
import Delete from "./Delete";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchToy, setSearchToy] = useState("");

  useEffect(() => {
    fetch(`https://toy-server-kappa.vercel.app/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);

  // delete---
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`https://toy-server-kappa.vercel.app/mytoys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const filtering = toys.filter((toy) => toy._id !== _id);
              setToys(filtering);
            }
          });
      }
    });
  };

  //  const handleJobUpdate = (data, _id) => {
  //    console.log(_id, 'clik');
  //    fetch(`https://toy-server-kappa.vercel.app/updatetoy/${data._id}`, {
  //      method: "PUT",
  //      headers: { "Content-Type": "application/json" },
  //      body: JSON.stringify(data),
  //    })
  //      .then((res) => res.json())
  //      .then((result) => {
  //        if (result.modifiedCount > 0) {
  //          setControl(!control);
  //        }
  //        console.log(result);
  //      });
  //  };

  return (
    <div className="max-w-7xl px-4 mx-auto">
      <div className="overflow-x-auto w-full mt-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title </th>
              <th>Email</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <AllToys
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></AllToys>
            ))}

            {/* {toys?.map((toy, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{toy.title}</td>
                <td>{toy.sellername}</td>
                <td>{toy.rating}</td>
                <td>{toy.price}</td>
                <td>
                  <UpdateToys
                    toy={toy}
                    handleJobUpdate={handleJobUpdate}
                  ></UpdateToys>
                </td>
                
                <td >
                  <FaTrashAlt />
                <Delete handleDelete={handleDelete}>
                  
                </Delete>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
