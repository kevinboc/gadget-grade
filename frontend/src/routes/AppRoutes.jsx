import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import ProductListing from "../pages/ProductListing"
import Login from "../pages/Login"
import Product from "../pages/Product"

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-listing" element={<ProductListing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />}/>
        </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes