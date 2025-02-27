"use client";
import Image from "next/image";
import Style from "../../style/HomePage/jumbo.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Content({ game }) {
  return (
    <section className="content-container">
      <h2>{game.name}</h2>
    </section>
  );
}
