import React from 'react';
import {Routes ,Route} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from '../Pages/Login';
import ProductPage from "../Pages/ProductPage"; 
import ProductDetails from "../Components/ProductDetails" 
import CartPage from '../Pages/CartPage';
import OrderSuccessfull from './OrderSuccessfull';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/products' element={<ProductPage />}/>
            <Route path='/products/:id' element={<ProductDetails />}/>
            
            <Route path='/cart/:id' element={<CartPage />}/>
            <Route path="/check" element={<OrderSuccessfull />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes