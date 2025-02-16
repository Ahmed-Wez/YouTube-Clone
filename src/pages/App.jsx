import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "../components/header";
import Menu from "../components/Menu";
import Home from "./Home";
import Video from "./Video";

export default function App() {
  const [isMenuActive, setIsMenuActive] = useState(true);
  const [isVideoPage, setIsVideoPage] = useState(false);

  return (
    <div className={isMenuActive ? "app menu-active" : "app"}>
      {!isVideoPage ? <Menu isMenuActive={isMenuActive} /> : null}
      <BrowserRouter>
        <Header isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
        <Routes>
          <Route index element={<Home setIsVideoPage={setIsVideoPage} />} />
          <Route path="video" element={<Video setIsVideoPage={setIsVideoPage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
