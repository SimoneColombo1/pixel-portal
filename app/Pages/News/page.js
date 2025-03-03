"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import "../../style/News/news.scss"; // Import SCSS classico

export default function News() {
  const pathname = usePathname();
  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const response = await axios.get(
        "https://newsdata.io/api/1/news?apikey=pub_69539ea318fa05efab46090d4ca4f35df175b&q=gaming&language=en&category=technology"
      );
      setNews(response.data.results);
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="news-main-container">
      <main className={pathname === "/" ? "home" : "news"}>
        <section className="news-main">
          <span className="title">
            <h1>The Latest Gaming News</h1>
          </span>
          <section className="news-container">
            <section className="news-list">
              {news.map((article) => (
                <div key={article.article_id} className="news-card">
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="image-container">
                        <img
                          src={
                            article.image_url
                              ? article.image_url
                              : "/images/home/large_image_not_aviable.jpg"
                          }
                        />
                      </div>
                      <span className="news-title">{article.title}</span>
                    </div>

                    <div className="card-back">
                      <p className="description">{article.description}</p>
                      <p>
                        {" "}
                        Published at:{article.pubDate} {article.pubDateTZ}
                      </p>
                      <Link href={article.link} className="news-link">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </section>
        </section>
      </main>
    </section>
  );
}
