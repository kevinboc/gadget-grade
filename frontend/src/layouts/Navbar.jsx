const Navbar = () => {
  return (
    <div>
        <nav className="hidden md:flex h-[10vh] shadow-[0_8px_4px_0_rgba(0,0,0,0.25)] flex-row justify-around items-start px-5">
            <li className="mt-auto mb-auto list-none font-sans font-semibold text-m">
              <a href="/product-listing">Accessories</a>
            </li>
            <li className="mt-auto mb-auto list-none font-sans font-semibold text-m">
              <a href="/product-listing">Cell Phones</a>
            </li>
            <li className="mt-auto mb-auto list-none font-sans font-semibold text-m">
              <a href="/product-listing">Computers & Tablets</a>
            </li>
            <li className="mt-auto mb-auto list-none font-sans font-semibold text-m">
              <a href="/product-listing">Gaming</a>
            </li>
            <li className="mt-auto mb-auto list-none font-sans font-semibold text-m">
              <a href="/product-listing">TV & Home Theater</a>
            </li>
        </nav>
    </div>
  )
}

export default Navbar