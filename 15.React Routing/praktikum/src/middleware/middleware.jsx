import { Navigate } from "react-router-dom";

const Middleware = (props) => {
  const { children } = props;
  const isLoggedIn = localStorage.getItem("isLogin") === "true";
  console.log("Is Logged In:", isLoggedIn); 

  return isLoggedIn ? children : <Navigate to="/" />;
};

export default Middleware;