"use client";
import axios from "axios";
import Image from "next/image";
import Style from "../../style/HomePage/PopularSlider.scss";
import Slider from "react-slick";
import { useEffect, useState } from "react";
export default function PopularSlider() {
  const [games, setGames] = useState([]);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    autoplaySpeed: 1,
    cssEase: "linear",
    pauseOnHover: true,

    rtl: true,
  };
  return (
    <section className="popular-slider">
      <h3>Popular Slider</h3>
      <div className="slider-container">
        <Slider {...settings} className="slider">
          <div className="element">
            <h3>1</h3>
          </div>
          <div className="element">
            <h3>2</h3>
          </div>
          <div className="element">
            <h3>3</h3>
          </div>
          <div className="element">
            <h3>4</h3>
          </div>
          <div className="element">
            <h3>5</h3>
          </div>
          <div className="element">
            <h3>6</h3>
          </div>
          <div className="element">
            <h3>6</h3>
          </div>
          <div className="element">
            <h3>6</h3>
          </div>
          <div className="element">
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </section>
  );
}
