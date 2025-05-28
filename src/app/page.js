import React from "react";
import "./home.css"
import Slider from "./components/slider"
import HomeServices from "./components/homeAboutUs"
import HomeOurProducts from "./components/homeOurProduct"
import HomeOurServices from "./components/homeOurServices"
export default function Home() {
  return (
    <div>
      <Slider />
      <HomeServices />
      <HomeOurProducts />
      <HomeOurServices />
    </div>
  );
}
