"use client";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import Style from "../../style/HomePage/jumbo.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import style from "../../style/Game/screenshots.scss";
export default function Screenshots() {
  const { id } = useParams();

  const [screenshots, setScreenshots] = useState([]);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${id}/screenshots?key=cf03016e21b1461f974413b5b58a6356`
      )
      .then((response) => {
        setScreenshots(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="screenshots-container">
      <section className="slider-container">
        <section
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {screenshots.map((screenshot) => {
            return (
              <div className="screenshot" key={screenshot.id}>
                <div className="image">
                  <img src={screenshot.image} alt={screenshot.id} />
                </div>
              </div>
            );
          })}
        </section>
      </section>
      <button className="prevButton" onClick={prevSlide}>
        <Image src={"/images/games/right.png"} width={50} height={50} />
      </button>
      <button className="nextButton" onClick={nextSlide}>
        <Image src={"/images/games/left.png"} width={50} height={50} />
      </button>
    </section>
  );
}
