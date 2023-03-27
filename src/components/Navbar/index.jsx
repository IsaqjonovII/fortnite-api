import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaUserPlus } from "react-icons/fa";
import { BsSearch, BsXLg, BsGlobe } from "react-icons/bs";
import { Nav_Routes } from "../../routes";
import { epicGamesLogo, fortniteLogo } from "../../assets";
import c from "./style.module.css";

const Navbar = ({ isSidebarOpened, setIsSidebarOpened }) => {
  const [isSearchOpened, setIsSearchOpened] = useState(false);
  const dropdown__items = [
    "العربية",
    "DEUTSCH",
    "ESPAÑOL (SPAIN)",
    "ESPAÑOL (LA)",
    "FRANÇAIS",
    "ITALIANO",
    "日本語",
    "한국어",
    "POLSKI",
    "PORTUGUÊS (BRASIL)",
    "O'ZBEKCHA",
    "TÜRKÇE",
  ];

  return (
    <nav className={`${c.navbar} flex`}>
      <div className={`${c.navbar__container} flex`}>
        <div className={`${c.left__nav} flex`}>
          <div className={`${c.nav__logo} flex`}>
            <Link to="/">
              <img className={c.epicGames__logo} src={epicGamesLogo} alt="" />
            </Link>
            <Link to="/">
              <img className={c.fort__logo} src={fortniteLogo} alt="" />
            </Link>
          </div>
          <button className={c.play__btn}>play now</button>
          {isSidebarOpened ? (
            <BsXLg
              className={c.bars__icon}
              onClick={() => setIsSidebarOpened(false)}
            />
          ) : (
            <FaBars
              className={c.bars__icon}
              onClick={() => setIsSidebarOpened(!isSidebarOpened)}
            />
          )}
          {!isSearchOpened && (
            <div className={`${c.nav__links} flex`}>
              <>
                {Nav_Routes.map(({ id, title, link }) => (
                  <div className={c.nav__link__wrp} key={id}>
                    <NavLink
                      to={link ?? "/"}
                      className={({ isActive }) =>
                        isActive
                          ? `${c.nav__link__active} ${c.nav__link}`
                          : c.nav__link
                      }
                    >
                      {title}
                    </NavLink>
                  </div>
                ))}
              </>
              <div className={c.nav__link__wrp}>
                <p className={c.dropdown__title}>more </p>
                <div className={c.dropdown__wrp}>
                  {[
                    "battle pass",
                    "crew",
                    "competetive",
                    "v-bucks",
                    "help",
                  ].map((li__item) => (
                    <li key={li__item}>{li__item}</li>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={`${c.right__nav} flex`}>
          {isSearchOpened ? (
            <div className={`${c.search__input__wrapper} flex`}>
              <input
                className={c.search__input}
                type="text"
                placeholder="Search..."
              />
              <BsXLg
                className={c.cancel__icon}
                onClick={() => setIsSearchOpened(false)}
              />
            </div>
          ) : (
            <BsSearch
              className={c.search__icon}
              onClick={() => setIsSearchOpened(!isSearchOpened)}
            />
          )}

          <div className={c.language__wrapper}>
            <BsGlobe className={c.lang__icon} />
            <div className={c.lang__dropdown}>
              {dropdown__items.map((li__item) => (
                <li key={li__item}>{li__item}</li>
              ))}
            </div>
          </div>
          <div className={c.signIn__btn}>
            {" "}
            <FaUserPlus className={c.signIn__icon} /> <span> Sign In</span>{" "}
          </div>
          <button className={c.download__btn}>Download</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
