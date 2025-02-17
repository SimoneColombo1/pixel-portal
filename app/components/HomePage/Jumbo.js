"use client";
import Image from "next/image";
import Style from "../../style/HomePage/jumbo.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function Jumbo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,

    slidesToScroll: 1,
  };

  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const response = await axios.get(
        "https://newsdata.io/api/1/news?apikey=pub_69539ea318fa05efab46090d4ca4f35df175b&q=gaming&language=en&category=technology"
      );

      console.log(response.data.results);
      setNews(response.data.results);
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="jumbo-container">
      <section className="slider-container">
        <div className="jumbo-decoration">
          <Image
            src={"/images/home/jinx1.png"}
            alt="Jinx"
            width={200}
            height={200}
          />
        </div>
        <Slider {...settings} className="slider">
          {news.map((news) => {
            return (
              <div key={news.article_id}>
                <div className="jumbo">
                  <div className="image">
                    <img
                      src={
                        news.image_url
                          ? news.image_url
                          : "/images/home/large_image_not_aviable.jpg"
                      }
                    ></img>
                  </div>
                  <div className="title">
                    <h1>{news.title}</h1>
                    <span>{news.description}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </section>
  );
}
