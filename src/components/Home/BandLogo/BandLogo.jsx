import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../../../assets/logo/1.jpg'
import img2 from '../../../assets/logo/2.jpg'
import img3 from '../../../assets/logo/3.jpg'
import img4 from '../../../assets/logo/4.jpg'
import img5 from '../../../assets/logo/5.jpg'
import img6 from '../../../assets/logo/6.jpg'
import img7 from '../../../assets/logo/7.jpg'
import img8 from '../../../assets/logo/8.jpg'

const BandLogo = () => {
    return (
        <div className='mt-16 max-w-7xl px-4 mx-auto'>
            <h1 className='text-center text-3xl font-bold mb-5'>Band Logo</h1>
        <Marquee>
         <img src={img1} alt="" draggable='false'/>
         <img src={img2} alt="" draggable='false'/>
         <img src={img3} alt="" draggable='false'/>
         <img src={img4} alt="" draggable='false'/>
         <img src={img5} alt="" draggable='false'/>
         <img src={img6} alt="" draggable='false'/>
         <img src={img7} alt="" draggable='false'/>
         <img src={img8} alt="" draggable='false'/>
        </Marquee>
      </div>
    );
};

export default BandLogo;