import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import TabsSection from '../Tabs/TabsSection';
import BandLogo from '../BandLogo/BandLogo';
import TopCar from '../TopCar/TopCar';


const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Gallery></Gallery>
      <TabsSection></TabsSection>
      <BandLogo></BandLogo>
      <TopCar></TopCar>
      </div>
    );
};

export default Home;