import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// ProtectRoute component to protect routes based on user authentication status

const ProtectRoute = ({ children, user, redirect = "/login" }) => {

  // if user is not authenticated, navigate to the redirect path (default is "/login")

  if (!user) return <Navigate to={redirect} />;

  // if children are provided, render them. Otherwise, render the Outlet for nested routes  

  return children ? children : <Outlet />;
};

export default ProtectRoute;


/*

'children' in React allows components to render content passed between their opening and closing tags. 

'Outlet' in react router is used to render nested routes 

*/