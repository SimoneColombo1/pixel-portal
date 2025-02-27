"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";

export default function SingleGamePage({ params }) {
  const { id } = params;
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      if (!id) return;

      try {
        const res = await axios.get(
          `https://api.rawg.io/api/games/${id}?key=cf03016e21b1461f974413b5b58a6356`
        );

        setGame(res.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const pathname = usePathname();

  return (
    <section className="container">
      <main className={pathname === "/" ? "home" : "search"}></main>
    </section>
  );
}
