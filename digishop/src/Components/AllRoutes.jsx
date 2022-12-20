import React from 'react';
import {Routes ,Route} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from '../Pages/Login';
import ProductPage from "../Pages/ProductPage"; 
import ProductDetails from "../Components/ProductDetails" 
import CartPage from '../Pages/CartPage';
import OrderSuccessfull from './OrderSuccessfull';
import PrivateRoute from './PrivateRoute';
import Payment from '../Pages/Payment';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/products' element={<PrivateRoute><ProductPage /></PrivateRoute>}/>
            <Route path='/products/:id' element={<PrivateRoute><ProductDetails /></PrivateRoute>}/>
            
            <Route path='/cart/:id' element={<PrivateRoute><CartPage /></PrivateRoute>}/>
            <Route path="/checkout" element={<PrivateRoute><OrderSuccessfull /></PrivateRoute>}/>
            <Route path="/payments" element={<PrivateRoute><Payment /></PrivateRoute>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes