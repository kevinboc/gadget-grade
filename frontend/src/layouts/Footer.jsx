import {ReactComponent as Logo} from "../assets/logo.svg"

const Footer = () => {
  return (
    <div>
        <footer className="flex flex-col items-center justify-center h-[30vh] bg-backgroundColor text-white text-center font-sans text-xs md:text-sm mt-10">
            {/* Logo */}
            <a href="/"><Logo className="h-[25px] md:h-[40px] w-auto" /></a>
            {/* Copyright */}
            <p>Copyright © 2023 GadgetGrade, Inc.</p>
            {/* QuickLinks */}
            <div className="flex flex-row justify-between list-none">
                <li>
                    <a href="/about-us" className="px-2 underline">About Us</a>
                </li>
                <li>
                    <a href="/contact-us" className="px-2 underline">Contact Us</a>
                </li>
                <li>
                    <a href="/privacy-policy" className="px-2 underline">Privacy Policy</a>
                </li>
            </div>
        </footer>
    </div>
  )
}

export default Footer