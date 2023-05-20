import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import ProductListing from "../pages/ProductListing"
import Login from "../pages/Login"
import Product from "../pages/Product"
import User from "../pages/User"
import ReviewPage from "../pages/ReviewPage"
import AboutUs from "../pages/AboutUs"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import ContactUs from "../pages/ContactUs"

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-listing/:path/:item" element={<ProductListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />}/>
          <Route path="/user/:id" element={<User />}/>
          <Route path="/review/:id" element={<ReviewPage />}/>
          <Route path="/about-us" element={<AboutUs />}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}/>
          <Route path="/contact-us" element={<ContactUs />}/>

        </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes