import React, { useEffect } from "react";
import c from "../style.module.css";

const Card = ({ images, rarity, added, releaseDate, description }) => {
  return (
    <div className={c.card}>
      <div className={c.card__img}>
        <img src={images.full_background} alt="" />
      </div>
      <div className={c.description}>
        <p>{description}</p>
      </div>

      <div className={c.details}>
        <li>
          Release date: <span className={c.date__label}>{releaseDate ?? added.date}</span>
        </li>
        <li>
          Rarity:{" "}
          <span
            className={
              rarity.id.toLowerCase() === "epic"
                ? c.epic__label
                : c.legendary__label
            }
          >
            {rarity.id}
          </span>
        </li>
      </div>
    </div>
  );
};

export default Card;
