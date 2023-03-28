import React, { useState } from "react";
import c from "./style.module.css";
import Slider from "../../components/Slider";

const Home = () => {
  const categories = [
    "action",
    "casual",
    "combat",
    "minigame",
    "practice",
    "survival",
    "popular",
    "V1",
    "ADVENTURE",
    "BOXFIGHT",
    "DEATHRUN",
    "FASHION",
    "FREE FOR ALL",
    "DRIVING",
    "ROLEPLAY",
    "TEAM DEATHMATCH",
    "ZONEWARS",
    "TRENDING",
  ];

  return (
    <div className={c.home__page}>
      <Slider />

      <section className={c.categories}>
        <h1 className={c.category__title}>Trending categories</h1>
        <div className={c.categories__wrapper}>
          {categories.map((category) => (
            <button className={c.category} key={category}>
              {category}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
