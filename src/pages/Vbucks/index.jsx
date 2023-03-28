import React from "react";
import c from "./style.module.css";

const VBucks = () => {
  return (
    <div className={`${c.vbucks} flex`}>
      <div className={c.subs__left}></div>
      <div className={c.subs__right}>
        <img
          className={c.crew__logo}
          src="https://cdn2.unrealengine.com/en-subscriptions-fn-crew-png-wordmark-2200x1400-582022337.png"
          alt=""
        />
        <h2>The Ultimate Fortnite Offer</h2>
        <p>
          The best way to maximize your Fortnite experience. Joining the
          Fortnite Crew gets members everything below for only $11.99 each
          month.
        </p>

        <div className={`${c.subs__btn__wrapper} flex`}>
          <img
            className={`${c.cta_background} ${c.cta_background_left}`}
            src="https://cdn2.unrealengine.com/cta-left-292x384-3e1d5763d1a1.png"
            alt=""
          />
          <a>
            <button className={c.subs__btn}>Join Now</button>
          </a>
          <img
            className={`${c.cta_background} ${c.cta_background_right}`}
            src="https://cdn2.unrealengine.com/cta-right-387x402-c9a9f40fa098.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default VBucks;
