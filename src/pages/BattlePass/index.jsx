import { useEffect, useState } from "react";
import { IoMdPlay } from "react-icons/io";
import axios from "axios";
import c from "./style.module.css";
import Loader from "../../components/Loader";

const BattlePass = () => {
  const [data, setData] = useState([]);
  const [randomImg, setRandomImg] = useState(0);
  const [currentImg, setCurrentImg] = useState("");

  useEffect(() => {
    setRandomImg(Math.floor(Math.random() * 100));
  }, []);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://fortniteapi.io/v2/items/list?lang=en",
          {
            headers: {
              Authorization: "0c13c2aa-0a2cec03-b5455c56-766ae857",
            },
          }
        );
        setData(res.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  

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

          <div className={c.main__img}>
            <img
              src={
                data.length
                  ? currentImg
                    ? currentImg
                    : data.slice(0 + randomImg, 8 + randomImg)[0].images
                        .featured
                  : null
              }
              alt=""
            />
          </div>

          <div className={`${c.randomImgs__wrapper} flex`}>
            {data.length ? null : <Loader />}
            {data.slice(0 + randomImg, 8 + randomImg).map(({ images }, inx) => (
              <div
                key={inx}
                className={
                  currentImg === images.featured
                    ? `${c.random__img} ${c.random__img__active}`
                    : c.random__img
                }
                onClick={() => setCurrentImg(images.featured)}
              >
                <img src={images.icon} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattlePass;
