import React, { useState } from "react";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { Nav_Routes } from "../../routes";
import c from "./style.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isMoreMoved, setIsMoreMoved] = useState(false);
  return (
    <div className={c.sidebar}>
      <div className={c.sidebar__links}>
        {Nav_Routes.map(({ id, link, title }) => (
          <div className={`${c.sidebar__link} flex`} key={id}>
            <Link to={link ?? "/"}>{title}</Link>
          </div>
        ))}
        <div className={`${c.sidebar__link} flex`}>
          <div
            className={`${c.dropdown__wrapper} flex`}
            onClick={() => setIsMoreMoved(true)}
          >
            <p>More</p>
            <TbArrowBigRightLinesFilled className={c.more__icon} />
          </div>
          <div
            className={
              isMoreMoved ? `${c.more__link} ${c.moved}` : `${c.more__link}`
            }
          >
            <div
              className={`${c.back__wrapper} flex`}
              onClick={() => setIsMoreMoved(false)}
            >
              <TbArrowBigRightLinesFilled className={c.back__icon} />
              <p>Back</p>
            </div>
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
