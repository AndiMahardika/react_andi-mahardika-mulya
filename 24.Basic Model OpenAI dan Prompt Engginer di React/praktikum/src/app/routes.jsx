import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import QnA from "../features/qna/index.jsx";
import Chef from "../features/chef/index.jsx";

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QnA />} />
        <Route path="/chef" element={<Chef />} />
      </Routes>
    </BrowserRouter>
  )
}