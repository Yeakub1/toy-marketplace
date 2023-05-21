import React, { useEffect }  from 'react';
import { Tab, Tabs, TabPanel,} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Aos from 'aos';
import 'aos/dist/aos.css'

const TabsSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="max-w-7xl px-4 mx-auto">
      <Tabs>
        <div className="flex justify-center">
          <Tab className="px-4 py-2 mb-2 active rounded-md cursor-pointer outline outline-offset-2 outline-1 list-none mr-3">
            Cars
          </Tab>
        </div>

        <div className="flex justify-center">
          <Tab className="px-6 py-2  active rounded-full cursor-pointer outline outline-offset-2 outline-1 list-none mr-3">
            Jeep Car
          </Tab>
          <Tab className="px-6 py-2 outline outline-offset-2 outline-1 rounded-full cursor-pointer  list-none mr-3">
            Hatchback Car
          </Tab>
          <Tab className="px-6 py-2 outline outline-offset-2 outline-1 rounded-full cursor-pointer  list-none mr-3">
            Convertible Car
          </Tab>
        </div>

        <TabPanel data-aos="flip-left">
          <div className="lg:flex justify-between gap-5 w-8/12 mx-auto">
            <div className="lg:w-6/12 mt-2">
              <img
                className="w-full h-80"
                src="https://i.ibb.co/LCJSd4H/car2.jpg"
                alt=""
              />
              <h3 className="font-bold text-2xl text-center">Jeep Wrangler</h3>
              <div className="flex justify-between text-lg">
                <p>pirce: $1100</p>
                <p>rating: 9.5</p>
              </div>
              <button className="w-full py-2 bg-blue-700 rounded-md mt-3 text-white">
                View Details
              </button>
            </div>
            <div className="lg:w-6/12 mt-2">
              <img
                className="w-full h-80"
                src="https://i.ibb.co/tDJgpMf/car7.jpg"
                alt=""
              />
              <h3 className="font-bold text-2xl text-center">Jeep Cherokee</h3>
              <div className="flex justify-between text-lg">
                <p>pirce: $2100</p>
                <p>rating: 9.2</p>
              </div>
              <button className="w-full py-2 bg-blue-700 rounded-md mt-3 text-white">
                View Details
              </button>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="lg:flex justify-between gap-5 w-8/12 mx-auto">
            <div className="lg:w-6/12 mt-2">
              <img
                className="w-full h-80"
                src="https://i.ibb.co/fG8NvD1/car11.jpg"
                alt=""
              />
              <h3 className="font-bold text-2xl text-center">
                Volkswagen Golf
              </h3>
              <div className="flex justify-between text-lg">
                <p>pirce: $2100</p>
                <p>rating: 9.5</p>
              </div>
              <button className="w-full py-2 bg-blue-700 rounded-md mt-3 text-white">
                View Details
              </button>
            </div>
            <div className="lg:w-6/12 mt-2">
              <img
                className="w-full h-80"
                src="https://i.ibb.co/VVkxRFK/car9.jpg"
                alt=""
              />
              <h3 className="font-bold text-2xl text-center">
                Mazda3 Hatchback
              </h3>
              <div className="flex justify-between text-lg">
                <p>pirce: $1900</p>
                <p>rating: 9.2</p>
              </div>
              <button className="w-full py-2 bg-blue-700 rounded-md mt-3 text-white">
                View Details
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="lg:flex justify-between gap-5 w-8/12 mx-auto">
            <div className="lg:w-6/12 mt-2">
              <img
                className="w-full h-80"
                src="https://i.ibb.co/DGZbNK0/car4.jpg"
                alt=""
              />
              <h3 className="font-bold text-2xl text-center">
                Mazda MX-5 Miata
              </h3>
              <div className="flex justify-between text-lg">
                <p>pirce: $1600</p>
                <p>rating: 9.5</p>
              </div>
              <button className="w-full py-2 bg-blue-700 rounded-md mt-3 text-white">
                View Details
              </button>
            </div>
            <div className="lg:w-6/12 mt-2">
              <img
                className="w-full h-80"
                src="https://i.ibb.co/LdWhQM8/car5.jpg"
                alt=""
              />
              <h3 className="font-bold text-2xl text-center">
                Porsche 911 Cabriole
              </h3>
              <div className="flex justify-between text-lg">
                <p>pirce: $1700</p>
                <p>rating: 9.2</p>
              </div>
              <button className="w-full py-2 bg-blue-700 rounded-md mt-3 text-white">
                View Details
              </button>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsSection;