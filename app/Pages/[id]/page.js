"use client";

import { useState, useEffect } from "react";
import { usePathname, useParams } from "next/navigation";
import axios from "axios";
import Screenshots from "../../components/Games/screenshots";
import Content from "../../components/Games/content";

export default function SingleGamePage() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [screenshots, setScreenshots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameData = async () => {
      if (!id) return;

      try {
        const gameRes = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=cf03016e21b1461f974413b5b58a6356`
        );
        setGame(gameRes.data);

        const screenshotsRes = await axios.get(
          `https://api.rawg.io/api/games/${id}/screenshots?key=cf03016e21b1461f974413b5b58a6356`
        );
        setScreenshots(screenshotsRes.data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const pathname = usePathname();

  return (
    <section className="container">
      <main className={pathname === "/" ? "home" : "Search"}>
        <section className="game-main">
          <Screenshots screenshots={screenshots} />
          <Content game={game} />
        </section>
      </main>
    </section>
  );
}
