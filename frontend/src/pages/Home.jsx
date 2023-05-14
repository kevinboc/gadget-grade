import Navbar from "../layouts/Navbar.jsx"
import Hero from "../assets/hero.jpg"
import Product from "../assets/IPhone_14_Pro.jpg"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [recentActivities, setRecentActivities] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    const fetchRecentActivities = async () => {
      try {
        const response = await axios.get('http://localhost:3500/review');
        setRecentActivities(response.data);
      } catch (error) {
        console.error("Error fetching recent activities", error);
      }
    }

    const fetchTrendingProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3500/product/trending');
        setTrendingProducts(response.data);
      } catch (error) {
        console.error("Error fetching recent activities", error);
      }
    }

    fetchRecentActivities();
    fetchTrendingProducts();
  }, []);
  return (
    <div>
      <Navbar />
      {/* Body of Landing Page */}
      {/* Body div */}
      <div className="flex flex-col md:mx-[5%] md:my-[5%]">
        {/* Headline Container */}
        <div className="flex flex-col justify-between">
          {/* Hero Container */}
          <div className="">
            {/* Hero Image */}
            <img src={Hero} alt="Hero Image" className="min-w-full" />
          </div>
          {/* Trending Products Container */}
          <div className="flex flex-col md:mt-[5%] md:border-solid md:border md:border-borderColor">
            {/* Title */}
            <p className="text-center text-white font-normal bg-backgroundColor p-5">Trending Products</p>
            {/* Products Grid */}
            <div className="grid grid-flow-col py-5 auto-cols-mobileTrending overflow-x-auto h-auto mx-3 gap-x-10 md:gap-0 md:py-0 md:grid-cols-5">
              {trendingProducts.map(trendingProduct => (
                <div key={trendingProduct._id} className="flex flex-col p-3 sm:p-5 border-solid border rounded-md border-borderColor md:border-none">
                {/* Product Image */}
                <img src={Product} alt="" className="xl:w-3/4 mx-auto"/>
                {/* Product Title */}
                <p className="text-center text-xs sm:text-sm md:text-base font-sans">{trendingProduct.name}</p>
              </div>
              ))}
          </div>
          </div>
          {/* Call to Action Container */}
          <div className="bg-backgroundColor flex flex-col justify-between py-5 gap-y-5 md:mt-[5%]"> 
            {/* Top Button */}
            <div className="text-center sm:flex sm:justify-evenly sm:items-center">
              <p className="text-white text-base sm:text-xl font-sans font-normal p-5">Grade your gadgets</p>
              <a href="/login"><button className="bg-buttonColor text-white text-base font-bold font-sans rounded-md px-10 py-5">GRADE NOW</button></a>
            </div>
            {/* Bottom Button */}
            <div className="text-center sm:flex sm:justify-evenly sm:items-center pb-5 sm:pb-0" >
              <p className="text-white text-base sm:text-xl font-sans font-normal p-5">Find your gadgets</p>
              <a href="/product-listing"><button className="bg-buttonColor text-white text-base font-bold font-sans rounded-md px-10 py-5">FIND NOW</button></a>
            </div>
          </div>
        </div>
        {/* Recent Activity Container */}
        <div className="grid grid-flow-col auto-cols-mobileActivity overflow-x-auto gap-x-10 mx-3 pb-5 md:pb-0 md:mx-0 md:mt-[2%] sm:auto-cols-largeMobileActivity lg:grid-flow-row lg:grid-cols-5 lg:gap-10">
          {recentActivities.map(recent => (
            <div key={recent._id} className="flex flex-col border border-solid border-borderColor rounded-md p-5 gap-y-2">
               {/* Title */}
              <p>{recent.product.name}</p>
              {/* Stars */}
              <p>{'*'.repeat(recent.rating)}</p>
              {/* User + Time Duration Since Post */}
              <p>{`${recent.author.username} + ${new Date(recent.timeStamp).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}`}</p>
              {/* Product Image */}
              <img src={Product} alt="" />
              {/* Review's body (Limit:97 characters + '...', which is added after pulling data) */}
              <p>{recent.body.length > 97 ? recent.body.substring(0, 97) + "..." : recent.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home