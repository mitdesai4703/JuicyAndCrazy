import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
import { Navigate } from "react-router-dom";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";


import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails";
import ProductCategory from './pages/ProductCategory';
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import AddAddress from "./pages/AddAddress";
import MyOrders from "./pages/MyOrders";


import SellerLogin from "./components/seller/SellerLogin";
import SellerLayout from "./pages/seller/SellerLayout";
import AddProduct from "./pages/seller/AddProduct";
import ProductList from "./pages/seller/ProductList";
import Orders from './pages/seller/Orders';

const App = () => {
  const location = useLocation();

  
  const isHiddenLayoutPath = ["/seller", "/login"].some((path) =>
    location.pathname.startsWith(path)
  );

  const { showUserLogin, isSeller } = useAppContext();

  return (
    <div className="text-default min-h-screen text-gray-700 w-screen overflow-x-hidden">
      
      {!isHiddenLayoutPath && <Navbar />}

    
      <Toaster />

      
      <div className="w-full">
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/contactus" element={<ContactUs />} />
           <Route path='/products/:category' element={<ProductCategory />} />
            <Route path='/products/:category/:id' element={<ProductDetails />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/loader" element={<Loading />} />

           <Route path='/seller' element={isSeller ? <SellerLayout /> : <SellerLogin />}>
            <Route index element={isSeller ? <AddProduct /> : null} />
            <Route path='product-list' element={<ProductList />} />
            <Route path='orders' element={<Orders />} />
          
          </Route>
        </Routes>
      </div>

     
      {!isHiddenLayoutPath && <Footer />}
    </div>
  );
};

export default App;
