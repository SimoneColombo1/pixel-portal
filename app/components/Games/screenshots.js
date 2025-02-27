"use client";
import Image from "next/image";
import Style from "../../style/HomePage/jumbo.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from "../../style/Game/screenshots.scss";
export default function Screenshots({ screenshots }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
  return (
    <section className="screenshots-container">
      <Slider {...settings} className="slider">
        {screenshots.map((screenshot) => {
          return (
            <div key={screenshot.id}>
              <div className="screenshot">
                <div className="image">
                  <img
                    src={
                      screenshot.image
                        ? screenshot.image
                        : "/images/home/large_image_not_aviable.jpg"
                    }
                    alt={screenshot.id}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}
