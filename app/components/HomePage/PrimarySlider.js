"use client";
import axios from "axios";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "../../style/HomePage/PrimarySlider.scss";
import { useEffect, useState } from "react";
export default function PrimarySlider() {
  function getUpdatedDates() {
    const today = new Date();

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const nextYear = new Date(today);
    nextYear.setFullYear(today.getFullYear() + 1);

    const formatDate = (date) => date.toISOString().split("T")[0];

    return {
      tomorrow: formatDate(tomorrow),
      nextYear: formatDate(nextYear),
    };
  }

  const { tomorrow, nextYear } = getUpdatedDates();
  const [games, setGames] = useState([]);

  const getGames = async () => {
    try {
      const response = await axios.get(
        `https://api.rawg.io/api/games?ordering=released&&key=cf03016e21b1461f974413b5b58a6356&&dates=${tomorrow},${nextYear}`
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
      <section className="container">
        <h2 className="title">Upcoming Games</h2>
        <div className="slider-container">
          <Slider {...settings} className="slider">
            {games.map((game) => {
              return (
                <div key={game.id} className="element">
                  <img
                    className="image"
                    src={
                      game.background_image
                        ? game.background_image
                        : "/images/home/image_not_found.jpg"
                    }
                    alt={game.name}
                  />

                  <p>{game.name} </p>
                  <span className="info">
                    <p>Realese date:</p>
                    <p>{game.released}</p>
                  </span>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </section>
  );
}
