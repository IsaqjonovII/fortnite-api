import { useEffect, useMemo, useState } from "react";
import { IoMdPlay } from "react-icons/io";
import axios from "axios";
import c from "./style.module.css";

const BattlePass = () => {
  const [data, setData] = useState([]);

  const axiosInstance = useMemo(
    () =>
      axios.create({
        baseURL: "https://fortniteapi.io/v2",
        headers: {
          Authorization: "0c13c2aa-0a2cec03-b5455c56-766ae857",
        },
      }),
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/items/list?lang=en");
        setData(res.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className={c.battle__pass}>
      <div className={c.battlepass__container}>
        <div className={c.video__dot__mask}></div>
        <div className={c.video__container}>
          <video className={c.video} autoPlay loop muted>
            <source src="https://cdn2.unrealengine.com/231001-fnbr-c4s2-gameplaytrailer-websiteheader-01c8c7bb713d.mp4" />
            <source src="https://cdn2.unrealengine.com/231001-fnbr-c4s2-gameplaytrailer-websiteheader-9399f6bf71ab.webm" />
            "Your browser does not support videos"
          </video>
          <div className={`${c.content} flex`}>
            <div className={c.content__wrapper}>
              <h3>Chapter 4 Season 2</h3>
              <h1>Battle pass</h1>
              <h4>UNLOCK A MEGA CAST FOR THE MEGA SEASON.</h4>
              <a href="https://youtu.be/rs8YIhsbZxg" target="_blank">
                <div className={c.play__wrapper}>
                  <IoMdPlay />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={c.random__images}>
          <div className={c.random__images__title}>
            <h1>UNLOCK THUNDER AND MYSTICA</h1>
            <h2>
              PLUS MORE NEW OUTFITS, INCLUDING EREN JAEGER LATER IN THE SEASON!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattlePass;
