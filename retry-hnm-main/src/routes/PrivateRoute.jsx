import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";



const PrivateRoute = ({auth})=>{

    return auth === true ? <ProductDetail/> : <Navigate to="/login"/>
}

export default PrivateRoute;