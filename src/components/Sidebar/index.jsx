import React from "react";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { Nav_Routes } from "../../routes";
import c from "./style.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={c.sidebar}>
      <div className={c.sidebar__links}>
        {Nav_Routes.map(({ id, link, title }) => (
          <div className={`${c.sidebar__link} flex`} key={id}>
            <Link to={link ?? "/"}>{title}</Link>
          </div>
        ))}
        <div className={`${c.sidebar__link} flex`}>
          <dwiv className={`${c.dropdown__wrapper} flex`}>
            <p>More</p>
            <TbArrowBigRightLinesFilled className={c.more__icon} />
          </dwiv>
          <div className={c.more__link}>
            {["battle pass", "crew", "competetive", "v-bucks", "help"].map(
              (li__item) => (
                <li key={li__item}>{li__item}</li>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
