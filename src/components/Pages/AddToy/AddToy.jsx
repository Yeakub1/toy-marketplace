import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from "sweetalert2";

const AddToy = () => {
  const { user} = useContext(AuthContext);
    const {
      register,
      handleSubmit,
  } = useForm();
  

  const onSubmit = (data) => {
    fetch("https://toy-server-kappa.vercel.app/addtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Add Toy your Services",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      });
    };


    return (
      <div className="max-w-7xl px-4 mx-auto">
        <h1 className="text-center font-bold text-3xl mt-5 mb-10">Add Toy</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2">
            <div className="mt-10">
              <label className="text-2xl" htmlFor="">
                Name:
              </label>
              <input
                className="px-10 py-3 bg-slate-100 ps-2 text-base rounded-md "
                {...register("title")}
                placeholder="Your name"
                type="text"
                required
              />
            </div>
            <div className="mt-10">
              <label className="text-2xl" htmlFor="">
                Photo Url
              </label>
              <input
                className="px-10 py-3 bg-slate-100 ps-2 text-base rounded-md"
                {...register("image")}
                placeholder="Picture URL of the toy"
                type="url"
                required
              />
            </div>

            <div className="mt-10 g">
              <label className="text-2xl" htmlFor="">
                Seller name:
              </label>
              <input
                className="px-10 py-3 bg-slate-100 ps-2 text-base rounded-md"
                {...register("sellername")}
                placeholder="Seller name"
                defaultValue={user?.displayName}
                type="text"
                required
              />
            </div>
            <div className="mt-10">
              <label className="text-2xl" htmlFor="">
                Seller email:
              </label>
              <input
                className="px-10 py-3 bg-slate-100 ps-2 text-base rounded-md"
                {...register("selleremail")}
                placeholder="Seller email"
                defaultValue={user?.email}
                type="email"
                required
              />
            </div>
            <div className="mt-10">
              <label className="text-2xl" htmlFor="">
                Sub-category:
              </label>
              <input
                className="px-10 py-3 bg-slate-100 ps-2 text-base rounded-md"
                {...register("subcategory")}
                placeholder="Sub-category..."
                type="text"
                required
              />
            </div>
            <div className="mt-10">
              <label className="text-2xl" htmlFor="">
                Price:
              </label>
              <input
                className="px-10 py-3 bg-slate-100 ps-2 text-base rounded-md"
                {...register("price")}
                placeholder="Price,"
                type="number"
                required
              />
            </div>
            <div className="mt-10">
              <label className="text-2xl" htmlFor="">
                Rating:
              </label>
              <input
                className="px-10 py-3 bg-slate-100 ps-2 text-base rounded-md"
                {...register("rating")}
                placeholder="Rating"
                type="number"
                required
              />
            </div>
            <div className="mt-10">
              <label className="text-2xl" htmlFor="">
                Available quantity:
              </label>
              <input
                className="px-10 py-3 bg-slate-100 ps-2 text-base rounded-md"
                {...register("quantity")}
                placeholder="Available quantity"
                type="number"
                required
              />
            </div>
            <div className="mt-10">
              <label className="text-2xl" htmlFor="">
                Detail description:
              </label>
              <input
                className="px-10 py-3 bg-slate-100 ps-2 text-base rounded-md"
                {...register("description")}
                placeholder="Detail description"
                type="text"
                required
              />
            </div>
          </div>

          <button className="px-20 py-2 bg-blue-800 text-white rounded-md mt-10 ">
            <input value="Add Toy" type="submit" />
          </button>
        </form>
      </div>
    );
};

export default AddToy;