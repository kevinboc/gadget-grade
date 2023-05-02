import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import ProductListing from "../pages/ProductListing"
import Login from "../pages/Login"

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing" element={<ProductListing />} />
        <Route path="/login" element={<Login />} />
        </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes