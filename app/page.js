"use client";

import Image from "next/image";
import Jumbo from "./components/HomePage/Jumbo";
import Header from "./components/header";
import Footer from "./components/footer";
import PrimarySlider from "./components/HomePage/PrimarySlider";
import PopularSlider from "./components/HomePage/PopularSlider";
import Search from "./components/HomePage/Search";
import { usePathname } from "next/navigation";
export default function Home() {
  const pathname = usePathname();
  return (
    <section className="container">
      <main
        className={
          pathname === "/"
            ? "home"
            : pathname === "/Pages/Search"
            ? "search"
            : ""
        }
      >
        <section className="Main-Container">
          <Jumbo />
          <PrimarySlider />
          <Search />
          <PopularSlider />
        </section>
      </main>
    </section>
  );
}
