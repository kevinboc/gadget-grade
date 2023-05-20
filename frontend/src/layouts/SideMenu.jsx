import { AiOutlineClose } from "react-icons/ai"
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri"
import { useState } from "react"
import PropTypes from "prop-types"

const SideMenu = ({ nav, setNav }) => {

  // Validating props
   SideMenu.propTypes = {
    nav: PropTypes.bool,
    setNav: PropTypes.func
  } 
  // Function to close Side Menu
  const onClick = () => {
    setNav(!nav)
  }

  // Account
  const[account, setAccount] = useState(false)
  
  // Categories
  const[category, setCategory] = useState(false)
  const[accessories, setAccessories] = useState(false)
  const[cell, setCell] = useState(false)
  const[cmpAndTablt, setCmpAndTablt] = useState(false)
  const[gaming, setGaming] = useState(false)
  const[tv, setTV] = useState(false)

  return (
    <div className="fixed overflow-y-auto top-0 left-0 w-screen h-screen bg-backgroundColor z-10 duration-300 md:hidden">
      {/* Top Container */}
      <div className="flex flex-row justify-between items-center my-auto border-b-[1px] border-solid border-white p-3">
        {/* Menu Title */}
        {/* Close button flushed to the right */}
        <p className="text-white text-lg font-sans font-semibold">Menu</p>
        <AiOutlineClose color="white" size={25} onClick={onClick} />
      </div>

      {/* Account Container */}
      <div className="flex flex-col my-auto border-b-[1px] border-solid border-white p-3">
        <div className="flex flex-row justify-between items-center my-auto" onClick={() => setAccount(!account)}>
          <p className="text-white text-lg font-sans font-semibold">Account</p>
          {!account ? (
            <RiArrowDropDownLine color="white" size={25} /> 
          ) : (
            <RiArrowDropUpLine color="white" size={25} /> 
          )}
        </div>
        {account ? (
          <div className="flex flex-col items-start pl-6">
            <a href="/login" className="font-sans text-lg text-white text-center active:underline">Log In</a>
            <a href="/login" className="font-sans text-lg text-white text-center active:underline">Sign Up</a>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Categories */}
      <div className="flex flex-col my-auto border-b-[1px] border-solid border-white p-3">
        <div className="flex flex-row justify-between items-center my-auto" onClick={() => setCategory(!category)}>
          <p className="text-white text-lg font-sans font-semibold">Categories</p>
          {!category ? (
            <RiArrowDropDownLine color="white" size={25} />
          ) : (
            <RiArrowDropUpLine color="white" size={25} />
          )} 
        </div>
        {/* List of Categories */}
        {category ? (
          <div className="flex flex-col my-auto px-6">
            {/* Accessories */}
            <div className="flex flex-row justify-between items-center my-auto" onClick={() => setAccessories(!accessories)}>
              <a href="/product-listing/category/accessories"><p className="text-white text-lg font-sans active:underline">Accessories</p></a>
              {!accessories ? (
                <RiArrowDropDownLine color="white" size={25} /> 
              ) : (
                <RiArrowDropUpLine color="white" size={25} /> 
              )}
            </div>
            {accessories ? (
              <div className="flex flex-col items-start pl-6">
                <a href="/product-listing/category/accessories+smartwatches" className="font-sans text-lg text-white text-center active:underline">Smartwatches</a>
                <a href="/product-listing/category/accessories+headphones" className="font-sans text-lg text-white text-center active:underline">Headphones</a>
                <a href="/product-listing/category/accessories+cameras" className="font-sans text-lg text-white text-center active:underline">Cameras</a>
                <a href="/product-listing/category/accessories+speakers" className="font-sans text-lg text-white text-center active:underline">Speakers</a>
                <a href="/product-listing/category/accessories+drones" className="font-sans text-lg text-white text-center active:underline">Drones</a>
              </div>
            ) : (
              ""
            )}
            {/* Cell Phones */}
            <div className="flex flex-row justify-between items-center my-auto" onClick={() => setCell(!cell)}>
              <a href="/product-listing/category/cellphones"><p className="text-white text-lg font-sans active:underline">Cell Phones</p></a>
              {!cell ? (
                <RiArrowDropDownLine color="white" size={25} /> 
              ) : (
                <RiArrowDropUpLine color="white" size={25} /> 
              )}
            </div>
            {cell ? (
              <div className="flex flex-col items-start pl-6">
                <a href="/product-listing/category/cellphones+apple" className="font-sans text-lg text-white text-center active:underline">Apple</a>
                <a href="/product-listing/category/cellphones+samsung" className="font-sans text-lg text-white text-center active:underline">Samsung</a>
                <a href="/product-listing/category/cellphones+google" className="font-sans text-lg text-white text-center active:underline">Google</a>
                <a href="/product-listing/category/cellphones+oneplus" className="font-sans text-lg text-white text-center active:underline">OnePlus</a>
                <a href="/product-listing/category/cellphones+motorola" className="font-sans text-lg text-white text-center active:underline">Motorola</a>
              </div>
            ) : (
              ""
            )}
            {/* Computers & Tablets */}
            <div className="flex flex-row justify-between items-center my-auto" onClick={() => setCmpAndTablt(!cmpAndTablt)}>
              <a href="/product-listing/category/computers-tablets"><p className="text-white text-lg font-sans active:underline">Computers & Tablets</p></a>
              {!cmpAndTablt ? (
                <RiArrowDropDownLine color="white" size={25} /> 
              ) : (
                <RiArrowDropUpLine color="white" size={25} /> 
              )}
            </div>
            {cmpAndTablt ? (
              <div className="flex flex-col items-start pl-6">
                <a href="/product-listing/category/computers" className="font-sans text-lg text-white text-center active:underline">Computers</a>
                <div className="pl-6 flex flex-col">
                  <a href="/product-listing/category/computers+dell" className="font-sans text-lg text-white active:underline">Dell</a>
                  <a href="/product-listing/category/computers+hp" className="font-sans text-lg text-white active:underline">HP</a>
                  <a href="/product-listing/category/computers+apple" className="font-sans text-lg text-white active:underline">Apple</a>
                  <a href="/product-listing/category/computers+lenovo" className="font-sans text-lg text-white active:underline">Lenovo</a>
                  <a href="/product-listing/category/computers+microsoft" className="font-sans text-lg text-white active:underline">Microsoft</a>
                  <a href="/product-listing/category/computers+asus" className="font-sans text-lg text-white active:underline">Asus</a>
                  <a href="/product-listing/category/computers+acer" className="font-sans text-lg text-white active:underline">Acer</a>
                  <a href="/product-listing/category/computers+razer" className="font-sans text-lg text-white active:underline">Razer</a>
                </div>
                <a href="/product-listing/category/tablets" className="font-sans text-lg text-white text-center active:underline">Tablets</a>
                <div className="pl-6 flex flex-col">
                  <a href="/product-listing/category/tablets+apple" className="font-sans text-lg text-white active:underline">Apple</a>
                  <a href="/product-listing/category/tablets+microsoft" className="font-sans text-lg text-white active:underline">Microsoft</a>
                  <a href="/product-listing/category/tablets+samsung" className="font-sans text-lg text-white active:underline">Samsung</a>
                  <a href="/product-listing/category/tablets+amazon" className="font-sans text-lg text-white active:underline">Amazon</a>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* Gaming */}
            <div className="flex flex-row justify-between items-center my-auto" onClick={() => setGaming(!gaming)}>
              <a href="/product-listing/category/gaming"><p className="text-white text-lg font-sans active:underline">Gaming</p></a>
              {!gaming ? (
                <RiArrowDropDownLine color="white" size={25} />
              ) : (
                <RiArrowDropUpLine color="white" size={25} />
              )} 
            </div>
            {gaming ? (
              <div className="flex flex-col items-start pl-6">
                <a href="/product-listing/category/gaming+playstation" className="font-sans text-lg text-white text-center active:underline">Playstation</a>
                <a href="/product-listing/category/gaming+xbox" className="font-sans text-lg text-white text-center active:underline">Xbox</a>
                <a href="/product-listing/category/gaming+nintendoswitch" className="font-sans text-lg text-white text-center active:underline">Nintendo Switch</a>
              </div>
            ) : (
              ""
            )}
            {/* TV & Home Theater */}
            <div className="flex flex-row justify-between items-center my-auto" onClick={() => setTV(!tv)}>
              <a href="/product-listing/category/tv-hometheater"><p className="text-white text-lg font-sans active:underline">TV & Home Theater</p></a>
              {!tv ? (
                <RiArrowDropDownLine color="white" size={25} /> 
              ) : (
                <RiArrowDropUpLine color="white" size={25} /> 
              )}
            </div>
            {tv ? (
              <div className="flex flex-col items-start pl-6">
                <a href="/product-listing/category/tv+samsung" className="font-sans text-lg text-white text-center active:underline">Samsung</a>
                <a href="/product-listing/category/tv+lg" className="font-sans text-lg text-white text-center active:underline">LG</a>
                <a href="/product-listing/category/tv+sony" className="font-sans text-lg text-white text-center active:underline">Sony</a>
                <a href="/product-listing/category/tv+vizio" className="font-sans text-lg text-white text-center active:underline">Vizio</a>
                <a href="/product-listing/category/tv+insignia" className="font-sans text-lg text-white text-center active:underline">Insignia</a>
                <a href="/product-listing/category/tv+hisense" className="font-sans text-lg text-white text-center active:underline">Hisene</a>
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default SideMenu