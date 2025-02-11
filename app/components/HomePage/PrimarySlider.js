"use client";
import axios from "axios";
import Slider from "react-slick";
import Image from "next/image";

import Style from "../../style/HomePage/PrimarySlider.scss";
import { useEffect, useState } from "react";
export default function PrimarySlider() {
  const [games, setGames] = useState([]);

  const getGames = async () => {
    try {
      const response = await axios.get(
        "https://api.rawg.io/api/games?ordering=-released&&key=cf03016e21b1461f974413b5b58a6356&&page=1"
      );

      console.log(response.data.results);
      setGames(response.data.results);
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="primary-slider-container">
      <h2 className="title">New Games</h2>
      <div className="slider-container">
        <Slider {...settings} className="slider">
          {games.map((game) => {
            return (
              <div key={game.id} className="element">
                <img
                  className="image"
                  src={
                    game.background_image ||
                    "../../../public/images/home/leblanc.png"
                  }
                  alt={game.name}
                />

                <p>{game.name} </p>
                <span className="info">
                  <p>{game.rating}</p>
                </span>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
