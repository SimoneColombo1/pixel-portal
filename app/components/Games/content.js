"use client";
import Image from "next/image";
import Link from "next/link";
import style from "../../style/Game/content.scss";
export default function Content({ game }) {
  return (
    <section className="content-container">
      <span className="title">
        <h2>{game.name}</h2>
      </span>
      <div className="content">
        <span>{game.description_raw}</span>
        <span>
          Platforms:
          {game.platforms.map((platform, index) => (
            <span className="platforms" key={platform.platform.name}>
              {" "}
              {platform.platform.name}
              {index < game.platforms.length - 1 ? " - " : ""}
            </span>
          ))}
        </span>
        <span>
          Publisher:
          {game.publishers.map((publisher, index) => (
            <span key={publisher.key} className="platforms">
              {publisher.name}
              {index < publisher.length - 1 ? " - " : ""}
            </span>
          ))}
        </span>
        <span> Achievments: {game.achievements_count}</span>
        <span>Date of Realese: {game.released}</span>
        <span>
          Official Website: <Link href={game.website}> {game.website}</Link>
        </span>
      </div>
    </section>
  );
}
