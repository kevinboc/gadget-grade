import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import ProductListing from "../pages/ProductListing"
import Login from "../pages/Login"
import Product from "../pages/Product"
import UserProfile from "../pages/userProfile"
import SignUp from "../pages/SignUp"

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-listing/:path/:item" element={<ProductListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<Product />}/>
          <Route path="/userProfile" element={<UserProfile />}/>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes