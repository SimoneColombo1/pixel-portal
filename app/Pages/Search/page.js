"use client";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import style from "../../style/Search/SearchForm.scss";
import "../../style/Search/Games-cards.scss";
export default function Search() {
  const [getTitle, setTitle] = useState("");
  const [genre, setGenre] = useState([]);
  const [metacritic, setMetacritic] = useState("");
  const [year, setYear] = useState("");
  const [games, setGames] = useState([]);

  const genresList = {
    Shooter: 2,
    Action: 4,
    Indie: 51,
    RPG: 5,
    MMO: 59,
    Racing: 1,
    Adventure: 3,
    Arcade: 11,
    Sports: 15,
    Strategy: 10,
  };

  const FunctionGetTitle = (event) => setTitle(event.target.value);

  const getGenre = (event) => {
    const selectedGenre = event.target.value;
    setGenre((prevGenres) =>
      prevGenres.includes(selectedGenre)
        ? prevGenres.filter((g) => g !== selectedGenre)
        : [...prevGenres, selectedGenre]
    );
  };

  const FunctionGetMetacritic = (event) => setMetacritic(event.target.value);

  const FunctionGetYear = (event) => setYear(event.target.value);

  const getGames = async () => {
    try {
      const genresString = genre.map((g) => genresList[g]).join(",");
      const dates = year ? year.replace(",", "-") : "2020-01-01,2025-12-31";
      const metacriticRange = metacritic ? `${metacritic},100` : "50,100";

      let url = `https://api.rawg.io/api/games?key=cf03016e21b1461f974413b5b58a6356&metacritic=${metacriticRange}&dates=${dates}&oredering=-metacritic`;

      if (getTitle) url += `&search=${getTitle}`;
      if (genresString) url += `&genres=${genresString}`;

      console.log("API Request URL:", url);

      const response = await axios.get(url);
      console.log("API Response Data:", response.data.results);

      setGames(response.data.results);
    } catch (error) {
      console.error("Errore nella richiesta:", error);
    }
  };

  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    getGames();
  }, [getTitle, metacritic, year, genre.join(",")]);

  return (
    <section className="container">
      <main className={usePathname() === "/" ? "home" : "Search"}>
        <section className="search-main-Container">
          <section className="search-form">
            <div className="first-search">
              <span className="title">
                <label>Search by title:</label>
                <input
                  type="text"
                  placeholder="Title"
                  value={getTitle}
                  onChange={FunctionGetTitle}
                />
              </span>
              <span className="dropdown">
                <label>Metacritic Score:</label>
                <select onChange={FunctionGetMetacritic}>
                  <option value=""> Select Score</option>
                  <option value="100">100</option>
                  <option value="90">90</option>
                  <option value="80">80</option>
                  <option value="70">70</option>
                  <option value="60">60</option>
                  <option value="50">50</option>
                </select>
              </span>
              <span className="dropdown">
                <label>Year Of Realese:</label>
                <select onChange={FunctionGetYear}>
                  <option value="">Select Year</option>
                  <option value="2025-01-01,2020-12-31">2025-2020</option>
                  <option value="2019-01-01,2000-12-31">2019-2000</option>
                  <option value="1999-01-01,1990-12-31">1999-1990</option>
                </select>
              </span>
            </div>

            <div className="genres">
              <p>Genres:</p>
              <div>
                {Object.keys(genresList).map((genreName) => (
                  <div key={genreName}>
                    <input
                      type="checkbox"
                      id={genreName}
                      value={genreName}
                      onChange={getGenre}
                      className="checkbox"
                    />
                    <label htmlFor={genreName} className="button">
                      {genreName}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="games-container">
            <section className="games-list">
              {games.length > 0 ? (
                games.map((game) => (
                  <Link
                    href={`/Pages/${game.id}`}
                    key={game.id}
                    className="game-card"
                  >
                    <img
                      src={game.background_image}
                      alt={game.name}
                      className="image"
                    />

                    <div>
                      <h3>{game.name}</h3>
                      <span>
                        Metacritic:{" "}
                        <p
                          className={`vote ${
                            game.metacritic >= 80
                              ? "high-score"
                              : game.metacritic >= 50
                              ? "medium-score"
                              : "low-score"
                          }`}
                        >
                          {game.metacritic || "N/A"}
                        </p>
                      </span>
                      <p>
                        Genres:
                        {game.genres.map((genre) => genre.name).join(", ")}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <p>No results</p>
              )}
            </section>
          </section>
        </section>
      </main>
    </section>
  );
}
