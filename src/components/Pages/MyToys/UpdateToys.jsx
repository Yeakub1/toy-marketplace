import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit} from "react-icons/fa";

const UpdateToys = (props, _id) => {
  const {
    register,
    handleSubmit,
    watch,
    
    formState: { errors },
  } = useForm();

    const [update, setUpdate] = useState([]);
  const { handleJobUpdate } = props;
  // console.log(props.toy._id);
  
    return (
      <div>
        {/* The button to open modal */}
        <label htmlFor="my-modal-5">
          <FaEdit />
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form onSubmit={handleSubmit(handleJobUpdate)}>
              <div className="grid grid-cols-2">
                <input
                  className="px-10 py-3 bg-slate-100 ps-2 text-base rounded-md"
                  {...register("_id")}
                  value={props.toy._id}
                />

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

              <button className="px-20 py-2 bg-blue-800 text-white rounded-md mt-10 text-center">
                <input value="Add Toy" type="submit" />
              </button>
            </form>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                Done
              </label>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateToys;



















// import React, { useState } from 'react';

// const UpdateToys = () => {
//     const [update, setUpdate] = useState([]);
//       const handleUpdate = () => {};
//     return (
//       <div>
//         {/* The button to open modal */}
//         <label htmlFor="my-modal" className="btn">
//           open modal
//         </label>

//         {/* Put this part before </body> tag */}
//         <input type="checkbox" id="my-modal" className="modal-toggle" />
//         <div className="modal">
//           <div className="modal-box">
//             <h3 className="font-bold text-lg">
//               Congratulations random Internet user!
//             </h3>
//             <p className="py-4">
//               You've been selected for a chance to get one year of subscription
//               to use Wikipedia for free!
//             </p>
//             <div className="modal-action">
//               <label htmlFor="my-modal" className="btn">
//                 Yay!
//               </label>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default UpdateToys;