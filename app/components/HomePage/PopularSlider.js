"use client";
import axios from "axios";
import Image from "next/image";
import Style from "../../style/HomePage/PopularSlider.scss";
import Slider from "react-slick";
import { useEffect, useState } from "react";
export default function PopularSlider() {
  const [games, setGames] = useState([]);
  const getGames = async () => {
    try {
      const response = await axios.get(
        "https://api.rawg.io/api/games?metacritic=90,100&&key=cf03016e21b1461f974413b5b58a6356&&page=1"
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
    rtl: true,
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
    <section className="popular-slider">
      <Image
        src={"/images/home/pow_pow.png"}
        alt="pow pow"
        width={190}
        height={250}
        className="decorative-image"
      />
      <h3 className="title">Top Rated Games</h3>
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
                  <p>
                    Rating:
                    {game.metacritic}
                  </p>
                </span>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
