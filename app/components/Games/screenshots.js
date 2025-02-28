"use client";
import Image from "next/image";
import Style from "../../style/HomePage/jumbo.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import style from "../../style/Game/screenshots.scss";
export default function Screenshots({ screenshots }) {
  const [sliderKey, setSliderKey] = useState(0);
  if (screenshots.length === 0) {
    return <p>Loading screenshots...</p>;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    initialSlide: 0,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };
  useEffect(() => {
    setSliderKey((prevKey) => prevKey + 1);
  }, [screenshots]);
  return (
    <section className="screenshots-container">
      <Slider key={sliderKey} {...settings} className="slider">
        {screenshots.map((screenshot) => {
          return (
            <div key={screenshot.id}>
              <div className="screenshot">
                <div className="image">
                  <img src={screenshot.image} alt={screenshot.id} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
