/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const Middleware = (props) => {
  const { children } = props;
  const isLoggedIn = localStorage.getItem("isLogin")
  // console.log("Is Logged In:", isLoggedIn); 

  if(isLoggedIn == "true"){
    return children
  }

  return <Navigate to="/login" />
};

export default Middleware;