import { AiOutlineClose } from "react-icons/ai"
import { RiArrowDropDownLine } from "react-icons/ri"
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
    <div className="fixed top-0 left-[0] w-screen h-screen bg-backgroundColor z-10 duration-300 md:hidden">
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
          <RiArrowDropDownLine color="white" size={25} /> 
        </div>
        {account ? (
          <div className="flex flex-col items-start pl-6">
            <a href="/login" className="font-sans text-lg text-white text-center underline">Log In</a>
            <a href="/login" className="font-sans text-lg text-white text-center underline">Sign Up</a>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Categories */}
      <div className="flex flex-col my-auto border-b-[1px] border-solid border-white p-3">
        <div className="flex flex-row justify-between items-center my-auto" onClick={() => setCategory(!category)}>
          <p className="text-white text-lg font-sans font-semibold">Categories</p>
          <RiArrowDropDownLine color="white" size={25} /> 
        </div>
        {/* List of Categories */}
        {category ? (
          <div className="flex flex-col my-auto px-6">
            {/* Accessories */}
            <div className="flex flex-row justify-between items-center my-auto" onClick={() => setAccessories(!accessories)}>
              <a href="/product-listing"><p className="text-white text-lg font-sans underline">Accessories</p></a>
              <RiArrowDropDownLine color="white" size={25} /> 
            </div>
            {accessories ? (
              <div className="flex flex-col items-start pl-6">
                <a href="/product-listing" className="font-sans text-lg text-white text-center underline">1</a>
                <a href="/product-listing" className="font-sans text-lg text-white text-center underline">2</a>
              </div>
            ) : (
              ""
            )}
            {/* Cell Phones */}
            <div className="flex flex-row justify-between items-center my-auto" onClick={() => setCell(!cell)}>
              <a href="/product-listing"><p className="text-white text-lg font-sans underline">Cell Phones</p></a>
              <RiArrowDropDownLine color="white" size={25} /> 
            </div>
            {cell ? (
              <div className="flex flex-col items-start pl-6">
                <a href="/product-listing" className="font-sans text-lg text-white text-center underline">1</a>
                <a href="/product-listing" className="font-sans text-lg text-white text-center underline">2</a>
              </div>
            ) : (
              ""
            )}
            {/* Computers & Tablets */}
            <div className="flex flex-row justify-between items-center my-auto" onClick={() => setCmpAndTablt(!cmpAndTablt)}>
              <a href="/product-listing"><p className="text-white text-lg font-sans underline">Computers & Tablets</p></a>
              <RiArrowDropDownLine color="white" size={25} /> 
            </div>
            {cmpAndTablt ? (
              <div className="flex flex-col items-start pl-6">
                <a href="/productlisting" className="font-sans text-lg text-white text-center underline">1</a>
                <a href="/productlisting" className="font-sans text-lg text-white text-center underline">2</a>
              </div>
            ) : (
              ""
            )}
            {/* Gaming */}
            <div className="flex flex-row justify-between items-center my-auto" onClick={() => setGaming(!gaming)}>
              <a href="/product-listing"><p className="text-white text-lg font-sans underline">Gaming</p></a>
              <RiArrowDropDownLine color="white" size={25} /> 
            </div>
            {gaming ? (
              <div className="flex flex-col items-start pl-6">
                <a href="/productlisting" className="font-sans text-lg text-white text-center underline">1</a>
                <a href="/productlisting" className="font-sans text-lg text-white text-center underline">2</a>
              </div>
            ) : (
              ""
            )}
            {/* TV & Home Theater */}
            <div className="flex flex-row justify-between items-center my-auto" onClick={() => setTV(!tv)}>
              <a href="/product-listing"><p className="text-white text-lg font-sans underline">TV & Home Theater</p></a>
              <RiArrowDropDownLine color="white" size={25} /> 
            </div>
            {tv ? (
              <div className="flex flex-col items-start pl-6">
                <a href="/productlisting" className="font-sans text-lg text-white text-center underline">1</a>
                <a href="/productlisting" className="font-sans text-lg text-white text-center underline">2</a>
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