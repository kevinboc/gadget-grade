import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import {ReactComponent as Logo} from "../assets/logo.svg"

const Header = () => {
    return (
    <div>
      <header className="bg-backgroundColor h-[10vh] flex flex-row justify-between items-start px-2 md:px-5">
        <AiOutlineMenu className="text-white h-[25px] w-auto mt-auto mb-auto pr-2 flex md:hidden" />
        <a href="/" className="mt-auto mb-auto"><Logo className="h-[25px] md:h-[40px] w-auto" /></a>
        <input type="text" placeholder="Search Gadget" key="" className="flex-auto mt-auto mb-auto mx-4 px-4 h-[25px] md:h-[40px] hidden md:flex" />
        <div className="flex mt-auto mb-auto">
          <AiOutlineSearch className="text-white h-[25px] md:h-[40px] w-auto pr-2" />
          <a href="/login" className="font-sans font-bold text-base text-white px-2 hidden md:flex mt-auto mb-auto">LOG IN</a>
          <a href="/login" className="font-sans font-bold text-base text-white pl-2 hidden md:flex mt-auto mb-auto">SIGN UP</a>
        </div>
      </header>
    </div>
  )
}

export default Header