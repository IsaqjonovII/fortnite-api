import React, { useState } from "react";
import c from "./style.module.css";
import Slider from "../../components/Slider";

const Home = () => {
  
  return (
    <div className={c.home__page}>
      <Slider />
    </div>
  );
};

export default Home;
