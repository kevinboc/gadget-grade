import Navbar from "../layouts/Navbar.jsx"
import Hero from "../assets/hero.jpg"
import { useState, useEffect } from 'react';
import StarDisplay from "../components/StarDisplay.jsx";
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
        const response = await axios.get('http://localhost:3500/product?sort=reviewCount&order=desc');
        const copyOfData = response.data.slice(0, 5); // Copy the first 5 indexes
        setTrendingProducts(copyOfData);
      } catch (error) {
        console.error("Error fetching recent activities", error);
      }
    }

    fetchRecentActivities();
    fetchTrendingProducts();
  }, []);

  const getProductImageURL = (product) => {
    return "/products/" +  product + ".jpg"
  }

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
                <a href={`/product/${trendingProduct._id}`} key={trendingProduct.image} >
                  <div className="flex flex-col p-3 sm:p-5 border-solid border rounded-md border-borderColor md:border-none shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                  {/* Product Image */}
                  <img src={getProductImageURL(trendingProduct._id)} alt="" className="xl:h-[200px] w-auto mx-auto"/>
                  {/* Product Title */}
                  <p className="text-center text-xs sm:text-sm md:text-base font-sans">{trendingProduct.name}</p>
                </div>
                </a>
              ))}
          </div>
          </div>
          {/* Call to Action Container */}
          <div className="bg-backgroundColor flex flex-col justify-between py-5 gap-y-5 md:mt-[5%]"> 
            {/* Top Button */}
            <div className="text-center sm:flex sm:justify-evenly sm:items-center">
              <p className="text-white text-base sm:text-xl font-sans font-normal p-5">Grade your gadgets</p>
              <a href={sessionStorage.getItem("user") ? "/product-listing/category/all" : "/login"}><button className="bg-buttonColor text-white text-base font-bold font-sans rounded-md px-10 py-5">GRADE NOW</button></a>
            </div>
            {/* Bottom Button */}
            <div className="text-center sm:flex sm:justify-evenly sm:items-center pb-5 sm:pb-0" >
              <p className="text-white text-base sm:text-xl font-sans font-normal p-5">Find your gadgets</p>
              <a href="/product-listing/category/all"><button className="bg-buttonColor text-white text-base font-bold font-sans rounded-md px-10 py-5">FIND NOW</button></a>
            </div>
          </div>
        </div>
        {/* Recent Activity Container */}
        <div className="grid grid-flow-col auto-cols-mobileActivity overflow-x-auto gap-x-10 mx-3 pb-5 md:pb-0 md:mx-0 md:mt-[2%] sm:auto-cols-largeMobileActivity lg:grid-flow-row lg:grid-cols-5 lg:gap-10">
          {recentActivities.map(recent => (
            <a href={`/product/${recent.product._id}`} key={recent.image} >
              <div className="flex flex-col border border-solid border-borderColor rounded-md p-5 gap-y-2 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] min-w-full">
                {/* Title */}
                <p>{recent.product.name}</p>
                {/* Stars */}
                <div className="mb-2">
                      <StarDisplay rating={recent.rating} />
                    </div>
                {/* User + Time Duration Since Post */}
                <p className="text-gray-500 text-sm">{`User: ${recent.author.username}`}</p>
                <p className="text-gray-500 text-xs">{`${new Date(recent.timeStamp).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}`}</p>
                {/* Product Image */}
                <img src={getProductImageURL(recent.product.image)} alt="" className="p-3 border border-solid border-borderColor rounded-md xl:h-[200px] xl:w-auto mx-auto"/>
                {/* Review's body (Limit:20 characters + '...', which is added after pulling data) */}
                <p>Review:</p>
                <p className="font-light font-sans text-sm border border-solid border-borderColor rounded-md overflow-y-auto">{recent.body.length > 20 ? recent.body.substring(0, 20) + "..." : recent.body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home