import React from 'react';
import img1 from '../../../assets/images/top1.png'
import img2 from '../../../assets/images/top2.png'

const TopCar = () => {
    return (
      <div className=" mt-20 ">
        <h1 className='text-center text-xl'>TOP PRODUCTS</h1>
        <div className="max-w-7xl px-4 mx-auto mt-5 lg:flex justify-between gap-10">
          <div className="lg:w-6/12 flex justify-center items-center">
            <div className="">
              <img className="lg:w-8/12" src={img1} alt="" draggable='false' />
            </div>
            <div className="">
              <h1 className="text-2xl font-bold uppercase">Ride On Cars</h1>
              <p className="text-sm mt-5">Power Full Bettry Up TO 30% Off</p>
              <h3 className="mt-4 text-sm">Buy Kids Ride On Cars</h3>
            </div>
          </div>
          <div className="lg:w-6/12 flex justify-center items-center">
            <div className="">
              <img className="lg:w-8/12" src={img2} alt="" draggable='false' />
            </div>
            <div className="">
              <h1 className="text-2xl font-bold uppercase">PowerFull Moters</h1>
              <p className="text-sm mt-5">Power Full Bettry Up TO 30% Off</p>
              <h3 className="mt-4 text-sm">Buy Kids Ride On Cars</h3>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TopCar;