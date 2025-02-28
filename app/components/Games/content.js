"use client";
import Image from "next/image";
import Link from "next/link";
import style from "../../style/Game/content.scss";
export default function Content({ game }) {
  return (
    <section className="content-container">
      <Image
        src={"/images/games/malenia.png"}
        width={300}
        height={300}
        alt="Malenia"
        className="desktop_only"
      />
      <section className="container">
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
          <span className="achievements">
            Achievments: {game.achievements_count}
            <Image
              src={"/images/games/cup.png"}
              width={20}
              height={20}
              alt="Cup"
            />
          </span>
          <span>Realese Date: {game.released}</span>
          <span className="website">
            Official Website: <Link href={game.website}> {game.website}</Link>
          </span>
        </div>
      </section>
      <Image
        className="desktop_only"
        src={"/images/games/ranni.png"}
        width={300}
        height={300}
        alt="Ranni"
      />
    </section>
  );
}
