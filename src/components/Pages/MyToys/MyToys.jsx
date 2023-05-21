import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import AllToys from "./AllToys";
import UpdateToys from "./UpdateToys";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchToy, setSearchToy] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${user?.email}`)
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
            fetch(`http://localhost:5000/mytoys/${_id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                  );
                  const filtering = toys.filter(
                    (toy) => toy._id !== _id
                  );
                  setToys(filtering);
                }
              });
          }
        });
      };

  const handleUpdate = (_id) => {
    console.log('udates toy', _id);
    
      }

  return (
    <div className="max-w-7xl px-4 mx-auto">
      <div className="overflow-x-auto w-full mt-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Photo and Name </th>
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
                handleUpdate={handleUpdate}
              ></AllToys>
            ))}

             
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
