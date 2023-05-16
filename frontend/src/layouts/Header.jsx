import { useState } from "react"
import SideMenu from "./SideMenu"
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import {ReactComponent as Logo} from "../assets/logo.svg"

const Header = () => {

    // Nav Bar State
    const[nav, setNav] = useState(false)

    return (
    <div>
      <header className="bg-backgroundColor h-[10vh] flex flex-row justify-between items-start px-2 md:px-5">
        <AiOutlineMenu className="text-white h-[25px] w-auto mt-auto mb-auto pr-2 flex md:hidden" onClick={() => setNav(!nav)}/>
        <a href="/" className="mt-auto mb-auto"><Logo className="h-[25px] md:h-[40px] w-auto" /></a>
        <input type="text" placeholder="Search Gadget" key="" className="flex-auto mt-auto mb-auto mx-4 px-4 h-[25px] md:h-[40px] hidden md:flex" />
        <div className="flex mt-auto mb-auto">
          <AiOutlineSearch className="text-white h-[25px] md:h-[40px] w-auto pr-2" />
          <a href="/login" className="font-sans font-bold text-base text-white px-2 hidden md:flex mt-auto mb-auto">LOG IN s/ SIGN UP</a>
        </div>
      </header>

      {nav ? (
        <SideMenu nav={nav} setNav={setNav}/>
      ) : (
        ""
      )}

    </div>
  )
}

export default Header