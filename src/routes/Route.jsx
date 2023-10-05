import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Help from "../pages/Help";
const route = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/help" element={<Help />} />
    </Routes>
    </BrowserRouter>
  );
};

export default route;
