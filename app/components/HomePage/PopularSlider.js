"use client";

import Image from "next/image";
import Style from "../../style/HomePage/PopularSlider.scss";
import Slider from "react-slick";
export default function PopularSlider() {
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
    direction: "left",
    rtl: true,
  };
  return <section className="popular-slider"></section>;
}
