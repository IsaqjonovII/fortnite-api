import React from "react";
import "./style.css"

const Crew = () => {
  return (
    <div className="bucks">
      <div className="bucks_container">
        <div className="bucks_img">
          <img
            src="https://cdn2.unrealengine.com/faq-singular-card-102721-739x1023-651e0791cffe.png"
            alt=""
          />
        </div>
        <div className="container_redeem">
          <h1>redeem your v-bucks card</h1>
          <h3>CARDS PURCHASED AT RETAIL STORES ARE REDEEMED HERE</h3>
          <p>
            An Epic Games account is required to redeem a V-Bucks Card code. If
            you have played Fortnite, you already have an Epic Games account.
            Click Get Started below to find your Epic Games account and redeem
            your V-Bucks!
          </p>
          <button className="redeem_btn">get started</button>
        </div>
      </div>
    </div>
  );
};

export default Crew;
