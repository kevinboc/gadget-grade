import { RiArrowDropDownLine } from "react-icons/ri"

const Navbar = () => {

  return (
    <div>
        {/* Nav Bar */}
        <nav className="hidden md:flex h-[10vh] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex-row justify-between items-start px-[5%] z-5">
            <li className="relative inline-block mt-auto mb-auto list-none font-sans font-semibold text-m">
              <div className="flex flex-row peer/accss">
                <a href="/product-listing/accessories" className="hover:underline">Accessories</a>
                <RiArrowDropDownLine size={20} className="my-auto" />
              </div>
              <div className="invisible peer-hover/accss:visible hover:visible absolute bg-white min-w-full w-auto z-10 p-2 flex flex-col">
                <a href="/product-listing/accessories-smartwatches" className="font-normal hover:underline">Smartwatches</a>
                <a href="/product-listing/accessories-headphones" className="font-normal hover:underline">Headphones</a>
                <a href="/product-listing/accessories-cameras" className="font-normal hover:underline">Cameras</a>
                <a href="/product-listing/accessories-speakers" className="font-normal hover:underline">Speakers</a>
                <a href="/product-listing/accessories-drones" className="font-normal hover:underline">Drones</a>
              </div>
            </li>
            <li className="relative inline-block mt-auto mb-auto list-none font-sans font-semibold text-m">
              <div className="flex flex-row peer/cell">
                <a href="/product-listing/cellphones" >Cell Phones</a>
                <RiArrowDropDownLine size={20} className="my-auto" />
              </div>
              <div className="invisible peer-hover/cell:visible hover:visible absolute bg-white min-w-full w-auto z-10 p-2 flex flex-col">
                  <a href="/product-listing/cellphones-apple" className="font-normal hover:underline">Apple</a>
                  <a href="/product-listing/cellphones-samsung" className="font-normal hover:underline">Samsung</a>
                  <a href="/product-listing/cellphones-xiaomi" className="font-normal hover:underline">Xiaomi</a>
                  <a href="/product-listing/cellphones-oppo" className="font-normal hover:underline">OPPO</a>
                  <a href="/product-listing/cellphones-vivo" className="font-normal hover:underline">vivo</a>
              </div>
            </li>
            <li className="relative inline-block mt-auto mb-auto list-none font-sans font-semibold text-m">
              <div className="flex flex-row peer/cmpNTablt">
                <a href="/product-listing/computers-tablets" >Computers & Tablets</a>
                <RiArrowDropDownLine size={20} className="my-auto" />
              </div>
              <div className="invisible peer-hover/cmpNTablt:visible hover:visible absolute bg-white min-w-full w-auto z-10 p-2 flex flex-col">
                <div className="flex flex-col">
                  <div className="flex flex-row justify-between items-center border-y-[1px] border-solid border-borderColor">
                    <a href="/product-listing/computers" className="font-normal hover:underline">Computers</a>
                  </div>
                  <div className="bg-white flex flex-col">
                      <a href="/product-listing/computers-dell" className="font-normal hover:underline">Dell</a>
                      <a href="/product-listing/computers-hp" className="font-normal hover:underline">HP</a>
                      <a href="/product-listing/computers-apple" className="font-normal hover:underline">Apple</a>
                      <a href="/product-listing/computers-lenovo" className="font-normal hover:underline">Lenovo</a>
                      <a href="/product-listing/computers-microsoft" className="font-normal hover:underline">Microsoft</a>
                  </div>
                  <div className="flex flex-row justify-between items-center peer/cmp border-y-[1px] border-solid border-borderColor">
                    <a href="/product-listing/tablets" className="font-normal hover:underline">Tablets</a>
                  </div>
                  <div className="bg-white flex flex-col">
                      <a href="/product-listing/tablets-apple" className="font-normal hover:underline">Apple</a>
                      <a href="/product-listing/tablets-microsoft" className="font-normal hover:underline">Microsoft</a>
                      <a href="/product-listing/tablets-samsung" className="font-normal hover:underline">Samsung</a>
                      <a href="/product-listing/tablets-amazon" className="font-normal hover:underline">Amazon</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative inline-block mt-auto mb-auto list-none font-sans font-semibold text-m">
              <div className="flex flex-row peer/gaming">
                <a href="/product-listing/gaming" >Gaming</a>
                <RiArrowDropDownLine size={20} className="my-auto" />
              </div>
              <div className="invisible peer-hover/gaming:visible hover:visible absolute bg-white min-w-full w-auto z-10 p-2 flex flex-col">
                  <a href="/product-listing/gaming-playstation" className="font-normal hover:underline">Playstation</a>
                  <a href="/product-listing/gaming-xbox" className="font-normal hover:underline">Xbox</a>
                  <a href="/product-listing/gaming-nintendoswitch" className="font-normal hover:underline">Nintendo Switch</a>
              </div>
            </li>
            <li className="relative inline-block mt-auto mb-auto list-none font-sans font-semibold text-m">
              <div className="flex flex-row peer/tv">
                <a href="/product-listing/tv" >TV & Home Theater</a>
                <RiArrowDropDownLine size={20} className="my-auto" />
              </div>
              <div className="invisible peer-hover/tv:visible hover:visible absolute bg-white min-w-full w-auto z-10 p-2 flex flex-col">
                  <a href="/product-listing/tv-samsung" className="font-normal hover:underline">Samsung</a>
                  <a href="/product-listing/tv-lg" className="font-normal hover:underline">LG</a>
                  <a href="/product-listing/tv-sony" className="font-normal hover:underline">Sony</a>
                  <a href="/product-listing/tv-vizio" className="font-normal hover:underline">VIZIO</a>
                  <a href="/product-listing/tv-insignia" className="font-normal hover:underline">Insignia</a>
                  <a href="/product-listing/tv-hisene" className="font-normal hover:underline">Hisene</a>
              </div>
            </li>
        </nav>
    </div>
  )
}

export default Navbar