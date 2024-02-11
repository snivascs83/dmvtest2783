// SliderComponent.jsx

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./index.module.scss"; // Import your custom styles
const CustomArrow = ({ direction, onClick }: any) => (
  <div
    className={`${styles.customArrow} ${
      direction === "next" ? styles.nextArrow : styles.prevArrow
    }`}
    onClick={onClick}
  >
    {/* Your custom arrow SVG or icon */}
    <span>{direction === "next" ? "→" : "←"}</span>
  </div>
);
const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div>
          <img src="https://placekitten.com/800/400" alt="Slide 1" />
        </div>
        <div>
          <img src="https://placekitten.com/800/401" alt="Slide 2" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
