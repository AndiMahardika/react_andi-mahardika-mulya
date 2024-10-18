import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProduct from "../pages/createProduct/components/index.jsx";
import LandingPage from "../pages/landingPage/components/index.jsx";
import DetailComponent from "../pages/detailProduct/components/index.jsx";
import Middleware from "../middleware/middleware.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/product" 
          element={
            <Middleware>
              <CreateProduct />
            </Middleware>
          } />
        <Route 
          path="/product/detail/:id" 
          element={
            <Middleware>
              <DetailComponent />
            </Middleware>
          } />
      </Routes>
    </BrowserRouter>
  );
}
