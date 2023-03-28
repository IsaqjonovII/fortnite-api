import React from 'react';
import { GrFacebook, GrInstagram, GrSnapchat, GrTwitter, GrYoutube } from "react-icons/gr";
import { FaArrowUp, FaTwitch } from "react-icons/fa"
import c from "./style.module.css";

const Footer = () => {

  const backtoTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className={c.footer}>
      <footer className={c.footer__container}>
        <div className={`${c.footer__top} flex`}>
          <div className={c.footer__icons}>
            <GrFacebook />
            <GrTwitter />
            <FaTwitch />
            <GrYoutube />
            <GrInstagram />
            <GrSnapchat />
          </div>
          <div className={c.backto__top} onClick={backtoTop}>
            <FaArrowUp />
            <span>back to top</span>
          </div>
        </div>

        <div className={`${c.footer__links} flex`}>
          <ul>
            <li>Home</li>
            <li>battle pass</li>
            <li>vbucks</li>
            <li>get fortnite</li>
          </ul>
          <ul>
            <li>news</li>
            <li>FAQ</li>
            <li>EULA</li>
            <li>competetive</li>
          </ul>
          <ul>
            <li>vbucks card</li>
            <li>help</li>
            <li>safety and security</li>
            <li>Community rules</li>
          </ul>
        </div>
        <p className={c.copyrights}>
          © 2023, Epic Games, Inc. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine 4 and UE4 are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. All rights reserved.

        </p>
      </footer>
    </div>
  )
}

export default Footer
