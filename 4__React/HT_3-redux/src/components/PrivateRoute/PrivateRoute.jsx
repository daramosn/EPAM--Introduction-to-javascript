import React from "react";
import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectPath }) => {
    const isAllowed = localStorage.getItem("TOKEN") ? true : false;
    return !isAllowed ? <Navigate to={redirectPath} replace /> : <Outlet />;
};

export default PrivateRoute;
