"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Style from "../../style/Search/SearchForm.scss";
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
    "Massively multiplayer": 59,
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
      const dates = year ? year.replace(",", "-") : "";
      const metacriticRange = metacritic ? `${metacritic},100` : "";

      const url = `https://api.rawg.io/api/games?key=cf03016e21b1461f974413b5b58a6356&page=1&search=${getTitle}&metacritic=${metacriticRange}&dates=${dates}&genres=${genresString}&ordering=-metacritic`;

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
  }, [getTitle, metacritic, year, genre.join(",")]);

  return (
    <section className="container">
      <main className={usePathname() === "/" ? "home" : "Search"}>
        <section className="Main-Container">
          <section className="search-form">
            <div className="first-search">
              <input
                type="text"
                placeholder="Title"
                value={getTitle}
                onChange={FunctionGetTitle}
              />

              <select onChange={FunctionGetMetacritic}>
                <option value="">Select Metacritic</option>
                <option value="100">100</option>
                <option value="90">90</option>
                <option value="80">80</option>
                <option value="70">70</option>
                <option value="60">60</option>
              </select>

              <select onChange={FunctionGetYear}>
                <option value="">Select Year</option>
                <option value="2025-01-01,2020-12-31">2025-2020</option>
                <option value="2019-01-01,2000-12-31">2019-2000</option>
                <option value="1999-01-01,1990-12-31">1999-1990</option>
              </select>
            </div>

            <div className="genres">
              {Object.keys(genresList).map((genreName) => (
                <div key={genreName}>
                  <input
                    type="checkbox"
                    value={genreName}
                    onChange={getGenre}
                  />
                  <label>{genreName}</label>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>
    </section>
  );
}
