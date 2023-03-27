import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./style.css";
import { slider_images } from "../../assets";

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const imgRef = useRef();

  useEffect(() => {
    imgRef.current.scrollLeft = imgIndex * imgRef.current.offsetWidth;
  }, [imgIndex]);

  const prevImg = () => {
    if (imgIndex === 0) {
      setImgIndex(slider_images.length - 1);
    } else {
      setImgIndex((imgIndex) => imgIndex - 1);
    }
  };

  const nextImg = () => {
    if (imgIndex === slider_images.length - 1) {
      setImgIndex(0);
    } else {
      setImgIndex((i) => i + 1);
    }
  };

  return (
    <div className="slider">
      <button
        className={
          imgIndex === 0
            ? "arrow-left arrow__btn--disabled"
            : "arrow-left arrow__btn"
        }
        onClick={prevImg}
      >
        <BsChevronLeft />
      </button>
      <div className="slider__imgs" ref={imgRef}>
        {slider_images.map(({ id, src, overlay }) => (
          <div className="slider__card flex" key={id}>
            <div className="slider__img">
              <img className="img" src={src} alt="" />
            </div>
            <div className="overlay__wrapper">
              <img className="overlay__img" src={overlay} alt="" />
              <button className="learn__btn">learn more</button>
            </div>
          </div>
        ))}
      </div>

      <button
        className={
          imgIndex === slider_images.length
            ? "arrow-right arrow__btn--disabled"
            : "arrow-right arrow__btn"
        }
        onClick={nextImg}
      >
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Slider;
