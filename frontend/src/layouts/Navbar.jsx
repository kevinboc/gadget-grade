import { RiArrowDropDownLine } from "react-icons/ri"

const Navbar = () => {

  return (
    <div>
        {/* Nav Bar */}
        <nav className="hidden md:flex h-[8vh] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex-row justify-between items-start px-[5%] z-5">
            <li className="relative inline-block mt-auto mb-auto list-none font-sans font-semibold text-m">
              <div className="flex flex-row peer/accss">
                <a href="/product-listing/category/accessories" className="hover:underline">Accessories</a>
                <RiArrowDropDownLine size={20} className="my-auto" />
              </div>
              <div className="invisible peer-hover/accss:visible hover:visible absolute bg-white min-w-full w-auto z-10 p-2 flex flex-col">
                <a href="/product-listing/category/accessories+smartwatches" className="font-normal hover:underline">Smartwatches</a>
                <a href="/product-listing/category/accessories+headphones" className="font-normal hover:underline">Headphones</a>
                <a href="/product-listing/category/accessories+cameras" className="font-normal hover:underline">Cameras</a>
                <a href="/product-listing/category/accessories+speakers" className="font-normal hover:underline">Speakers</a>
                <a href="/product-listing/category/accessories+drones" className="font-normal hover:underline">Drones</a>
              </div>
            </li>
            <li className="relative inline-block mt-auto mb-auto list-none font-sans font-semibold text-m">
              <div className="flex flex-row peer/cell">
                <a href="/product-listing/category/cellphones" >Cell Phones</a>
                <RiArrowDropDownLine size={20} className="my-auto" />
              </div>
              <div className="invisible peer-hover/cell:visible hover:visible absolute bg-white min-w-full w-auto z-10 p-2 flex flex-col">
                  <a href="/product-listing/category/cellphones+apple" className="font-normal hover:underline">Apple</a>
                  <a href="/product-listing/category/cellphones+samsung" className="font-normal hover:underline">Samsung</a>
                  <a href="/product-listing/category/cellphones+google" className="font-normal hover:underline">Google</a>
                  <a href="/product-listing/category/cellphones+oneplus" className="font-normal hover:underline">OnePlus</a>
                  <a href="/product-listing/category/cellphones+motorola" className="font-normal hover:underline">Motorola</a>
              </div>
            </li>
            <li className="relative inline-block mt-auto mb-auto list-none font-sans font-semibold text-m">
              <div className="flex flex-row peer/cmpNTablt">
                <a href="/product-listing/category/computers-tablets" >Computers & Tablets</a>
                <RiArrowDropDownLine size={20} className="my-auto" />
              </div>
              <div className="invisible peer-hover/cmpNTablt:visible hover:visible absolute bg-white min-w-full w-auto z-10 p-2 flex flex-col">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center border-y-[1px] border-solid border-borderColor">
                    <a href="/product-listing/category/computers" className="font-semibold hover:underline">Computers</a>
                  </div>
                  <div className="bg-white flex flex-col">
                      <a href="/product-listing/category/computers+dell" className="font-normal hover:underline">Dell</a>
                      <a href="/product-listing/category/computers+hp" className="font-normal hover:underline">HP</a>
                      <a href="/product-listing/category/computers+apple" className="font-normal hover:underline">Apple</a>
                      <a href="/product-listing/category/computers+lenovo" className="font-normal hover:underline">Lenovo</a>
                      <a href="/product-listing/category/computers+microsoft" className="font-normal hover:underline">Microsoft</a>
                  </div>
                  <div className="flex flex-row justify-between items-center peer/cmp border-y-[1px] border-solid border-borderColor">
                    <a href="/product-listing/category/tablets" className="font-semibold hover:underline">Tablets</a>
                  </div>
                  <div className="bg-white flex flex-col">
                      <a href="/product-listing/category/tablets+apple" className="font-normal hover:underline">Apple</a>
                      <a href="/product-listing/category/tablets+microsoft" className="font-normal hover:underline">Microsoft</a>
                      <a href="/product-listing/category/tablets+samsung" className="font-normal hover:underline">Samsung</a>
                      <a href="/product-listing/category/tablets+amazon" className="font-normal hover:underline">Amazon</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative inline-block mt-auto mb-auto list-none font-sans font-semibold text-m">
              <div className="flex flex-row peer/gaming">
                <a href="/product-listing/category/gaming" >Gaming</a>
                <RiArrowDropDownLine size={20} className="my-auto" />
              </div>
              <div className="invisible peer-hover/gaming:visible hover:visible absolute bg-white min-w-full w-auto z-10 p-2 flex flex-col">
                  <a href="/product-listing/category/gaming+playstation" className="font-normal hover:underline">Playstation</a>
                  <a href="/product-listing/category/gaming+xbox" className="font-normal hover:underline">Xbox</a>
                  <a href="/product-listing/category/gaming+nintendoswitch" className="font-normal hover:underline">Nintendo Switch</a>
              </div>
            </li>
            <li className="relative inline-block mt-auto mb-auto list-none font-sans font-semibold text-m">
              <div className="flex flex-row peer/tv">
                <a href="/product-listing/category/tv-hometheater" >TV & Home Theater</a>
                <RiArrowDropDownLine size={20} className="my-auto" />
              </div>
              <div className="invisible peer-hover/tv:visible hover:visible absolute bg-white min-w-full w-auto z-10 p-2 flex flex-col">
                  <div className="flex flex-row justify-between items-center border-y-[1px] border-solid border-borderColor">
                    <a href="/product-listing/category/tv" className="font-semibold hover:underline">TV</a>
                  </div>
                  <a href="/product-listing/category/tv+samsung" className="font-normal hover:underline">Samsung</a>
                  <a href="/product-listing/category/tv+lg" className="font-normal hover:underline">LG</a>
                  <a href="/product-listing/category/tv+sony" className="font-normal hover:underline">Sony</a>
                  <a href="/product-listing/category/tv+vizio" className="font-normal hover:underline">VIZIO</a>
                  <a href="/product-listing/category/tv+insignia" className="font-normal hover:underline">Insignia</a>
                  <a href="/product-listing/category/tv+hisene" className="font-normal hover:underline">Hisene</a>
                  <div className="flex flex-row justify-between items-center border-y-[1px] border-solid border-borderColor">
                    <a href="/product-listing/category/hometheater" className="font-semibold hover:underline">Home Theater</a>
                  </div>
              </div>
            </li>
        </nav>
    </div>
  )
}

export default Navbar