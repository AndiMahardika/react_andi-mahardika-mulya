import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateProduct from "../pages/createProduct/components/index.jsx";
import LandingPage from "../pages/landingPage/components/index.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  )
}
