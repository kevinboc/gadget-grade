import { useState } from "react";
import SideMenu from "./SideMenu";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {ReactComponent as Logo} from "../assets/logo.svg";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    window.location.href = `/product-listing/search/${searchTerm}`;
  }

  const handleProfile = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    window.location.href = `/user/${user._id}`;
  }
  
  const handleSignOut = () => {
    sessionStorage.removeItem("user");
    window.location.href = "/login";
};

  return (
    <div>
      <header className="bg-backgroundColor h-[10vh] flex flex-row justify-between items-start px-2 md:px-5">
        <AiOutlineMenu className="text-white h-[25px] w-auto mt-auto mb-auto pr-2 flex md:hidden" onClick={() => setNav(!nav)}/>
        <a href="/" className="mt-auto mb-auto"><Logo className="h-[25px] md:h-[40px] w-auto" /></a>
        <input 
          type="text" 
          placeholder="Search Gadget" 
          key="" 
          className="flex-auto mt-auto mb-auto mx-4 px-4 h-[25px] md:h-[40px] hidden md:flex"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex mt-auto mb-auto">
          <AiOutlineSearch 
            className="text-white h-[25px] md:h-[40px] w-auto pr-2"
            onClick={handleSearch}
          />
          {sessionStorage.getItem("user") ? (
                <div className="flex flex-row item-center">
                    <p className="font-sans font-bold text-base text-white px-2 hidden md:flex mt-auto mb-auto cursor-pointer" onClick={handleProfile}>{JSON.parse(sessionStorage.getItem("user")).username}</p>
                    <button className="font-sans font-bold text-base text-white px-2 hidden md:flex mt-auto mb-auto" onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <a href="/login" className="font-sans font-bold text-base text-white px-2 hidden md:flex mt-auto mb-auto">LOG IN / SIGN UP</a>
            )}
        </div>
      </header>

      {nav ? (
        <SideMenu nav={nav} setNav={setNav}/>
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
