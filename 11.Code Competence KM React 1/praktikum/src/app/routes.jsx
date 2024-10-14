import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Landingpage from "../pages/landingpage";
import AboutUs from "../pages/aboutUs";

export default function RouterApp(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}