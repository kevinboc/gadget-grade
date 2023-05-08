import Navbar from "../layouts/Navbar.jsx"
import Hero from "../assets/hero.jpg"
import Product from "../assets/IPhone_14_Pro.jpg"

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* Body of Landing Page */}
      {/* Body div */}
      <div className="flex flex-col sm:mx-[5%] sm:mt-[5%]">
        {/* Headline Container */}
        <div className="sm:flex sm:flex-row sm:gap-x-5 sm:justify-between sm:mb-[5%]">
          {/* Headline Left Container */}
          <div className="sm:w-1/2">
            {/* Hero Image */}
            <img src={Hero} alt="Hero Image" className="min-w-full" />
          </div>
          {/* Headline Right Container */}
          <div className="sm:gap-y-4 sm:mr-0 sm:flex sm:flex-col sm:w-1/2">
            {/* Trending Products Container */}
            <div className="flex flex-col sm:m-0 sm:h-full sm:border-solid sm:border sm:border-borderColor">
              {/* Title */}
              <p className="text-center text-white font-normal bg-backgroundColor p-5">Trending Products</p>
              {/* Products Grid */}
              <div className="grid grid-flow-col py-5 auto-cols-mobile overflow-x-auto h-auto mx-3 gap-x-10 sm:gap-0 sm:py-0 sm:m-0 sm:grid-cols-5">
                  {/* Product */}
                  <div className="flex flex-col p-3 border-solid border rounded-md border-borderColor sm:border-none">
                    {/* Product Image */}
                    <img src={Product} alt="" className=""/>
                    {/* Product Title */}
                    <p className="text-start text-sm font-light font-sans">Apple IPhone 14 Pro</p>
                  </div>

                  {/* Test */}
                  <div className="flex flex-col p-3 border-solid border rounded-md border-borderColor sm:border-none">
                    {/* Product Image */}
                    <img src={Product} alt="" className=""/>
                    {/* Product Title */}
                    <p className="text-start text-sm font-light font-sans">Apple IPhone 14 Pro</p>
                  </div>

                  <div className="flex flex-col p-3 border-solid border rounded-md border-borderColor sm:border-none">
                    {/* Product Image */}
                    <img src={Product} alt="" className=""/>
                    {/* Product Title */}
                    <p className="text-start text-sm font-light font-sans">Apple IPhone 14 Pro</p>
                  </div>

                  <div className="flex flex-col p-3 border-solid border rounded-md border-borderColor sm:border-none">
                    {/* Product Image */}
                    <img src={Product} alt="" className=""/>
                    {/* Product Title */}
                    <p className="text-start text-sm font-light font-sans">Apple IPhone 14 Pro</p>
                  </div>

                  <div className="flex flex-col p-3 border-solid border rounded-md border-borderColor sm:border-none">
                    {/* Product Image */}
                    <img src={Product} alt="" className=""/>
                    {/* Product Title */}
                    <p className="text-start text-sm font-light font-sans">Apple IPhone 14 Pro</p>
                  </div>

          
                </div>
            </div>
            {/* Call to Action Container */}
            <div className="bg-backgroundColor sm:bg-white flex flex-col justify-evenly sm:m-0 sm:h-full sm:border-solid sm:border sm:border-borderColor"> 
              {/* Top Button */}
              <div className="text-center sm:flex sm:justify-evenly sm:items-center">
                <p className="text-white sm:text-black text-base sm:text-xl font-sans font-normal p-5">Grade your gadgets</p>
                <a href="/login"><button className="bg-buttonColor text-white text-base font-bold font-sans rounded-md px-10 py-5">GRADE NOW</button></a>
              </div>
              {/* Bottom Button */}
              <div className="text-center sm:flex sm:justify-evenly sm:items-center pb-5 sm:pb-0" >
                <p className="text-white sm:text-black text-base sm:text-xl font-sans font-normal p-5">Find your gadgets</p>
                <a href="/product-listing"><button className="bg-buttonColor text-white text-base font-bold font-sans rounded-md px-10 py-5">FIND NOW</button></a>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Activity Container */}
        {/* Bottom Container */}
        <div className="flex flex-col">
          {/* Recent Activity Title */}
          <p className="text-center sm:text-white font-sans py-5 sm:mb-10 sm:bg-backgroundColor"> Recent Activity</p>
          {/* Recent Activity Grid */}
          <div className="grid grid-flow-col auto-cols-mobile overflow-x-auto gap-x-10 sm:grid-flow-row sm:grid-cols-5 sm:gap-10">
            {/* Recent Activity */}
            <div className="flex flex-col border border-solid border-borderColor rounded-md p-5">
              {/* Title */}
              <p>Apple IPhone 14 Pro</p>
              {/* Stars */}
              <p>*****</p>
              {/* User + Time Duration Since Post */}
              <p>Kevin Boc + TimeStamp</p>
              {/* Product Image */}
              <img src={Product} alt="" />
              {/* Review's body (Limit:97 characters + '...', which is added after pulling data) */}
              <p>I have only had this for a few days but so far I am loving it. I went from an Android to ...</p>
            </div>

            {/* Test */}

            <div className="flex flex-col border border-solid border-borderColor rounded-md p-5">
              {/* Title */}
              <p>Apple IPhone 14 Pro</p>
              {/* Stars */}
              <p>*****</p>
              {/* User + Time Duration Since Post */}
              <p>Kevin Boc + TimeStamp</p>
              {/* Product Image */}
              <img src={Product} alt="" />
              {/* Review's body (Limit:97 characters + '...', which is added after pulling data) */}
              <p>I have only had this for a few days but so far I am loving it. I went from an Android to ...</p>
            </div>

            <div className="flex flex-col border border-solid border-borderColor rounded-md p-5">
              {/* Title */}
              <p>Apple IPhone 14 Pro</p>
              {/* Stars */}
              <p>*****</p>
              {/* User + Time Duration Since Post */}
              <p>Kevin Boc + TimeStamp</p>
              {/* Product Image */}
              <img src={Product} alt="" />
              {/* Review's body (Limit:97 characters + '...', which is added after pulling data) */}
              <p>I have only had this for a few days but so far I am loving it. I went from an Android to ...</p>
            </div>

            <div className="flex flex-col border border-solid border-borderColor rounded-md p-5">
              {/* Title */}
              <p>Apple IPhone 14 Pro</p>
              {/* Stars */}
              <p>*****</p>
              {/* User + Time Duration Since Post */}
              <p>Kevin Boc + TimeStamp</p>
              {/* Product Image */}
              <img src={Product} alt="" />
              {/* Review's body (Limit:97 characters + '...', which is added after pulling data) */}
              <p>I have only had this for a few days but so far I am loving it. I went from an Android to ...</p>
            </div>

            <div className="flex flex-col border border-solid border-borderColor rounded-md p-5">
              {/* Title */}
              <p>Apple IPhone 14 Pro</p>
              {/* Stars */}
              <p>*****</p>
              {/* User + Time Duration Since Post */}
              <p>Kevin Boc + TimeStamp</p>
              {/* Product Image */}
              <img src={Product} alt="" />
              {/* Review's body (Limit:97 characters + '...', which is added after pulling data) */}
              <p>I have only had this for a few days but so far I am loving it. I went from an Android to ...</p>
            </div>

            <div className="flex flex-col border border-solid border-borderColor rounded-md p-5">
              {/* Title */}
              <p>Apple IPhone 14 Pro</p>
              {/* Stars */}
              <p>*****</p>
              {/* User + Time Duration Since Post */}
              <p>Kevin Boc + TimeStamp</p>
              {/* Product Image */}
              <img src={Product} alt="" />
              {/* Review's body (Limit:97 characters + '...', which is added after pulling data) */}
              <p>I have only had this for a few days but so far I am loving it. I went from an Android to ...</p>
            </div>

            <div className="flex flex-col border border-solid border-borderColor rounded-md p-5">
              {/* Title */}
              <p>Apple IPhone 14 Pro</p>
              {/* Stars */}
              <p>*****</p>
              {/* User + Time Duration Since Post */}
              <p>Kevin Boc + TimeStamp</p>
              {/* Product Image */}
              <img src={Product} alt="" />
              {/* Review's body (Limit:97 characters + '...', which is added after pulling data) */}
              <p>I have only had this for a few days but so far I am loving it. I went from an Android to ...</p>
            </div>

            <div className="flex flex-col border border-solid border-borderColor rounded-md p-5">
              {/* Title */}
              <p>Apple IPhone 14 Pro</p>
              {/* Stars */}
              <p>*****</p>
              {/* User + Time Duration Since Post */}
              <p>Kevin Boc + TimeStamp</p>
              {/* Product Image */}
              <img src={Product} alt="" />
              {/* Review's body (Limit:97 characters + '...', which is added after pulling data) */}
              <p>I have only had this for a few days but so far I am loving it. I went from an Android to ...</p>
            </div>

            <div className="flex flex-col border border-solid border-borderColor rounded-md p-5">
              {/* Title */}
              <p>Apple IPhone 14 Pro</p>
              {/* Stars */}
              <p>*****</p>
              {/* User + Time Duration Since Post */}
              <p>Kevin Boc + TimeStamp</p>
              {/* Product Image */}
              <img src={Product} alt="" />
              {/* Review's body (Limit:97 characters + '...', which is added after pulling data) */}
              <p>I have only had this for a few days but so far I am loving it. I went from an Android to ...</p>
            </div>

            <div className="flex flex-col border border-solid border-borderColor rounded-md p-5">
              {/* Title */}
              <p>Apple IPhone 14 Pro</p>
              {/* Stars */}
              <p>*****</p>
              {/* User + Time Duration Since Post */}
              <p>Kevin Boc + TimeStamp</p>
              {/* Product Image */}
              <img src={Product} alt="" />
              {/* Review's body (Limit:97 characters + '...', which is added after pulling data) */}
              <p>I have only had this for a few days but so far I am loving it. I went from an Android to ...</p>
            </div>

            {/* End Test */}


          </div>
        </div>
      </div>
    </div>
  )
}

export default Home